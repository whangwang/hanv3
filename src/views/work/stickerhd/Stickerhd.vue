<template>
  <div class="work-stickerhd-view">
    <div class="hero-wrapper">
      <nav>
        <div class="container">
            <a href="/">
                <div class="logos">
                    <img src="@/assets/images/global/logo.svg" alt="">
                    <h4>Han Wang</h4>
                </div>
                <a href="/#/work" class="link">
                    <img src="@/assets/images/projects/back-arrow.svg"/>
                </a>
            </a>
        </div>
      </nav>
      <div class="work-stickerhd-container font change-color deco-container">
      <img class="hero-deco tri" src="@/assets/images/projects/stickerhd/deco-tri.svg" />
      <img class="hero-deco star" src="@/assets/images/projects/stickerhd/deco-star.svg" />
      <!-- ─── HERO ──────────────────────────────────────── -->
      <section class="s-hero">
        <div class="s-hero__inner container">
          <div class="s-hero__text">
            <h1>
              Deliver Uplift<br />
              for E-Commerce Website<br />
              <em>in 30 days</em>
            </h1>
            <p class="s-hero__sub">From design to implementation.</p>
          </div>
        </div>
      </section>
      </div>
    </div>
    <div class="work-stickerhd-container mockups font change-color">
      <section class="s-hero mockups">
        <div class="s-hero__mockups">
          <div class="mockup mockup--desktop">
            <img
              src="@/assets/images/projects/stickerhd/preview-desktop@1x.jpg"
              :srcset="renderImage('projects/stickerhd/preview-desktop.jpg')"
              alt="StickerHD Website"
            />
          </div>
          <!-- PLACEHOLDER: Mobile/responsive mockup screenshot -->
          <div class="mockup mockup--mobile">
            <img
              src="@/assets/images/projects/stickerhd/preview-mobile@1x.jpg"
              :srcset="renderImage('projects/stickerhd/preview-mobile.jpg')"
              alt="StickerHD Website"
            />
          </div>
        </div>
        <div class="s-hero__cta">
          <a href="https://stickerhd.com" target="_blank" rel="noopener" class="shd-action-pill">
            View Live Product
            <img src="@/assets/images/projects/stickerhd/arrow-right.svg" alt="" />
          </a>
        </div>
      </section>
      <!-- ─── OVERVIEW ──────────────────────────────────── -->
      <section class="s-overview">
        <div class="container">
          <div class="s-overview__row">
            <div class="s-overview__label">
              <h3>Project<br />Background</h3>
            </div>
            <div class="s-overview__content">
              <p>StickerHD, a well-known sticker printing company in Taiwan, was looking to upgrade their e-commerce website within a limited timeframe. The aim of this refinement was to reshape key user flows to promote their products, while emphasising brand impression and escalating user experience.</p>
              <b><i>Our goal: a visually compelling, high-converting storefront — delivered in 30 days.</i></b>
            </div>
          </div>
          <div class="s-overview__row">
            <div class="s-overview__label">
              <h3>My Role<br />in This Project</h3>
            </div>
            <div class="s-overview__content">
              <p>I served as lead product designer and front-end developer — actively initiating communication between stakeholders and the backend developer, illustrating the project roadmap, and delivering a new interface from scratch to live product.</p>
              <div class="tag-row">
                <span class="role-tag">Lead Designer</span>
                <span class="role-tag">Frontend Developer</span>
                <span class="stack-tag stack-tag--dark">Next.js</span>
                <span class="stack-tag stack-tag--dark">Tailwind CSS</span>
                <span class="stack-tag stack-tag--dark">Redux</span>
                <span class="stack-tag stack-tag--dark">Figma Variables</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── CHALLENGE ─────────────────────────────────── -->
      <section class="s-challenge">
        <div class="container">
          <div class="s-challenge__card">
            <div class="s-challenge__header">
              <p class="s-challenge__label">Our Challenge</p>
              <p class="s-challenge__intro">With an awareness of time constraints, we and the client concluded three main areas of improvement throughout our discussions.</p>
              <img src="@/assets/images/projects/stickerhd/spliter.svg" alt="" class="s-challenge__deco" />
            </div>
            <div class="s-challenge__grid">
              <div class="challenge-item">
                <div class="challenge-icon-box">
                  <img src="@/assets/images/projects/stickerhd/ch1.svg" alt="" />
                </div>
                <div class="challenge-text">
                  <h4>Inconsistent<br />User Interface</h4>
                  <p>The existing interface lacked consistency and failed to convey the brand concept precisely to customers.</p>
                </div>
              </div>
              <div class="challenge-item">
                <div class="challenge-icon-box">
                  <img src="@/assets/images/projects/stickerhd/ch2.svg" alt="" />
                </div>
                <div class="challenge-text">
                  <h4>Uninformative<br />Homepage</h4>
                  <p>The homepage carries the responsibility of attracting and retaining customers. The existing design didn't perform on this mission.</p>
                </div>
              </div>
              <div class="challenge-item">
                <div class="challenge-icon-box">
                  <img src="@/assets/images/projects/stickerhd/ch3.svg" alt="" />
                </div>
                <div class="challenge-text">
                  <h4>Unsatisfied<br />Order Experience</h4>
                  <p>The complex product page design failed to provide an easy and intuitive experience when customers ordered stickers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── PROCESS MAP ───────────────────────────────── -->
      <section class="s-process">
        <div class="container">
          <img class="s-process__arrow" src="@/assets/images/projects/stickerhd/arrow-down.svg" />
          <h2>A streamlined process to tackle pain points</h2>
          <img class="s-process__phases" src="@/assets/images/projects/stickerhd/process.svg" />
        </div>
      </section>

      <!-- ─── REDEFINE ──────────────────────────────────── -->
      <section class="s-redefine">
        <img src="@/assets/images/projects/stickerhd/bg-redefine.svg" alt="" class="s-redefine__bg" />
        <div class="container">

          <!-- Header -->
          <div class="s-redefine__header">
            <span class="section-label label--green">Redefine</span>
            <h2>A well-crafted design language<br />aligned with brand identity</h2>
            <p class="s-redefine__intro">The existing design system was pieced together from various libraries and templates — it lacked a true connection to the brand. I rebuilt the system by extending from the brand's core spirit, placing greater emphasis on brand assets such as the mascot and colour palette. This created a stronger foundation, ensuring the product feels both consistent and authentically branded.</p>
          </div>

          <!-- Colour Scheme — Image LEFT, Text RIGHT -->
          <div class="content-block content-block--split">
            <div class="content-block__image">
              <img src="@/assets/images/projects/stickerhd/colour-palette.svg" alt="" />
            </div>
            <div class="content-block__text">
              <p class="content-eyebrow label--green">Colour Scheme</p>
              <h3>Context-driven colour logic <br />via design tokens</h3>
              <p>By refining the hue spectrum, we developed a clean and modern palette that carries intentional meaning at every level.
              <br />A two-tier design token architecture maps Primitive Tokens (raw brand hex values) to Semantic Tokens (contextual usage like <code>action-primary-bg</code>). Both layers sync directly to the Tailwind CSS config — enabling a handover-less workflow with zero redlining.</p>
            </div>
          </div>

          <!-- Illustration — Text LEFT, Image RIGHT -->
          <div class="content-block content-block--split content-block--reversed">
            <div class="content-block__image">
              <div class="unique-mosaic">
                <!-- Landing — largest, left column spanning all rows -->
                <div class="unique-mosaic__cell unique-mosaic__landing">
                  <video autoplay muted loop playsinline preload="metadata">
                    <source src="@/assets/images/projects/stickerhd/unique-landing.mp4" type="video/mp4" />
                  </video>
                </div>
                <!-- Button — top right -->
                <div class="unique-mosaic__cell unique-mosaic__button">
                  <video autoplay muted loop playsinline preload="metadata">
                    <source src="@/assets/images/projects/stickerhd/unique-button.mp4" type="video/mp4" />
                  </video>
                </div>
                <!-- Illustration — middle right -->
                <div class="unique-mosaic__cell unique-mosaic__illustration">
                  <img src="@/assets/images/projects/stickerhd/unique-illustration.svg" alt="StickerHD Illustration" />
                </div>
                <!-- Icon — bottom right -->
                <div class="unique-mosaic__cell unique-mosaic__icon">
                  <img src="@/assets/images/projects/stickerhd/unique-icon.svg" alt="StickerHD Icons" />
                </div>
              </div>
            </div>
            <div class="content-block__text">
              <p class="content-eyebrow label--green">Illustration / Iconography / Pattern</p>
              <h3>Our signature touch — <br />unique patterns, unique brand</h3>
              <p>Inspired by the brand logo, we deconstructed and extended visual elements into patterns that give the interface a distinctive signature. To highlight the company's expertise, we placed holographic printing — its flagship product — at the centre of the homepage landing experience.
              <br />We also introduced hand-sketched illustrations that add an approachable, crafty vibe — making the brand feel more friendly and relatable to customers.</p>
            </div>
          </div>

          <!-- Design System — Image LEFT, Text RIGHT -->
          <div class="content-block content-block--split">
            <div class="content-block__image">
              <img src="@/assets/images/projects/stickerhd/design-system.jpg" alt="" />
            </div>
            <div class="content-block__text">
              <p class="content-eyebrow label--green">Design system</p>
              <h3>Consistency and refinement — <br />a design system that covers every detail</h3>
              <p>A good design system should guide designers in creating products that are consistent, refined, and cohesive. To achieve this, we refined the existing guidelines by addressing key issues — reducing excessive typographic options, clarifying the button hierarchy, and building a more consistent and meaningful colour logic.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- ─── REDESIGN ───────────────────────────────────── -->
      <section class="s-redesign">
        <img src="@/assets/images/projects/stickerhd/bg-redesign.svg" alt="" class="s-redesign__bg" />
        <div class="container">

          <!-- Header -->
          <div class="s-redesign__header">
            <span class="section-label label--teal">Redesign</span>
            <h2>Revamping key pages to enhance<br />the customer experience</h2>
          </div>

          <!-- ── HOMEPAGE showcase ────────────────────────── -->
          <div class="page-showcase">

            <!-- Before -->
            <div class="showcase-pair">
              <div class="showcase-pair__sticky">
                <p class="showcase-pair__ghost">HOME</p>
                <p class="showcase-label showcase-label--before">Original design</p>
                <h3>Lacking a compelling <span>why</span></h3>
                <p>The initial homepage had the right calls to action — order now, product categories, featured items — but it didn't showcase the unique strengths that would convince customers to choose StickerHD over competitors. Visuals lacked appeal, making users less motivated to scroll and engage.</p>
              </div>
              <div class="showcase-pair__scroll">
                <img
                  src="@/assets/images/projects/stickerhd/home-before@1x.jpg"
                  :srcset="renderImage('projects/stickerhd/home-before.jpg')"
                  alt="Original StickerHD Homepage"
                  class="showcase-screenshot"
                />
              </div>
            </div>

            <!-- After -->
            <div class="showcase-pair">
              <div class="showcase-pair__sticky">
                <p class="showcase-pair__ghost">HOME</p>
                <p class="showcase-label showcase-label--after">New design</p>
                <h3>A story that turns visitors into believers</h3>
                <p>The new design tells a compelling story for newcomers — showing them why they should choose StickerHD. From a strong landing section highlighting our signature work and unique services, to clear ordering steps, product showcases, and featured items. The journey concludes with a video that reinforces our strengths, leaving a lasting impression.</p>
              </div>
              <div class="showcase-pair__scroll">
                <img
                  src="@/assets/images/projects/stickerhd/home-after@1x.jpg"
                  :srcset="renderImage('projects/stickerhd/home-after.jpg')"
                  alt="New StickerHD Homepage"
                  class="showcase-screenshot"
                />
              </div>
            </div>

          </div>

          <!-- ── PRODUCT PAGE card ────────────────────────── -->
          <div class="page-showcase-card">
            <p class="showcase-pair__ghost showcase-pair__ghost--center">PRODUCT</p>
            <h3 class="page-showcase-card__heading">A waterfall layout for<br />viewing and deciding</h3>
            <p class="page-showcase-card__body">The redesigned product page presents a well-structured, form-like experience: material → size → finish → quantity → add to cart. The Dual-Column Layout keeps persistent product information anchored on the left while the right side provides a clear vertical decision path — reducing cognitive load at every step.</p>

            <!-- Before / After video comparison -->
            <div class="video-compare" ref="videoCompare">
              <div class="video-compare__side video-compare__side--before">
                <span class="video-compare__badge">Before</span>
                <video ref="videoBefore" muted playsinline preload="metadata" class="video-compare__video">
                  <source src="@/assets/images/projects/stickerhd/prod-before.mp4" type="video/mp4" />
                </video>
              </div>
              <div class="video-compare__divider">
                <img src="@/assets/images/projects/stickerhd/arrow-right-big.svg" alt="" class="video-compare__arrow" />
              </div>
              <div class="video-compare__side video-compare__side--after">
                <span class="video-compare__badge">After</span>
                <video ref="videoAfter" muted playsinline preload="metadata" class="video-compare__video">
                  <source src="@/assets/images/projects/stickerhd/prod-after.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <!-- ── CART ─────────────────────────────────────── -->
          <div class="content-block content-block--split s-redesign__extra-block">
            <div class="content-block__image">
              <img
                src="@/assets/images/projects/stickerhd/cart@1x.jpg"
                :srcset="renderImage('projects/stickerhd/cart.jpg')"
                alt="StickerHD Cart"
                class="screenshot"
              />
            </div>
            <div class="content-block__text">
              <p class="showcase-pair__ghost">CART</p>
              <h3>A smarter checkout experience <br />built around how customers actually order</h3>
              <p>The redesigned cart clearly presents product details while streamlining how customers fill in their order specifics. The centrepiece is a dynamic delivery component that lets customers select their region and delivery method first — calculating freight on the fly and updating the total in real time.</p>
              <p>This was especially critical for StickerHD: they offer a wide range of delivery options including urgent production and international shipping. Getting the pricing right before commitment removes the biggest friction point at the moment of purchase.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- ─── RESTRUCTURE ───────────────────────────────── -->
      <section class="s-restructure">
        <img src="@/assets/images/projects/stickerhd/bg-restruct.svg" alt="" class="s-restructure__bg" />
        <div class="container">

          <!-- Header -->
          <div class="s-restructure__header">
            <span class="section-label label--orange">Restructure</span>
            <h2>Engineering the experience<br />from code to delivery</h2>
            <p class="s-restructure__intro">With the design locked, I led the full front-end build — making deliberate engineering decisions to ensure the product was fast, maintainable, and handed off without friction.</p>
          </div>

          <!-- Performance — placeholder LEFT, Text RIGHT -->
          <div class="content-block content-block--split">
            <div class="content-block__image">
              <img
                src="@/assets/images/projects/stickerhd/skeleton@1x.jpg"
                :srcset="renderImage('projects/stickerhd/skeleton.jpg')"
                alt="Skeleton Loading Example"
                class="showcase-screenshot"
              />
            </div>
            <div class="content-block__text">
              <p class="content-eyebrow label--orange">Performance Engineering</p>
              <h3>Fast by design, not by accident</h3>
              <p>With e-commerce, every second of load time impacts conversion. I implemented three strategies across the stack:</p>
              <ul class="s-tech-list">
                <li><strong>Skeleton Loading</strong> — eliminates layout shift during data fetch</li>
                <li><strong>Next.js preloading</strong> — instant page transitions across product pages</li>
                <li><strong>Redux caching</strong> — no redundant API calls on repeated product views</li>
              </ul>
            </div>
          </div>

          <!-- Design-to-Code — Text LEFT, placeholder RIGHT -->
          <div class="content-block content-block--split content-block--reversed">
            <div class="content-block__image">
              <img src="@/assets/images/projects/stickerhd/tokentocss.jpg" alt="" />
            </div>
            <div class="content-block__text">
              <p class="content-eyebrow label--orange">Design-to-Code Workflow</p>
              <h3>Handover-less: Figma Variables → Tailwind CSS</h3>
              <p>To win stakeholder buy-in for the full redesign, I first applied only the new token system to the existing homepage layout — without changing a single layout element. The visual improvement was immediate. That proved the ROI and unlocked the full redesign scope.</p>
              <p>Primitive Tokens defined raw brand hex values in Figma Variables. Semantic Tokens mapped them to contextual usage (<code>action-primary-bg</code>, <code>surface-default</code>). Both layers synced directly to the Tailwind CSS config — with API contracts documented for the backend engineer, ensuring every spec was buildable with zero surprises at handoff.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- ─── OUTCOME ────────────────────────────────────── -->
      <section class="s-outcome">
        <img src="@/assets/images/projects/stickerhd/bg-redefine.svg" alt="" class="s-outcome__bg" />
        <div class="container">

          <div class="s-outcome__header">
            <span class="section-label label--white">Outcome</span>
            <h1>Delivered in 30 days,<br />confirmed by the client</h1>
          </div>

          <div class="s-outcome__grid">
            <div class="outcome-item">
              <blockquote class="outcome-item__quote">The new product page makes it so easy to pick what you want and place an order — we've seen more customers completing their purchases since the launch.</blockquote>
              <p class="outcome-item__topic">Conversion Rate</p>
            </div>
            <div class="outcome-item">
              <blockquote class="outcome-item__quote">More customers are finding us and placing their first order. The homepage tells our story the right way now — it actually gives people a reason to choose us.</blockquote>
              <p class="outcome-item__topic">Sales Growth</p>
            </div>
            <div class="outcome-item">
              <blockquote class="outcome-item__quote">The website feels so much more professional and trustworthy. Customers have been saying the whole ordering experience is just smoother and cleaner.</blockquote>
              <p class="outcome-item__topic">Customer Satisfaction</p>
            </div>
          </div>

          <div class="shd-cta-btn" role="link" onclick="window.open('https://stickerhd.com','_blank')">
            <!-- z:1  — full-spectrum rainbow, 300×300%, scrolls diagonally -->
            <div class="shd-cta-btn__bg"></div>
            <!-- z:9  — frosted white glass that mutes the rainbow to subtle shimmer -->
            <div class="shd-cta-btn__glass"></div>
            <!-- z:10 — blurred white ellipse, brightens the centre -->
            <div class="shd-cta-btn__glow"></div>
            <!-- z:11 — text + icon above all layers -->
            <div class="shd-cta-btn__label">
              Try It Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#262629" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

        </div>
      </section>
    </div>
    <ContactSection bg="#254441" />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'WorkStickerHDView',
  components: {
    ContactSection
  },

  mounted() {
    useMeta({ title: 'StickerHD — Deliver Uplift for E-Commerce' })
    this._initVideoSync()
  },

  beforeUnmount() {
    if (this._videoObserver) {
      this._videoObserver.disconnect()
      this._videoObserver = null
    }
    const vb = this.$refs.videoBefore
    const va = this.$refs.videoAfter
    if (vb) vb.pause()
    if (va) va.pause()
  },

  methods: {
    _initVideoSync() {
      const vBefore = this.$refs.videoBefore
      const vAfter  = this.$refs.videoAfter
      const wrap    = this.$refs.videoCompare
      if (!vBefore || !vAfter || !wrap) return

      let endedBefore = false
      let endedAfter  = false
      let inView      = false

      // Restart both from the top only when both have ended and element is visible
      const setSpeed = () => {
        vBefore.playbackRate = 0.5
        vAfter.playbackRate  = 0.5
      }

      const restartBoth = () => {
        endedBefore = false
        endedAfter  = false
        vBefore.currentTime = 0
        vAfter.currentTime  = 0
        if (inView) {
          vBefore.play().catch(() => {})
          vAfter.play().catch(() => {})
          setSpeed()
        }
      }

      // Shorter video stays frozen on its last frame until the other finishes
      vBefore.addEventListener('ended', () => {
        endedBefore = true
        if (endedAfter) restartBoth()
      })
      vAfter.addEventListener('ended', () => {
        endedAfter = true
        if (endedBefore) restartBoth()
      })

      // Start playing once scrolled into view; pause when scrolled away
      this._videoObserver = new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting
        if (inView) {
          if (!endedBefore) vBefore.play().catch(() => {})
          if (!endedAfter)  vAfter.play().catch(() => {})
          setSpeed()
        } else {
          vBefore.pause()
          vAfter.pause()
        }
      }, { threshold: 0.1 })

      this._videoObserver.observe(wrap)
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss';
</style>
