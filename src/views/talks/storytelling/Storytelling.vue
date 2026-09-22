<template>
  <div class="st-page" :class="{ 'is-reduced-motion': reduceMotion }">

    <!-- Slim top progress bar (visible at all widths). -->
    <div
      class="st-progress"
      :style="{ transform: `scaleX(${progressFraction})` }"
      aria-hidden="true"
    ></div>

    <!-- Floating "Add comment" button shown next to a fresh text selection. -->
    <button
      v-if="selectionBtn"
      class="st-selection-btn"
      :style="{ top: selectionBtn.top + 'px', left: selectionBtn.left + 'px' }"
      @mousedown.prevent="commentOnSelection"
    >
      <span aria-hidden="true">💬</span>
      <span>Add comment</span>
    </button>

    <!-- Mobile floating discussion button (≤1023px) -->
    <button
      v-if="!railOpen"
      class="st-rail-fab"
      type="button"
      @click="openRail"
      aria-label="Open discussion"
    >
      <span aria-hidden="true">💬</span>
      <span class="count">{{ comments.length }}</span>
    </button>

    <div class="st-shell">

      <!-- Left side: progress rail nav (wide viewports only). -->
      <nav class="st-section-rail" aria-label="Section navigation">
        <div class="st-section-rail-track" aria-hidden="true">
          <div class="st-section-rail-fill" :style="{ height: progressPct + '%' }"></div>
        </div>
        <ol class="st-section-rail-list">
          <li v-for="(s, i) in sections" :key="s.id">
            <a
              :href="`#${s.id}`"
              :class="['st-section-rail-item', { active: activeSection === s.id }]"
              @click.prevent="jumpTo(s.id)"
            >
              <span class="num">{{ String(i).padStart(2, '0') }}</span>
              <span class="name">{{ s.short }}</span>
            </a>
          </li>
        </ol>
      </nav>

      <!-- Article column -->
      <article
        class="st-article"
        @mouseup="onPossibleSelection"
        @click="onArticleClick"
      >

        <!-- 0 — Hero -->
        <section id="s0" class="st-hero st-reveal" ref="s0">
          <p class="st-eyebrow">A talk · UX meetup</p>
          <h1 class="st-display" data-anchor-id="s0-title">How to Do Storytelling.</h1>
          <p class="st-deck" data-anchor-id="s0-deck">
            You already design for users. Here's how to design for the
            stakeholders you've been ignoring.
          </p>
          <p class="st-standfirst" data-anchor-id="s0-standfirst">
            A scrolling companion to my 45–60 minute talk on stakeholder
            storytelling for designers. Read at your pace, drop a comment
            on any line, and the threads will live on after the room empties.
          </p>

          <!-- Talk-deck visual placeholder -->
          <div class="st-deck-placeholder" aria-hidden="true">
            <div class="frame">
              <span class="tag">▶ Shown live</span>
              <span class="caption">The actual talk deck</span>
            </div>
          </div>

          <div class="st-scroll-cue" aria-hidden="true">
            <span>Scroll to begin</span>
            <span class="line"></span>
          </div>
        </section>

        <!-- 1 — Who's talking -->
        <section id="s1" class="st-section st-reveal" ref="s1">
          <header class="st-section-head">
            <span class="st-section-num">01</span>
            <h2 class="st-section-title" data-anchor-id="s1-title">Who's talking.</h2>
          </header>

          <div class="st-who-grid">
            <div class="st-portrait" aria-hidden="true">
              <div class="frame">
                <span class="initials">HW</span>
                <span class="tag">Photo placeholder</span>
              </div>
            </div>
            <div class="st-body">
              <p data-anchor-id="s1-p1">
                Han Wang. Experience Design Analyst at the University of
                Melbourne. Previously UI designer at AJA Creative in Taipei.
                Six years of freelance in between.
              </p>
              <p class="st-lede" data-anchor-id="s1-p2">
                I've pitched design to compliance officers, bank execs, and
                a room of 600 insurance agents. This talk is what I learned
                about being believed.
              </p>
            </div>
          </div>
        </section>

        <!-- 2 — What you'll get -->
        <section id="s2" class="st-section st-reveal" ref="s2">
          <header class="st-section-head">
            <span class="st-section-num">02</span>
            <h2 class="st-section-title" data-anchor-id="s2-title">What you'll get.</h2>
          </header>
          <div class="st-body">
            <p data-anchor-id="s2-p1">Three things to walk out with.</p>
          </div>
          <ol class="st-takeaway-grid">
            <li class="st-takeaway-tile" data-anchor-id="s2-take1">
              <div class="num">01</div>
              <div class="tag">A frame</div>
              <p>Treat stakeholder presentations as a design problem, not a deck-building chore.</p>
            </li>
            <li class="st-takeaway-tile" data-anchor-id="s2-take2">
              <div class="num">02</div>
              <div class="tag">Techniques</div>
              <p>Things you can use Monday — for the room, the conversation, the awkward "I don't like it".</p>
            </li>
            <li class="st-takeaway-tile" data-anchor-id="s2-take3">
              <div class="num">03</div>
              <div class="tag">A canvas</div>
              <p>For drafting your own stakeholder story before the next time you stand up.</p>
            </li>
          </ol>
          <div class="st-body">
            <p class="st-aside" data-anchor-id="s2-aside">
              (You may notice the agenda mirrors the structure of the real
              pitch this talk is built around. That's on purpose.)
            </p>
          </div>
        </section>

        <!-- 3 — Open cold -->
        <section id="s3" class="st-section st-reveal" ref="s3">
          <header class="st-section-head">
            <span class="st-section-num">03</span>
            <h2 class="st-section-title" data-anchor-id="s3-title">Open cold: a room of 600.</h2>
          </header>

          <!-- Stat tile row — three big numbers that anchor the scene -->
          <div class="st-stat-row">
            <div class="st-stat-tile">
              <span class="big">30k<span class="plus">+</span></span>
              <span class="lbl">Field agents</span>
            </div>
            <div class="st-stat-tile">
              <span class="big">600<span class="plus">+</span></span>
              <span class="lbl">In the pitch room</span>
            </div>
            <div class="st-stat-tile">
              <span class="big">1</span>
              <span class="lbl">Failed transformation prior</span>
            </div>
          </div>

          <div class="st-body">
            <p data-anchor-id="s3-p1">
              Most of the workflow lived in paper notes, personal spreadsheets,
              screenshots of policy details, and chat threads with the back
              office. None of it standard. All of it working — for them.
            </p>
            <p data-anchor-id="s3-p2">
              On top of that: hard regulatory walls, a security review at
              every turn, and a failed earlier digital transformation that
              had bruised agent trust and shaken morale.
            </p>
            <p data-anchor-id="s3-p3">
              The brief from the client was, in essence, one word: <em>modernise</em>.
            </p>
            <p class="st-pull" data-anchor-id="s3-pull">
              I could have walked in with a beautiful redesign.
              It would have failed.<br>
              Here's what we did instead.
            </p>
          </div>
        </section>

        <!-- 4 — What storytelling actually is -->
        <section id="s4" class="st-section st-reveal" ref="s4">
          <header class="st-section-head">
            <span class="st-section-num">04</span>
            <h2 class="st-section-title" data-anchor-id="s4-title">What storytelling actually is.</h2>
          </header>
          <div class="st-body">
            <p data-anchor-id="s4-p1">
              Quickly, since you already do this for users — the difference
              between describing and telling:
            </p>
          </div>
          <div class="st-compare">
            <div class="st-compare-card describe" data-anchor-id="s4-describe">
              <div class="st-card-tag">Describe</div>
              <p>"A waterproof shoe in a nice green."</p>
            </div>
            <div class="st-compare-card tell" data-anchor-id="s4-tell">
              <div class="st-card-tag">Tell</div>
              <p>
                "A shoe built for climbers — waterproof for the ascent,
                coloured to sit in the landscape."
              </p>
            </div>
          </div>
          <div class="st-body">
            <p data-anchor-id="s4-p2">
              Same shoe. The second one earns attention because it carries
              tension (the climb) and a stake (does this shoe survive it?).
              For stakeholders, this is the move:
            </p>
            <p class="st-pull" data-anchor-id="s4-pull">
              A stakeholder story isn't context.<br>
              It's <em>tension plus a decision the audience has to make</em>.<br>
              End every story on a decision.
            </p>
            <p class="st-aside" data-anchor-id="s4-aside">
              One honesty beat: storytelling organises truth for
              comprehension. It does not bend it. The frame is yours
              to choose; the facts aren't.
            </p>
          </div>
        </section>

        <!-- 5 — Stakeholders are users -->
        <section id="s5" class="st-section st-reveal" ref="s5">
          <header class="st-section-head">
            <span class="st-section-num">05</span>
            <h2 class="st-section-title" data-anchor-id="s5-title">Stakeholders are users.</h2>
          </header>
          <div class="st-body">
            <p data-anchor-id="s5-p1">
              You'd never ship a product without knowing the user. So why
              present to stakeholders you've never researched?
            </p>
            <p data-anchor-id="s5-p2">
              Their context window is tiny — thirty minutes to judge months
              of work. Their visual taste is personal, not market-fit. They
              often can't name what's wrong; they just know the room's quiet.
            </p>
            <p data-anchor-id="s5-p3">
              So treat the presentation itself as an experience-design
              problem. Who's the audience? What's their journey through
              your deck? What are their pains? Where's the affordance
              to engage?
            </p>
            <p data-anchor-id="s5-p4">
              That reframe gives us three design challenges — and they
              structure the rest of this talk:
            </p>
          </div>
          <ul class="st-challenges">
            <li data-anchor-id="s5-c1"><span>Support the decision</span></li>
            <li data-anchor-id="s5-c2"><span>Lower the load</span></li>
            <li data-anchor-id="s5-c3"><span>Raise engagement</span></li>
          </ul>
          <aside class="st-callout" data-anchor-id="s5-callout">
            <p>
              We didn't call the pitch a "design review." We named it a
              <strong>public hearing</strong>. The naming did design
              work — it told the agents they'd be heard.
            </p>
          </aside>
        </section>

        <!-- 6 — Support the decision -->
        <section id="s6" class="st-section st-reveal" ref="s6">
          <header class="st-section-head">
            <span class="st-section-num">06</span>
            <h2 class="st-section-title" data-anchor-id="s6-title">Support the decision.</h2>
          </header>
          <div class="st-body">
            <p class="st-headline" data-anchor-id="s6-headline">
              Propose strategies, not designs.<br>
              Let stakeholders choose between strategies, not pixels.
            </p>
          </div>

          <aside class="st-live-note" data-anchor-id="s6-live1">
            ▶ Shown live: two homepage <em>concepts</em>, each a different
            strategy, put to the room as a live vote. Not "do you prefer
            this blue?" but "which world do we want to build?"
          </aside>

          <div class="st-body">
            <h3 class="st-h3" data-anchor-id="s6-h-evidence">Wrap design in evidence.</h3>
            <p data-anchor-id="s6-p1">
              Tie every move to a goal they already care about. Two
              examples from the AG App pitch:
            </p>
          </div>
          <ul class="st-evidence">
            <li data-anchor-id="s6-ev1">
              <span class="st-evidence-k">Faster login</span>
              <span class="st-evidence-v">→ "make the time on the road count"</span>
            </li>
            <li data-anchor-id="s6-ev2">
              <span class="st-evidence-k">Quote on the spot</span>
              <span class="st-evidence-v">→ "capture the moment, shorten the sales cycle"</span>
            </li>
          </ul>

          <div class="st-body">
            <h3 class="st-h3" data-anchor-id="s6-h-tactic">When someone says <em>"I don't like it but I can't say why."</em></h3>
            <p data-anchor-id="s6-p2">
              That's not rejection. It's an unmet requirement they haven't
              articulated yet. Re-route taste into a requirement with one
              question:
            </p>
            <p class="st-pull" data-anchor-id="s6-pull">
              "What would this need to do for you to feel confident?"
            </p>

            <h3 class="st-h3" data-anchor-id="s6-h-planb">Always have a Plan B they'll like.</h3>
            <p data-anchor-id="s6-p3">
              Bring the safer version. It shows you understand feasibility,
              and it gives the room somewhere to land if Plan A is too much.
            </p>
            <p data-anchor-id="s6-p4">
              The nuance: if Plan B is <em>always</em> the safe one, you
              train them to always pick safe. The frame I use — Plan B
              earns you the right to be bold by proving you understand
              the constraints; Plan A is what we'd do if those
              constraints were softer than they assumed.
            </p>
          </div>
        </section>

        <!-- 7 — Make it appealing -->
        <section id="s7" class="st-section st-reveal" ref="s7">
          <header class="st-section-head">
            <span class="st-section-num">07</span>
            <h2 class="st-section-title" data-anchor-id="s7-title">Make it appealing.</h2>
          </header>
          <div class="st-body">
            <p data-anchor-id="s7-p1">
              You design for users. Now design for the people reading your
              deck. One idea per slide. Visible hierarchy. Low cognitive
              load. The artifact is part of the argument.
            </p>
            <p data-anchor-id="s7-p2">
              What makes the deck yours and not a flat double-diamond
              recital: the real photos, the real quotes, the one unique
              finding nobody else would have noticed. The finding from the
              AG App pitch — the one that earned the room — was this:
            </p>
          </div>
          <blockquote class="st-quote" data-anchor-id="s7-quote">
            <p>
              Agents don't think by task type — they think by customer.
              Every workaround they'd built was a way to cluster work
              back around the person they were about to call.
            </p>
          </blockquote>
          <div class="st-body">
            <p data-anchor-id="s7-p3">
              That sentence carried the entire homepage strategy. It came
              from shadowing, not a survey.
            </p>
            <h3 class="st-h3" data-anchor-id="s7-h-tone">Voice and tone.</h3>
            <p data-anchor-id="s7-p4">
              Positive but not evasive. <strong>"90% success rate,"</strong>
              not "10% chance of failure." Same fact, different stake. The
              frame you pick changes the decision the room makes — so pick
              it deliberately.
            </p>
            <p data-anchor-id="s7-p5">
              The caveat: spin gets smelled. If the safer frame is also the
              dishonest one, drop it. Trust takes one presentation to lose
              and three to rebuild.
            </p>
          </div>
        </section>

        <!-- 8 — Raise engagement -->
        <section id="s8" class="st-section st-reveal" ref="s8">
          <header class="st-section-head">
            <span class="st-section-num">08</span>
            <h2 class="st-section-title" data-anchor-id="s8-title">Raise engagement.</h2>
          </header>
          <div class="st-body">
            <p data-anchor-id="s8-p1">
              Don't describe engagement. Design affordances for it into
              the presentation itself.
            </p>
          </div>
          <aside class="st-live-note" data-anchor-id="s8-live1">
            ▶ Shown live: the Q&amp;A wall. 600+ agents typed questions in
            real time — and upvoted each other's — so the best questions
            rose to the top. The wall did the moderating.
          </aside>
          <div class="st-body">
            <p class="st-pull" data-anchor-id="s8-pull">
              The site you're reading right now uses the exact same
              mechanic. <em>Select any line. Add a comment. Upvote.</em>
            </p>
            <p data-anchor-id="s8-p2">
              And then: answer the room section by section, not all saved
              to the end. That way they feel heard rather than lectured.
              The lecture format makes Q&amp;A feel like an exam at the
              end of a long class; the section format makes it feel like
              a conversation.
            </p>
          </div>
        </section>

        <!-- 9 — The storytelling canvas -->
        <section id="s9" class="st-section st-canvas-section st-reveal" ref="s9">
          <header class="st-section-head">
            <span class="st-section-num">09</span>
            <h2 class="st-section-title" data-anchor-id="s9-title">The storytelling canvas.</h2>
          </header>
          <div class="st-body">
            <p data-anchor-id="s9-p1">
              Six fields. Fill them out before the next time you stand up
              to present. If any of them are empty, you don't have a
              story yet — you have a status update.
            </p>
          </div>

          <div class="st-canvas" role="group" aria-label="Storytelling canvas">
            <label v-for="f in canvasFields" :key="f.k" class="st-canvas-field">
              <span class="st-canvas-k">{{ f.k }}</span>
              <span class="st-canvas-hint">{{ f.hint }}</span>
              <textarea
                v-model="canvas[f.k]"
                class="st-canvas-input"
                :placeholder="f.placeholder"
                rows="2"
              ></textarea>
            </label>
          </div>
          <div class="st-body">
            <p class="st-aside" data-anchor-id="s9-aside">
              Nothing here is saved or sent anywhere. Copy what you've
              written somewhere you'll find it again.
            </p>
          </div>
        </section>

        <!-- 10 — Close -->
        <section id="s10" class="st-section st-close st-reveal" ref="s10">
          <p class="st-close-thesis" data-anchor-id="s10-thesis">
            Design for your stakeholders the way you design for your
            users, and they'll let you do your best work.
          </p>
          <footer class="st-foot">
            <p>
              Han Wang · UX meetup<br>
              The case study this talk is built around lives at
              <a href="/work/agentapp">hanwang.design/work/agentapp</a>.
            </p>
          </footer>
        </section>
      </article>

      <!-- Right side: comment rail. Drawer behaviour on narrow viewports. -->
      <div class="st-rail-shell" :class="{ open: railOpen }">
        <button
          class="st-rail-shell-close"
          type="button"
          @click="closeRail"
          aria-label="Close discussion"
        >×</button>
        <CommentRail
          :comments="comments"
          :anchors="anchorMap"
          :active-anchor="activeAnchor"
          :composer="composer"
          :display-name="displayName"
          :loading="loadingComments"
          @jump="jumpToAnchor"
          @posted="onPosted"
          @updated="touchComments"
          @cancel-composer="composer = null"
          @display-name="setDisplayName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import { pageMeta } from '@/utils/pageMeta'
import { fetchComments } from '@/lib/comments'
import CommentRail from '@/components/CommentRail.vue'

export default {
  name: 'TalksStorytelling',
  components: { CommentRail },
  data() {
    return {
      sections: [
        { id: 's0',  short: 'Hero' },
        { id: 's1',  short: "Who's talking" },
        { id: 's2',  short: "What you'll get" },
        { id: 's3',  short: 'Open cold' },
        { id: 's4',  short: 'What storytelling is' },
        { id: 's5',  short: 'Stakeholders are users' },
        { id: 's6',  short: 'Support the decision' },
        { id: 's7',  short: 'Make it appealing' },
        { id: 's8',  short: 'Raise engagement' },
        { id: 's9',  short: 'The canvas' },
        { id: 's10', short: 'Close' },
      ],
      canvasFields: [
        { k: 'Audience',  hint: "Who's in the room — and what do they already care about / already know?", placeholder: 'e.g. Compliance lead + product manager. Care about risk, regulatory walls, agent NPS.' },
        { k: 'Tension',   hint: 'What is the friction, gap, or risk you have to name out loud?',         placeholder: 'e.g. Agents have invented workarounds because the current tool ignores how they actually work.' },
        { k: 'Decision',  hint: 'What do you need this audience to decide by the end?',                  placeholder: "e.g. Endorse the customer-grouped homepage as the production direction." },
        { k: 'Evidence',  hint: "How does this tie back to a goal they already care about?",             placeholder: 'e.g. Customer-grouped flow reduces policy lookup from 10+ desktop steps to 3 mobile taps.' },
        { k: 'Plan B',    hint: "What's the safer version they'll like, and why isn't it Plan A?",      placeholder: 'e.g. Keep task-based homepage with smarter filters. Cheaper, but does not change agent behaviour.' },
        { k: 'Affordance',hint: 'Where do they get to engage — vote, comment, ask, react?',              placeholder: 'e.g. Live vote after each concept, written Q&A wall, follow-up commenting site.' },
      ],
      canvas: {},
      progressFraction: 0,
      progressPct: 0,
      activeSection: 's0',
      activeAnchor: '',
      reduceMotion: false,
      io: null,
      onScroll: null,
      onSelectionChange: null,

      // Comments state
      comments: [],
      loadingComments: false,
      composer: null,                 // { anchorId, quote } when active
      anchorMap: {},                  // anchorId -> { id, preview }
      selectionBtn: null,             // { top, left, anchorId, quote }
      railOpen: false,                // mobile drawer
    }
  },
  computed: {
    displayName() {
      return this.$root.__stDisplayName || ''
    },
    // Anchors that have at least one comment — used by template to highlight.
    anchoredIds() {
      const s = new Set()
      this.comments.forEach(c => s.add(c.anchor_id))
      return s
    },
  },
  watch: {
    anchoredIds: {
      handler() { this.$nextTick(() => this.refreshHighlights()) },
      deep: true,
    },
  },
  mounted() {
    useMeta(pageMeta({
      title: 'How to Do Storytelling | Han Wang',
      description: "A scrolling companion to my UX-meetup talk on designing stakeholder presentations the way you'd design a product. Read, comment, upvote.",
      path: '/talks/storytelling',
    }))

    this.canvas = this.canvasFields.reduce((acc, f) => (acc[f.k] = '', acc), {})
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    this.buildAnchorMap()
    this.loadComments()

    if ('IntersectionObserver' in window) {
      const revealIo = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            revealIo.unobserve(e.target)
          }
        }
      }, { threshold: 0.12 })
      this.$el.querySelectorAll('.st-reveal').forEach(el => revealIo.observe(el))

      this.io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) this.activeSection = e.target.id
        }
      }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 })
      this.sections.forEach(s => {
        const el = this.$refs[s.id]
        const node = Array.isArray(el) ? el[0] : el
        if (node) this.io.observe(node)
      })
    } else {
      this.$el.querySelectorAll('.st-reveal').forEach(el => el.classList.add('in'))
    }

    this.onScroll = () => {
      const doc = document.documentElement
      const scroll = window.scrollY || doc.scrollTop
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      const f = Math.min(1, Math.max(0, scroll / max))
      this.progressFraction = f
      this.progressPct = f * 100
    }
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.onScroll()

    // Dismiss floating "Add comment" button when the selection collapses.
    this.onSelectionChange = () => {
      const sel = window.getSelection()
      if (!sel || sel.isCollapsed) this.selectionBtn = null
    }
    document.addEventListener('selectionchange', this.onSelectionChange)

    this.$nextTick(() => {
      document.dispatchEvent(new Event('render-event'))
    })
  },
  beforeUnmount() {
    if (this.io) this.io.disconnect()
    if (this.onScroll) window.removeEventListener('scroll', this.onScroll)
    if (this.onSelectionChange) document.removeEventListener('selectionchange', this.onSelectionChange)
  },
  methods: {
    setDisplayName(name) {
      this.$root.__stDisplayName = name
    },

    // ── Anchor scaffolding ────────────────────────────────────────────────
    buildAnchorMap() {
      const map = {}
      this.$el.querySelectorAll('[data-anchor-id]').forEach(el => {
        const id = el.dataset.anchorId
        const text = (el.textContent || '').trim().replace(/\s+/g, ' ')
        map[id] = {
          id,
          preview: text.length > 90 ? text.slice(0, 90) + '…' : text,
        }
      })
      this.anchorMap = map
    },
    refreshHighlights() {
      const ids = this.anchoredIds
      this.$el.querySelectorAll('[data-anchor-id]').forEach(el => {
        el.classList.toggle('has-comment', ids.has(el.dataset.anchorId))
      })
    },

    // ── Loading + writing ─────────────────────────────────────────────────
    async loadComments() {
      this.loadingComments = true
      try {
        this.comments = await fetchComments()
      } finally {
        this.loadingComments = false
        this.$nextTick(() => this.refreshHighlights())
      }
    },
    onPosted(saved) {
      this.comments.push(saved)
      this.composer = null
      this.$nextTick(() => this.refreshHighlights())
    },
    touchComments() {
      // Force-refresh anything that depends on comment array shape after
      // an in-place upvote mutation.
      this.comments = this.comments.slice()
    },

    // ── Selection ─────────────────────────────────────────────────────────
    onPossibleSelection(e) {
      // Slight delay so the selection has resolved before we measure it.
      setTimeout(() => {
        const sel = window.getSelection()
        if (!sel || sel.isCollapsed || !sel.toString().trim()) {
          this.selectionBtn = null
          return
        }
        // Only show the button if the selection sits inside the article.
        const range = sel.getRangeAt(0)
        const anchorEl = this.closestAnchorEl(range.startContainer)
        if (!anchorEl) {
          this.selectionBtn = null
          return
        }
        const rect = range.getBoundingClientRect()
        const text = sel.toString().trim().replace(/\s+/g, ' ')
        this.selectionBtn = {
          // Position is fixed; convert viewport-relative rect to page coords.
          top: rect.top + window.scrollY - 44,
          left: Math.max(16, rect.left + rect.width / 2 - 80),
          anchorId: anchorEl.dataset.anchorId,
          quote: text.length > 280 ? text.slice(0, 280) + '…' : text,
        }
      }, 0)
      // 'e' isn't used directly, but binding to mouseup gives us the right beat.
      void e
    },
    closestAnchorEl(node) {
      let el = node && (node.nodeType === 1 ? node : node.parentElement)
      while (el && el !== this.$el) {
        if (el.dataset && el.dataset.anchorId) return el
        el = el.parentElement
      }
      return null
    },
    commentOnSelection() {
      if (!this.selectionBtn) return
      const { anchorId, quote } = this.selectionBtn
      this.openComposer(anchorId, quote)
      this.selectionBtn = null
    },
    onArticleClick(e) {
      // Cancel any floating selection button when clicking elsewhere.
      const target = e.target.closest('[data-anchor-id]')
      // Only start a comment if the user clicked a section title (h2/h3) —
      // plain paragraphs require a text selection. This keeps the page
      // calm: a stray click on body copy doesn't open a composer.
      if (!target) return
      const isHeading = target.matches('h1, h2, h3, .st-section-title')
      if (!isHeading) return
      this.openComposer(target.dataset.anchorId, '')
    },
    openComposer(anchorId, quote = '') {
      this.composer = { anchorId, quote }
      this.openRail()
    },

    // ── Jumping (rail ↔ article) ──────────────────────────────────────────
    jumpToAnchor(anchorId) {
      const node = this.$el.querySelector(`[data-anchor-id="${anchorId}"]`)
      if (!node) return
      this.activeAnchor = anchorId
      node.scrollIntoView({
        behavior: this.reduceMotion ? 'auto' : 'smooth',
        block: 'center',
      })
      node.classList.add('pulse')
      setTimeout(() => node.classList.remove('pulse'), 1400)
      // Close the rail on narrow viewports so the reader can see the text.
      if (window.matchMedia('(max-width: 1023px)').matches) this.closeRail()
    },
    jumpTo(id) {
      const node = document.getElementById(id)
      if (!node) return
      node.scrollIntoView({
        behavior: this.reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    },

    // ── Mobile drawer ─────────────────────────────────────────────────────
    openRail()  { this.railOpen = true },
    closeRail() { this.railOpen = false },
  },
}
</script>

<style lang="scss">
@import './index.scss';
</style>
