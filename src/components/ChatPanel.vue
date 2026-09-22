<template>
  <div class="hw-root">

    <!-- Floating launcher (hidden when panel is open) -->
    <transition name="hw-fade">
      <template v-if="!open">
        <div class="hw-launcher-stack">
          <!-- Proactive peek bubble — appears on project pages after a delay -->
          <transition name="hw-peek">
            <div v-if="peekShown" class="hw-peek">
              <button class="hw-peek-close" @click="dismissPeek" aria-label="Dismiss">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9DA5B2" stroke-width="2.4" stroke-linecap="round"><path d="M6 6 L18 18 M18 6 L6 18"/></svg>
              </button>
              <div class="hw-peek-row">
                <img src="@/assets/images/global/chatbot.svg" class="hw-avatar" aria-hidden="true" />
                <div class="hw-peek-text">
                  Got 30 seconds? I can summarise
                  <strong>{{ routeConfig.name || 'this page' }}</strong>
                  for you.
                </div>
              </div>
              <button class="hw-peek-cta" @click="openFromPeek">Start chatting →</button>
            </div>
          </transition>

          <button class="hw-launcher" @click="openPanel" aria-label="Chat with Han's Agent">
            <img src="@/assets/images/global/chatbot.svg" class="hw-launcher-ico" />
            <span class="hw-launcher-label">Ask Han</span>
          </button>
        </div>
      </template>
    </transition>

    <!-- Chat panel + mobile scrim -->
    <transition name="hw-fade">
      <div v-if="open && isMobile" class="hw-scrim" @click="open = false"></div>
    </transition>
    <transition name="hw-panel">
      <div
        v-if="open"
        :class="['hw-panel-stage', isMobile && 'hw-panel-stage-mobile']"
        role="dialog"
        aria-label="Chat with Han's Agent"
      >
        <div :class="['hw-panel', isMobile && 'hw-panel-mobile']">

          <!-- Header -->
          <header class="hw-header">
            <img src="@/assets/images/global/chatbot.svg" class="hw-avatar hw-avatar-online" aria-hidden="true" />
            <div class="hw-header-text">
              <div class="hw-header-name">Han's Agent</div>
              <div class="hw-header-meta">
                <span class="hw-online-dot"></span>
                <span>Asking about <strong>{{ routeConfig.name || 'Han' }}</strong></span>
              </div>
            </div>
            <button
              v-if="false && messages.length > 0"
              class="hw-icon-btn"
              @click="resetConversation"
              title="New conversation"
              aria-label="New conversation"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6D778C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12 a9 9 0 0 1 15.5 -6 M21 5 V11 H15 M21 12 a9 9 0 0 1 -15.5 6 M3 19 V13 H9"/></svg>
            </button>
            <button class="hw-icon-btn" @click="open = false" title="Close" aria-label="Close">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6D778C" stroke-width="2" stroke-linecap="round"><path d="M6 6 L18 18 M18 6 L6 18"/></svg>
            </button>
          </header>

          <!-- Body — messages + welcome state -->
          <div ref="messagesEl" class="hw-body">

            <!-- Empty state — bot greeting + chips -->
            <template v-if="messages.length === 0">
              <div class="hw-msg hw-msg-bot">
                <img src="@/assets/images/global/chatbot.svg" class="hw-avatar hw-msg-avatar" aria-hidden="true" />
                <div class="hw-bot-bubble">
                  Hey — ask me anything about Han's work, methodology, or
                  availability. I'm trained on his real projects.
                </div>
              </div>
              <div class="hw-chip-row">
                <button
                  v-for="prompt in currentChips"
                  :key="prompt"
                  class="hw-chip"
                  @click="onInitialChipClick(prompt)"
                >
                  {{ prompt }}
                </button>
              </div>
            </template>

            <!-- Conversation -->
            <template v-else>
              <div
                v-for="(msg, i) in messages"
                :key="i"
                :class="['hw-msg', msg.role === 'user' ? 'hw-msg-user' : 'hw-msg-bot']"
              >
                <!-- User: just the bubble, right-aligned -->
                <div v-if="msg.role === 'user'" class="hw-user-bubble">{{ msg.content }}</div>

                <!-- Assistant: avatar + bubble + sources rail + follow-ups -->
                <template v-else>
                  <img src="@/assets/images/global/chatbot.svg" class="hw-avatar hw-msg-avatar" aria-hidden="true" />
                  <div class="hw-bot-stack">
                    <div class="hw-bot-bubble">
                      <template v-for="(seg, segIdx) in renderSegments(msg)" :key="segIdx">
                        <a
                          v-if="seg.type === 'citation'"
                          :href="seg.url"
                          :class="['hw-cite', activeCite === seg.id && 'hw-cite-active']"
                          @click="onCitationClick($event, seg.id, seg.url)"
                        >{{ seg.id }}</a>
                        <template v-else>{{ seg.value }}</template>
                      </template>
                    </div>

                    <!-- Sources horizontal rail -->
                    <div
                      v-if="Array.isArray(msg.references) && msg.references.length > 0"
                      class="hw-source-rail-wrap"
                    >
                      <div class="hw-source-rail">
                        <a
                          v-for="ref in msg.references"
                          :key="ref.id ?? ref.url"
                          :href="ref.url"
                          :class="['hw-source-card', activeCite === ref.id && 'hw-source-card-active']"
                          @click="onCitationClick($event, ref.id, ref.url)"
                        >
                          <div class="hw-source-head">
                            <span class="hw-source-num">{{ ref.id }}</span>
                            <span class="hw-source-name">{{ formatReference(ref).label || formatReference(ref).domain }}</span>
                          </div>
                          <div class="hw-source-domain">
                            {{ formatReference(ref).domain }}{{ formatReference(ref).pathTail ? formatReference(ref).pathTail : '' }}
                          </div>
                        </a>
                      </div>
                    </div>

                    <!-- Follow-up chips on the most recent assistant reply -->
                    <div
                      v-if="
                        i === messages.length - 1
                        && Array.isArray(msg.suggestions)
                        && msg.suggestions.length > 0
                        && !loading
                      "
                      class="hw-followup-row"
                    >
                      <button
                        v-for="s in msg.suggestions"
                        :key="s"
                        class="hw-followup"
                        @click="send(s)"
                      >
                        {{ s }}
                      </button>
                    </div>
                  </div>
                </template>
              </div>

              <!-- Typing indicator -->
              <div v-if="loading" class="hw-msg hw-msg-bot">
                <img src="@/assets/images/global/chatbot.svg" class="hw-avatar hw-msg-avatar" aria-hidden="true" />
                <div class="hw-bot-bubble hw-typing-bubble">
                  <span class="hw-typing-dot"></span>
                  <span class="hw-typing-dot"></span>
                  <span class="hw-typing-dot"></span>
                </div>
              </div>

              <!-- Error -->
              <div v-if="error" class="hw-error">
                <div class="hw-error-text">{{ error }}</div>
                <button v-if="lastFailedMessages" class="hw-retry-pill" @click="retry">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12 a9 9 0 0 1 15.5 -6 M21 5 V11 H15 M21 12 a9 9 0 0 1 -15.5 6 M3 19 V13 H9"/></svg>
                  Try again
                </button>
              </div>
            </template>
          </div>

          <!-- Input row -->
          <form class="hw-input-row" @submit.prevent="onSubmit">
            <div class="hw-input-wrap">
              <textarea
                ref="inputEl"
                v-model="input"
                rows="1"
                placeholder="Ask Han's agent…"
                :disabled="loading"
                @keydown="onKeyDown"
                @input="autoResize"
              ></textarea>
            </div>
            <button
              type="submit"
              class="hw-send-btn"
              :disabled="!canSend"
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1D3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 L20 5 L13 20 L11 13 L4 12 Z"/></svg>
            </button>
          </form>

          <!-- Disclaimer footer -->
          <div class="hw-foot">AI · Answers grounded in Han's real projects</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getSessionId } from '@/lib/messageLog'

const FALLBACK_URL = 'https://hanbot-eight.vercel.app'

// ms before the proactive peek bubble appears (only on project pages)
const PEEK_DELAY = 5000

// Page-aware initial chip sets, keyed by route path. Each entry:
//   chips:   short, friendly prompt strings (shown verbatim on the chip)
//   context: optional phrase appended in parens when chip is sent, so the
//            bot knows what "this project" / "your role" refers to.
//   name:    optional short project name shown in the header ("Asking about
//            <name>") and in the proactive peek bubble. Triggers the peek.
const ROUTE_CHIPS = {
  '/': {
    chips: [
      'What kind of work do you do?',
      'Walk me through a project',
      'Are you available for work?',
    ],
  },
  '/resume': {
    chips: [
      "What's your background?",
      'What are you looking for next?',
      'Where are you based?',
    ],
  },
  '/enquiry': {
    chips: [
      'Are you open to freelance?',
      'What roles are you targeting?',
      'How do I reach you?',
    ],
  },
  '/work/stickerhd': {
    name: 'StickerHD',
    context: 'about my StickerHD e-commerce redesign project',
    chips: [
      'Tell me about this project',
      'What design system decisions did you make?',
      'What were the outcomes?',
    ],
  },
  '/work/authux': {
    name: 'Authenticated Student Experience',
    context: 'about my Authenticated Student Experience design project',
    chips: [
      'Walk me through the research',
      'What did the Kano survey reveal?',
      'What was the measurable impact?',
    ],
  },
  '/work/agentapp': {
    name: 'AG App',
    context: "about my AG App project — the lead UI design role for the agent mobile workspace at AJA Creative for Taiwan's largest insurance corporation",
    chips: [
      'How did you design for 30,000+ agents?',
      'Tell me about the visual design system',
      'How did you handle compliance and IT constraints?',
    ],
  },
  '/work/avianlens': {
    name: 'AvianLens',
    context: 'about my AvianLens hackathon project',
    chips: [
      'Tell me about this project',
      'What was your role in the hackathon?',
      'How did the AI component work?',
    ],
  },
  '/work/tiago': {
    name: 'TIAGo',
    context: 'about my TIAGo Robot Teleoperation capstone project',
    chips: [
      'Tell me about this project',
      'What was your role?',
      'Walk me through the methodology',
    ],
  },
}

export default {
  name: 'ChatPanel',
  data() {
    return {
      open: false,
      input: '',
      // Each entry: { role: 'user'|'assistant', content, references?, suggestions? }
      messages: [],
      loading: false,
      error: null,
      lastFailedMessages: null,
      // Inline citation / source-card highlight pairing
      activeCite: null,
      // Proactive peek bubble (project pages only, dismissable, once per session)
      peekShown: false,
      peekDismissed: false,
      peekTimer: null,
      // Mobile detection
      isMobile: false,
    }
  },
  computed: {
    canSend() {
      return this.input.trim().length > 0 && !this.loading
    },
    chatbotUrl() {
      return process.env.VUE_APP_CHATBOT_URL || FALLBACK_URL
    },
    routeConfig() {
      // GitHub Pages directory-index serving can append a trailing slash
      // (e.g. `/work/authux/`), which would miss the slash-less keys below.
      const raw = this.$route?.path || '/'
      const path = raw.length > 1 ? raw.replace(/\/+$/, '') : raw
      return ROUTE_CHIPS[path] || ROUTE_CHIPS['/']
    },
    currentChips() {
      return this.routeConfig.chips || []
    },
  },
  watch: {
    // Re-evaluate the peek timer whenever the user navigates between pages
    '$route.path'() {
      this.peekShown = false
      this.scheduleProactivePeek()
    },
    open(isOpen) {
      if (isOpen && this.isMobile) this.lockBodyScroll()
      else this.unlockBodyScroll()
    },
    isMobile(nowMobile) {
      // If viewport flips while panel is open, sync the lock state
      if (this.open) {
        if (nowMobile) this.lockBodyScroll()
        else this.unlockBodyScroll()
      }
    },
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
    this.scheduleProactivePeek()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
    if (this.peekTimer) clearTimeout(this.peekTimer)
    this.unlockBodyScroll()
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 600
    },
    lockBodyScroll() {
      if (this._scrollLocked) return
      this._savedScrollY = window.scrollY || window.pageYOffset || 0
      const body = document.body
      body.style.position = 'fixed'
      body.style.top = `-${this._savedScrollY}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
      this._scrollLocked = true
    },
    unlockBodyScroll() {
      if (!this._scrollLocked) return
      const body = document.body
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      window.scrollTo(0, this._savedScrollY || 0)
      this._scrollLocked = false
    },
    scheduleProactivePeek() {
      if (this.peekTimer) clearTimeout(this.peekTimer)
      // Only on project pages (have a name) and only if not yet dismissed
      if (this.peekDismissed || this.open) return
      if (!this.routeConfig.name) return
      this.peekTimer = setTimeout(() => {
        if (!this.open && !this.peekDismissed) this.peekShown = true
      }, PEEK_DELAY)
    },
    dismissPeek() {
      this.peekShown = false
      this.peekDismissed = true
      if (this.peekTimer) clearTimeout(this.peekTimer)
    },
    openFromPeek() {
      this.peekShown = false
      this.peekDismissed = true
      this.openPanel()
    },
    openPanel() {
      this.open = true
      this.peekShown = false
      this.$nextTick(() => {
        this.$refs.inputEl?.focus()
      })
    },
    onKeyDown(e) {
      // Enter sends, Shift+Enter inserts a newline
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        this.onSubmit()
      }
    },
    onSubmit() {
      if (!this.canSend) return
      this.send(this.input.trim())
    },
    // Initial chips on context-bearing pages attach the page context as a
    // parenthetical clarifier, so the bot knows what "this project" /
    // "your role" refers to.
    onInitialChipClick(text) {
      const ctx = this.routeConfig.context
      this.send(ctx ? `${text} (${ctx})` : text)
    },
    async send(text) {
      this.input = ''
      this.error = null
      this.lastFailedMessages = null
      this.activeCite = null
      this.resetTextareaHeight()

      const userMsg = { role: 'user', content: text }
      // Wire payload only contains role + content per server contract
      const wireMessages = [
        ...this.messages.map(m => ({ role: m.role, content: m.content })),
        userMsg,
      ]
      this.messages = [...this.messages, userMsg]
      this.loading = true
      await this.$nextTick()
      this.scrollToBottom()

      try {
        const res = await fetch(`${this.chatbotUrl}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: getSessionId(),
            messages: wireMessages,
          }),
        })
        if (!res.ok) throw new Error(`Server returned ${res.status}`)

        // Defensive JSON parse — bad bodies surface as a friendly error
        let data
        try {
          data = await res.json()
        } catch (_) {
          throw new Error('Could not parse response')
        }

        const reply = data?.reply
        if (typeof reply !== 'string' || !reply.trim()) {
          throw new Error('No reply in response')
        }

        const references = Array.isArray(data?.references)
          ? data.references.filter(r => r && typeof r.url === 'string')
          : []
        const suggestions = Array.isArray(data?.suggestions)
          ? data.suggestions.filter(s => typeof s === 'string' && s.trim().length > 0)
          : []

        this.messages.push({
          role: 'assistant',
          content: reply,
          references,
          suggestions,
        })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('Chat request failed:', err)
        this.lastFailedMessages = wireMessages
        // Roll the user message off so retry doesn't double-up
        this.messages = this.messages.slice(0, -1)
        this.error = "Something went wrong reaching the agent. Want to retry?"
      } finally {
        this.loading = false
        await this.$nextTick()
        this.scrollToBottom()
      }
    },
    retry() {
      if (!this.lastFailedMessages) return
      const lastUser = this.lastFailedMessages[this.lastFailedMessages.length - 1]
      this.messages = this.lastFailedMessages.slice(0, -1)
      this.error = null
      this.send(lastUser.content)
    },
    resetConversation() {
      this.messages = []
      this.error = null
      this.lastFailedMessages = null
      this.activeCite = null
      this.input = ''
      this.resetTextareaHeight()
      this.$nextTick(() => this.$refs.inputEl?.focus())
    },
    // Parse reply text into renderable segments — citation tokens [N] map to
    // their reference URL by id (or 1-indexed position). Unmatched tokens
    // render as plain text so the UI never breaks on missing references.
    renderSegments(msg) {
      const content = typeof msg.content === 'string' ? msg.content : ''
      const refs = Array.isArray(msg.references) ? msg.references : []
      if (refs.length === 0) {
        return [{ type: 'text', value: content }]
      }
      const refMap = new Map()
      refs.forEach((r, idx) => {
        const id = Number.isFinite(r.id) ? r.id : idx + 1
        if (r && typeof r.url === 'string') refMap.set(id, r.url)
      })
      const segments = []
      const regex = /\[(\d+)\]/g
      let lastIndex = 0
      let match
      while ((match = regex.exec(content)) !== null) {
        if (match.index > lastIndex) {
          segments.push({ type: 'text', value: content.slice(lastIndex, match.index) })
        }
        const id = parseInt(match[1], 10)
        const url = refMap.get(id)
        if (url) {
          segments.push({ type: 'citation', id, url })
        } else {
          segments.push({ type: 'text', value: match[0] })
        }
        lastIndex = regex.lastIndex
      }
      if (lastIndex < content.length) {
        segments.push({ type: 'text', value: content.slice(lastIndex) })
      }
      return segments
    },
    // Click on either an inline citation chip OR a source card — toggles the
    // shared activeCite highlight then navigates (SPA for internal paths).
    onCitationClick(event, id, url) {
      // Tap to toggle — second tap on the same id clears the highlight
      this.activeCite = this.activeCite === id ? null : id
      if (typeof url === 'string' && url.startsWith('/') && !url.startsWith('//')) {
        event.preventDefault()
        this.$router.push(url).catch(() => {})
      }
    },
    // Returns { domain, label, pathTail } for source-card display.
    formatReference(ref) {
      const url = typeof ref?.url === 'string' ? ref.url : ''
      const explicit = ref?.label || ref?.title || ''

      let domain = ''
      let pathTail = ''
      let derivedLabel = ''
      try {
        if (url.startsWith('/') && !url.startsWith('//')) {
          domain = 'hanwang.design'
          pathTail = url
          const last = url.replace(/\/+$/, '').split('/').filter(Boolean).pop() || ''
          derivedLabel = last
            ? last.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
            : 'Home'
        } else if (url) {
          const u = new URL(url)
          domain = u.hostname.replace(/^www\./, '')
          pathTail = u.pathname && u.pathname !== '/' ? u.pathname : ''
          derivedLabel = pathTail.replace(/^\/+/, '').split('/')[0] || domain
        }
      } catch (_) {
        domain = url || ''
      }

      return {
        domain: domain || 'link',
        label: explicit || derivedLabel || '',
        pathTail,
      }
    },
    scrollToBottom() {
      const el = this.$refs.messagesEl
      if (el) el.scrollTop = el.scrollHeight
    },
    autoResize(e) {
      const el = e.target
      el.style.height = 'auto'
      el.style.height = Math.min(el.scrollHeight, 120) + 'px'
    },
    resetTextareaHeight() {
      const el = this.$refs.inputEl
      if (el) el.style.height = 'auto'
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/config/scss/color';
@import '../assets/styles/config/scss/rwd';

// ============================================================
// Han's Agent — Compact direction (Direction B from claude.ai/design)
// Warm cream surface, navy + white message bubbles, mint→yellow gradient
// flourish on the launcher / send / inline citations.
// ============================================================

$hw-cream:      #FAF7F1;  // signature warm panel surface
$hw-cream-line: #EFE9E0;  // hairline divider on cream
$hw-edge:       #DDE1E8;  // chip + neutral border
$hw-mute:       #6D778C;  // secondary text
$hw-quiet:      #9DA5B2;  // tertiary text / placeholder
$hw-warn:       #A33E3E;  // error tint
$hw-gradient:   linear-gradient(135deg, #6CFFB0 0%, #FFF96C 100%);

.hw-root {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  z-index: 9999;

  // Defensive button reset — global.scss applies Montserrat italic 900 + h5
  // sizing to every <button> on the body, which would bleed into every chip
  // and follow-up here. Reset everything to a chat-friendly baseline before
  // letting the per-chip classes set their own size / weight.
  button {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: normal;
    text-transform: none;
    text-align: center;
  }

  // ----- avatar (Han mark) — reusable navy circle with mint italic H -----
  .hw-avatar {
    width: 24px;
    height: 24px;
    flex: none;
    border-radius: 50%;
    background: $bg;
    color: $primary-green;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', system-ui, sans-serif;
    font-style: italic;
    font-weight: 900;
    font-size: 11px;
    line-height: 1;
    position: relative;
    user-select: none;
  }
  // Online dot variant — used in the header
  .hw-avatar-online {
    width: 30px;
    height: 30px;
    font-size: 13px;
    &::after {
      content: '';
      position: absolute;
      right: -1px;
      bottom: -1px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: $primary-green;
      box-shadow: 0 0 0 2px $hw-cream;
    }
  }

  // ============================================================
  // Floating launcher — gradient pill with avatar mark
  // ============================================================
  .hw-launcher-stack {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 100002;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
  }
  .hw-launcher {
    height: 56px;
    padding: 0 22px 0 6px;
    border: 0;
    border-radius: 999px;
    background: $hw-gradient;
    color: $bg;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    box-shadow:
      0 12px 36px rgba(108, 255, 176, 0.4),
      0 4px 12px rgba(11, 29, 63, 0.35);
    transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s;
    &:hover {
      transform: translateY(-2px);
      box-shadow:
        0 18px 40px rgba(108, 255, 176, 0.5),
        0 6px 14px rgba(11, 29, 63, 0.4);
    }
    .hw-launcher-ico {
      width: 44px;
      height: 44px;
      flex: none;
      border-radius: 50%;
    }
    .hw-launcher-label { white-space: nowrap; }
    @include smallPad() {
      padding: 0 6px;
      .hw-launcher-label { display: none; }
    }
  }

  // ============================================================
  // Proactive peek bubble — appears on project pages after a delay
  // ============================================================
  .hw-peek {
    position: relative;
    width: 296px;
    background: $hw-cream;
    color: $bg;
    border-radius: 16px;
    padding: 14px 16px 14px 14px;
    box-shadow: 0 16px 40px rgba(11, 29, 63, 0.32);
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      right: 36px;
      width: 16px;
      height: 16px;
      background: $hw-cream;
      transform: rotate(45deg);
      box-shadow: 4px 4px 8px rgba(11, 29, 63, 0.05);
    }
    .hw-peek-close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 22px;
      height: 22px;
      border: 0;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      &:hover { background: rgba(11, 29, 63, 0.06); }
    }
    .hw-peek-row {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      .hw-avatar { width: 26px; height: 26px; font-size: 12px; }
      .hw-peek-text {
        flex: 1;
        font-size: 12.5px;
        line-height: 1.45;
        color: $bg;
        strong { font-weight: 600; }
      }
    }
    .hw-peek-cta {
      margin: 12px 0 0 36px;
      padding: 0;
      border: 0;
      background: transparent;
      font-family: inherit;
      font-size: 12.5px;
      font-weight: 700;
      color: $bg;
      cursor: pointer;
      transition: color 0.15s;
      &:hover { color: $primary-green-dark; }
    }
  }

  // ============================================================
  // Panel stage + scrim
  // ============================================================
  // Site nav uses z-index: 100000, so chat layers must sit above that on
  // mobile (where the panel fills the viewport and the nav would otherwise
  // overlap the header).
  .hw-panel-stage {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 100002;
    width: 380px;
    height: 600px;
  }
  // On mobile, anchor to the TOP of the viewport (not bottom) and use 100dvh
  // for height — the dynamic viewport unit shrinks when the soft keyboard
  // opens, so the input row stays visible above the keyboard and the page
  // doesn't get pushed up by iOS auto-scroll.
  .hw-panel-stage-mobile {
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100%;
    height: 100vh;     // fallback for older browsers
    height: 100dvh;    // shrinks with soft keyboard
  }
  .hw-scrim {
    position: fixed;
    inset: 0;
    z-index: 100001;
    background: rgba(11, 29, 63, 0.6);
  }

  // ============================================================
  // The panel itself
  // ============================================================
  .hw-panel {
    width: 100%;
    height: 100%;
    background: $hw-cream;
    border-radius: 18px;
    box-shadow:
      0 24px 60px rgba(11, 29, 63, 0.4),
      0 8px 16px rgba(11, 29, 63, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: $bg;
  }
  .hw-panel-mobile { border-radius: 0; }

  // ----- header -----
  .hw-header {
    flex: none;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    background: $hw-cream;
    border-bottom: 1px solid $hw-cream-line;

    .hw-header-text {
      flex: 1;
      min-width: 0;
    }
    .hw-header-name {
      font-size: 14.5px;
      font-weight: 700;
      color: $bg;
      line-height: 1.1;
    }
    .hw-header-meta {
      margin-top: 3px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11.5px;
      color: $hw-mute;
      strong { font-weight: 600; color: $bg; }
    }
    .hw-online-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $primary-green-dark;
    }
    .hw-icon-btn {
      width: 28px;
      height: 28px;
      flex: none;
      border: 0;
      background: transparent;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      &:hover { background: rgba(11, 29, 63, 0.06); }
    }
  }

  // ----- body / scroll region -----
  .hw-body {
    flex: 1;
    min-height: 0;
    padding: 14px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    scrollbar-width: thin;
    scrollbar-color: rgba(11, 29, 63, 0.12) transparent;
    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-thumb {
      background: rgba(11, 29, 63, 0.12);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track { background: transparent; }
  }

  // ----- message rows -----
  .hw-msg {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    .hw-msg-avatar { margin-top: 2px; }
    &.hw-msg-user {
      justify-content: flex-end;
    }
  }
  .hw-bot-stack {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  // ----- bubbles -----
  .hw-bot-bubble {
    background: #fff;
    border: 1px solid $hw-cream-line;
    border-radius: 14px;
    padding: 10px 12px;
    font-size: 13.5px;
    line-height: 1.55;
    color: $bg;
    word-wrap: break-word;
    overflow-wrap: anywhere;
    max-width: 100%;
  }
  .hw-user-bubble {
    background: $bg;
    color: #fff;
    border-radius: 14px;
    padding: 9px 13px;
    font-size: 13.5px;
    line-height: 1.5;
    max-width: 80%;
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }

  // ----- inline citation chip — small gradient square, signature flourish -----
  .hw-cite {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 17px;
    height: 17px;
    margin: 0 2px;
    vertical-align: 1px;
    background: $hw-gradient;
    color: $bg;
    border-radius: 4px;
    font-size: 10.5px;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    outline: 0 solid $bg;
    outline-offset: 1px;
    transition: outline-width 0.15s ease, transform 0.15s ease;
    &:hover { transform: translateY(-1px); }
  }
  .hw-cite-active {
    outline-width: 2px;
  }

  // ----- horizontal source rail — scroll-snap card row -----
  .hw-source-rail-wrap {
    margin: 0 -2px;
  }
  .hw-source-rail {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 2px 6px;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: rgba(11, 29, 63, 0.12) transparent;
    &::-webkit-scrollbar { height: 4px; }
    &::-webkit-scrollbar-thumb {
      background: rgba(11, 29, 63, 0.12);
      border-radius: 2px;
    }
  }
  .hw-source-card {
    flex: none;
    width: 168px;
    scroll-snap-align: start;
    background: #fff;
    border: 1px solid $hw-cream-line;
    border-radius: 12px;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.15s ease, transform 0.15s ease;
    &:hover {
      border-color: rgba(11, 29, 63, 0.4);
      transform: translateY(-1px);
    }
    .hw-source-head {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .hw-source-num {
      flex: none;
      width: 16px;
      height: 16px;
      border-radius: 4px;
      background: $primary-green;
      color: $bg;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 700;
      line-height: 1;
    }
    .hw-source-name {
      flex: 1;
      min-width: 0;
      font-size: 11.5px;
      font-weight: 600;
      color: $bg;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .hw-source-domain {
      font-size: 11px;
      color: $hw-mute;
      line-height: 1.35;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .hw-source-card-active {
    border-color: $bg;
    border-width: 1.5px;
    .hw-source-num {
      background: $hw-gradient;
    }
  }

  // ----- initial entry-point chips -----
  .hw-chip-row {
    margin-left: 32px; // align with bot bubble (avatar gutter)
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .hw-chip {
    border: 1px solid $hw-edge;
    background: #fff;
    border-radius: 999px;
    padding: 7px 12px;
    font-family: inherit;
    font-size: 12px;
    color: $bg;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s, transform 0.1s;
    &:hover {
      border-color: $bg;
      background: $hw-cream;
    }
    &:active { transform: scale(0.98); }
  }

  // ----- follow-up chips (subtler, sit under the latest assistant reply) -----
  .hw-followup-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .hw-followup {
    border: 1px solid $hw-edge;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 999px;
    padding: 6px 11px;
    font-family: inherit;
    font-size: 11.5px;
    color: $bg;
    cursor: pointer;
    transition: all 0.15s;
    &:hover { border-color: $bg; background: #fff; }
  }

  // ----- typing indicator -----
  .hw-typing-bubble {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 12px 14px;
  }
  .hw-typing-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $bg;
    animation: hw-blink 1.4s infinite both;
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
  @keyframes hw-blink {
    0%, 80%, 100% { opacity: 0.25; }
    40% { opacity: 1; }
  }

  // ----- error row -----
  .hw-error {
    margin-left: 32px;
    background: rgba(163, 62, 62, 0.06);
    border: 1px solid rgba(163, 62, 62, 0.18);
    border-radius: 12px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    .hw-error-text {
      flex: 1;
      font-size: 12.5px;
      color: $bg;
    }
    .hw-retry-pill {
      flex: none;
      border: 1.5px solid $bg;
      background: #fff;
      border-radius: 999px;
      padding: 5px 11px;
      font-family: inherit;
      font-size: 11.5px;
      font-weight: 600;
      color: $bg;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: background 0.15s, color 0.15s;
      &:hover {
        background: $bg;
        color: #fff;
      }
    }
  }

  // ----- input row -----
  .hw-input-row {
    flex: none;
    border-top: 1px solid $hw-cream-line;
    padding: 10px 12px;
    background: $hw-cream;
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }
  .hw-input-wrap {
    flex: 1;
    background: #fff;
    border: 1px solid $hw-cream-line;
    border-radius: 18px;
    padding: 8px 14px;
    min-height: 38px;
    display: flex;
    align-items: center;
    transition: border-color 0.15s;
    &:focus-within { border-color: $bg; }
    textarea {
      width: 100%;
      border: 0;
      outline: 0;
      resize: none;
      background: transparent;
      font-family: inherit;
      font-size: 13.5px;
      line-height: 1.4;
      color: $bg;
      max-height: 120px;
      padding: 0;
      &::placeholder { color: $hw-quiet; }
      &:disabled { cursor: not-allowed; opacity: 0.6; }
      // iOS auto-zooms any focused input rendering smaller than 16px
      @include smallPad() {
        font-size: 16px;
      }
    }
  }
  .hw-send-btn {
    width: 56px;
    height: 56px;
    flex: none;
    border: 0;
    border-radius: 999px;
    background: #0B1D3F;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(108, 255, 176, 0.35);
    transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
    svg path { stroke: white; }
    &:hover:not(:disabled) {
      transform: scale(1.05);
      box-shadow: 0 6px 16px rgba(108, 255, 176, 0.45);
    }
    &:disabled {
      background: $hw-edge;
      box-shadow: none;
      cursor: not-allowed;
      svg path { stroke: $hw-quiet; }
    }
  }

  // ----- disclaimer -----
  .hw-foot {
    flex: none;
    text-align: center;
    font-size: 10.5px;
    color: $hw-quiet;
    padding: 6px 0 8px;
    background: $hw-cream;
  }

  // ============================================================
  // Transitions
  // ============================================================
  .hw-fade-enter-active,
  .hw-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .hw-fade-enter-from,
  .hw-fade-leave-to {
    opacity: 0;
  }
  .hw-peek-enter-active,
  .hw-peek-leave-active {
    transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .hw-peek-enter-from,
  .hw-peek-leave-to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  .hw-panel-enter-active,
  .hw-panel-leave-active {
    transition: opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1), transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .hw-panel-enter-from,
  .hw-panel-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
}
</style>
