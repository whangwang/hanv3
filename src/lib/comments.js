// Comments data layer for the /talks/storytelling page.
//
// The page uses Medium-style margin comments: every commentable element on
// the page (paragraphs, headings, quotes) carries a stable `data-anchor-id`,
// and each comment targets one anchor. The right-rail UI shows ALL comments
// for the page at once, so reads are page-level (no per-section filter).
//
// Three async functions hide the persistence backend from the UI:
//   fetchComments()                                       -> Comment[]   (all)
//   postComment({ anchorId, quote, parentId, author, body }) -> Comment
//   upvoteComment(commentId)                              -> { commentId, upvotes }
//
// Persistence: a Google Apps Script Web App backed by a Google Sheet (URL in
// SHEETS_ENDPOINT below). When SHEETS_ENDPOINT is empty, or any network/parse
// call fails, every function transparently falls back to a per-tab in-memory
// store so the live demo never breaks.
//
// ────────────────────────────────────────────────────────────────────────────
// CONTRACT WITH THE APPS SCRIPT ENDPOINT
// ────────────────────────────────────────────────────────────────────────────
//   READ    GET  ?action=list
//           → { comments: Comment[] }                           // page-level, no filter
//   CREATE  POST { action: "create", comment: Comment }         // client builds Comment
//           → { comment: Comment }                              // server echoes it back
//   UPVOTE  POST { action: "upvote", comment_id: <id> }
//           → { commentId, upvotes }                            // camelCase
//
// All POSTs use Content-Type text/plain;charset=utf-8 so they stay a "simple"
// CORS request and avoid an Apps Script preflight.
//
// ────────────────────────────────────────────────────────────────────────────
// SPREADSHEET COLUMNS (one comment per row)
// ────────────────────────────────────────────────────────────────────────────
//   comment_id   string  — uuid (client-generated; server stores verbatim)
//   anchor_id    string  — stable id of the commented element (e.g. "s3-p1",
//                          "s4-title", "s7-quote") — NOT the section id
//   quote        string  — selected text excerpt the comment is about (may
//                          be empty if the user clicked the anchor without
//                          selecting any text); up to ~280 chars
//   parent_id    string  — empty/null for top-level, parent comment_id for replies
//   author       string  — display name typed by reader (trimmed, ≤80 chars)
//   body         string  — comment text (trimmed, ≤2000 chars)
//   upvotes      number  — running count
//   created_at   string  — ISO timestamp (client-generated)
//
// ────────────────────────────────────────────────────────────────────────────
// BACKEND CHANGES REQUIRED (vs the earlier section-scoped version):
//   1. Add columns `anchor_id` and `quote` to the Sheet. (`section_id` can
//      stay as a legacy column or be removed — it is no longer written.)
//   2. The `list` handler should return ALL rows (no section_id filter).
//   3. The `create` handler must persist the new `anchor_id` and `quote`
//      fields verbatim from the incoming `comment` object.
//   4. The `upvote` handler is unchanged.

// ──────────────────────────────────────────────────────────────────────────
// Endpoint — empty means "use in-memory fallback only".
// ──────────────────────────────────────────────────────────────────────────
export const SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxrWTpOOGv8bbItRYqhfr1jbPHmIaFjnUJMTnPeQ1LuFx83qbfsT5hfc4Jiwr_IzftS/exec";

// ──────────────────────────────────────────────────────────────────────────
// In-memory fallback store — single source of truth when SHEETS_ENDPOINT
// is empty OR when the network call fails. Flat list keyed by comment_id.
// ──────────────────────────────────────────────────────────────────────────
const _store = []; // Comment[]

function _uid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID)
    return crypto.randomUUID();
  return `c_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

function _clone(c) {
  return { ...c };
}

// Private in-memory branches — extracted so the remote and fallback paths
// can never drift apart on shape, and `catch` can reach them cleanly.
function _localFetch() {
  return _store.map(_clone);
}

function _localPost(comment) {
  _store.push(comment);
  return _clone(comment);
}

function _localUpvote(commentId) {
  const target = _store.find((c) => c.comment_id === commentId);
  if (target) {
    target.upvotes += 1;
    return { commentId, upvotes: target.upvotes };
  }
  return { commentId, upvotes: 0 };
}

// ──────────────────────────────────────────────────────────────────────────
// fetchComments — return ALL comments for the page (flat list).
// UI is responsible for grouping by anchor and sorting (by upvotes desc).
// ──────────────────────────────────────────────────────────────────────────
export async function fetchComments() {
  if (SHEETS_ENDPOINT) {
    try {
      const url = `${SHEETS_ENDPOINT}?action=list`;
      const res = await fetch(url, { method: "GET" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return Array.isArray(data.comments) ? data.comments : [];
    } catch (err) {
      // Apps Script returns a styled HTML error page on failures, so res.json()
      // can throw; fall through to the in-memory store so the page stays usable.
      console.warn("[comments] fetchComments fell back to in-memory:", err);
    }
  }
  return _localFetch();
}

// ──────────────────────────────────────────────────────────────────────────
// postComment — create a top-level comment or a reply.
//   anchorId  required — stable element id the comment is anchored to
//   quote     optional — selected text excerpt this comment is about
//   parentId  optional — comment_id of parent for one-level replies
// The client builds the full Comment (uuid + ISO timestamp) so optimistic
// UI updates can use the same id the server will store.
// ──────────────────────────────────────────────────────────────────────────
export async function postComment({
  anchorId,
  quote = "",
  parentId = null,
  author,
  body,
}) {
  const comment = {
    comment_id: _uid(),
    anchor_id: anchorId,
    quote: (quote || "").trim().slice(0, 280),
    parent_id: parentId || null,
    author: (author || "Anonymous").trim().slice(0, 80),
    body: (body || "").trim().slice(0, 2000),
    upvotes: 0,
    created_at: new Date().toISOString(),
  };

  if (SHEETS_ENDPOINT) {
    try {
      const res = await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action: "create", comment }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return data.comment || comment;
    } catch (err) {
      console.warn("[comments] postComment fell back to in-memory:", err);
    }
  }
  return _localPost(comment);
}

// ──────────────────────────────────────────────────────────────────────────
// upvoteComment — increment the upvote count for a comment.
// UI applies the change optimistically; this returns the authoritative count.
// Both branches return the same shape: { commentId, upvotes }.
// ──────────────────────────────────────────────────────────────────────────
export async function upvoteComment(commentId) {
  if (SHEETS_ENDPOINT) {
    try {
      const res = await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action: "upvote", comment_id: commentId }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.warn("[comments] upvoteComment fell back to in-memory:", err);
    }
  }
  return _localUpvote(commentId);
}
