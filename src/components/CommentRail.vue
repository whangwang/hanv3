<template>
  <aside
    class="st-rail-comments"
    :class="{ 'has-composer': composer != null }"
    aria-label="Discussion"
  >
    <header class="st-rail-head">
      <h3 class="st-rail-title">Discussion</h3>
      <span class="st-rail-count">{{ comments.length }}</span>
    </header>

    <p v-if="!comments.length && composer == null" class="st-rail-empty">
      Select any line of text — or click a section title — to start a comment.
      Threads appear here.
    </p>

    <!-- Composer pops in when an anchor is targeted. -->
    <form
      v-if="composer"
      class="st-rail-composer"
      @submit.prevent="submit"
      ref="composerForm"
    >
      <div class="st-rail-composer-head">
        <span class="st-rail-composer-eyebrow">Commenting on</span>
        <button
          type="button"
          class="st-rail-composer-close"
          @click="$emit('cancel-composer')"
          aria-label="Cancel comment"
        >×</button>
      </div>
      <blockquote class="st-rail-quote">
        <span class="quote-mark" aria-hidden="true">“</span>{{ composerExcerpt }}
      </blockquote>
      <input
        v-model="newAuthor"
        class="st-rail-input"
        type="text"
        :placeholder="displayName ? displayName : 'Your name'"
        aria-label="Your display name"
        maxlength="80"
      >
      <textarea
        v-model="newBody"
        ref="composerBody"
        class="st-rail-textarea"
        placeholder="Your comment…"
        aria-label="Comment body"
        rows="3"
        maxlength="2000"
      ></textarea>
      <div class="st-rail-composer-actions">
        <span class="st-rail-counter">{{ newBody.length }} / 2000</span>
        <button type="submit" class="st-rail-btn" :disabled="!canSubmit">Post</button>
      </div>
    </form>

    <div v-if="loading" class="st-rail-loading">Loading discussion…</div>

    <ol v-else-if="groups.length" class="st-rail-list">
      <li
        v-for="g in groups"
        :key="g.anchorId"
        :class="['st-rail-group', { active: activeAnchor === g.anchorId }]"
      >
        <button
          type="button"
          class="st-rail-jump"
          @click="$emit('jump', g.anchorId)"
          :aria-label="`Jump to: ${g.preview}`"
        >
          <span class="dot" aria-hidden="true"></span>
          <span class="preview">{{ g.preview }}</span>
        </button>

        <ul class="st-rail-thread">
          <li v-for="t in g.threads" :key="t.comment_id">
            <article class="st-rail-comment">
              <blockquote v-if="t.quote" class="st-rail-quote subtle">
                <span class="quote-mark" aria-hidden="true">“</span>{{ t.quote }}
              </blockquote>
              <header class="st-rail-comment-head">
                <span class="author">{{ t.author }}</span>
                <span class="time" :title="t.created_at">{{ relative(t.created_at) }}</span>
              </header>
              <p class="body">{{ t.body }}</p>
              <footer class="actions">
                <button
                  :class="['upvote', { voted: upvoted.has(t.comment_id) }]"
                  @click="upvote(t.comment_id)"
                  :aria-pressed="upvoted.has(t.comment_id) ? 'true' : 'false'"
                  aria-label="Upvote"
                >
                  <span aria-hidden="true">▲</span>
                  <span class="count">{{ t.upvotes }}</span>
                </button>
                <button
                  class="reply-trigger"
                  @click="openReply(t.comment_id)"
                  :aria-expanded="replyOpen === t.comment_id ? 'true' : 'false'"
                >
                  Reply
                </button>
              </footer>
            </article>

            <ul v-if="t.replies.length" class="st-rail-replies">
              <li v-for="r in t.replies" :key="r.comment_id">
                <article class="st-rail-comment is-reply">
                  <header class="st-rail-comment-head">
                    <span class="author">{{ r.author }}</span>
                    <span class="time" :title="r.created_at">{{ relative(r.created_at) }}</span>
                  </header>
                  <p class="body">{{ r.body }}</p>
                  <footer class="actions">
                    <button
                      :class="['upvote', { voted: upvoted.has(r.comment_id) }]"
                      @click="upvote(r.comment_id)"
                      :aria-pressed="upvoted.has(r.comment_id) ? 'true' : 'false'"
                      aria-label="Upvote"
                    >
                      <span aria-hidden="true">▲</span>
                      <span class="count">{{ r.upvotes }}</span>
                    </button>
                  </footer>
                </article>
              </li>
            </ul>

            <form
              v-if="replyOpen === t.comment_id"
              class="st-rail-reply-form"
              @submit.prevent="submitReply(t.comment_id, g.anchorId)"
            >
              <input
                v-model="replyAuthor"
                class="st-rail-input"
                type="text"
                :placeholder="displayName ? displayName : 'Your name'"
                aria-label="Your display name"
                maxlength="80"
              >
              <textarea
                v-model="replyBody"
                class="st-rail-textarea"
                :placeholder="`Reply to ${t.author}…`"
                aria-label="Reply"
                rows="2"
                maxlength="2000"
              ></textarea>
              <div class="st-rail-composer-actions">
                <button type="button" class="st-rail-link" @click="cancelReply">Cancel</button>
                <button type="submit" class="st-rail-btn" :disabled="!canSubmitReply">Reply</button>
              </div>
            </form>
          </li>
        </ul>
      </li>
    </ol>
  </aside>
</template>

<script>
import { postComment, upvoteComment } from '@/lib/comments'

export default {
  name: 'CommentRail',
  props: {
    comments:      { type: Array,  required: true },        // all comments for page
    anchors:       { type: Object, required: true },        // { anchorId: { id, label, preview } }
    activeAnchor:  { type: String, default: '' },
    composer:      { type: Object, default: null },         // { anchorId, quote } when open
    displayName:   { type: String, default: '' },
    loading:       { type: Boolean, default: false },
  },
  emits: ['jump', 'posted', 'updated', 'cancel-composer', 'display-name'],
  data() {
    return {
      newAuthor: '',
      newBody: '',
      replyAuthor: '',
      replyBody: '',
      replyOpen: null,
      upvoted: new Set(),
    }
  },
  computed: {
    canSubmit()      { return this.newBody.trim().length > 0 },
    canSubmitReply() { return this.replyBody.trim().length > 0 },
    composerExcerpt() {
      if (!this.composer) return ''
      if (this.composer.quote) return this.composer.quote
      const a = this.anchors[this.composer.anchorId]
      return a ? a.preview : ''
    },
    // Group comments by anchor_id, sort groups by anchor order on the page,
    // and within each group sort top-level threads by upvotes desc.
    groups() {
      const byAnchor = new Map()
      for (const c of this.comments) {
        if (!byAnchor.has(c.anchor_id)) byAnchor.set(c.anchor_id, [])
        byAnchor.get(c.anchor_id).push(c)
      }
      const sortDesc = (a, b) =>
        b.upvotes - a.upvotes || new Date(a.created_at) - new Date(b.created_at)
      const out = []
      for (const anchorId of Object.keys(this.anchors)) {
        const list = byAnchor.get(anchorId)
        if (!list || !list.length) continue
        const tops = list.filter(c => !c.parent_id).slice().sort(sortDesc)
        const repliesByParent = list.reduce((acc, c) => {
          if (c.parent_id) (acc[c.parent_id] ||= []).push(c)
          return acc
        }, {})
        out.push({
          anchorId,
          preview: this.anchors[anchorId].preview,
          threads: tops.map(t => ({
            ...t,
            replies: (repliesByParent[t.comment_id] || [])
              .slice()
              .sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
          })),
        })
      }
      return out
    },
  },
  watch: {
    composer(c) {
      if (c) {
        this.$nextTick(() => {
          if (this.$refs.composerBody) this.$refs.composerBody.focus()
        })
      } else {
        this.newAuthor = ''
        this.newBody = ''
      }
    },
  },
  methods: {
    async submit() {
      if (!this.canSubmit || !this.composer) return
      const author = (this.newAuthor || this.displayName || 'Anonymous').trim()
      const body = this.newBody.trim()
      const { anchorId, quote } = this.composer
      try {
        const saved = await postComment({ anchorId, quote, author, body })
        if (author && author !== this.displayName) this.$emit('display-name', author)
        this.$emit('posted', saved)
      } catch {
        // postComment already swallows + warns; emit cancel as best-effort no-op
      }
    },
    openReply(commentId) {
      this.replyOpen = this.replyOpen === commentId ? null : commentId
      this.replyAuthor = ''
      this.replyBody = ''
    },
    cancelReply() {
      this.replyOpen = null
      this.replyAuthor = ''
      this.replyBody = ''
    },
    async submitReply(parentId, anchorId) {
      if (!this.canSubmitReply) return
      const author = (this.replyAuthor || this.displayName || 'Anonymous').trim()
      const body = this.replyBody.trim()
      try {
        const saved = await postComment({ anchorId, quote: '', parentId, author, body })
        if (author && author !== this.displayName) this.$emit('display-name', author)
        this.cancelReply()
        this.$emit('posted', saved)
      } catch {
        this.cancelReply()
      }
    },
    async upvote(commentId) {
      if (this.upvoted.has(commentId)) return
      this.upvoted.add(commentId)
      const target = this.comments.find(c => c.comment_id === commentId)
      const prev = target ? target.upvotes : 0
      if (target) target.upvotes = prev + 1
      try {
        const res = await upvoteComment(commentId)
        if (target && typeof res.upvotes === 'number') target.upvotes = res.upvotes
        this.$emit('updated')
      } catch {
        if (target) target.upvotes = prev
        this.upvoted.delete(commentId)
      }
    },
    relative(iso) {
      const t = new Date(iso).getTime()
      const diff = Math.max(0, Date.now() - t)
      const m = Math.round(diff / 60000)
      if (m < 1) return 'just now'
      if (m < 60) return `${m} min ago`
      const h = Math.round(m / 60)
      if (h < 24) return `${h} hr${h === 1 ? '' : 's'} ago`
      const d = Math.round(h / 24)
      return `${d} day${d === 1 ? '' : 's'} ago`
    },
  },
}
</script>
