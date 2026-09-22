<template>
  <div class="work-agentapp-wrapper">
    <!-- Initial nav — sits over the hero at page top, scrolls away with the
         page (no sticky/fixed). -->
    <nav class="ag-nav-top">
      <div class="container">
        <a href="/">
          <div class="logos">
            <img src="@/assets/images/global/logo.svg" alt="">
            <h4>Han Wang</h4>
          </div>
          <a href="/work" class="link">
            <img src="@/assets/images/projects/back-arrow.svg"/>
          </a>
        </a>
      </div>
    </nav>

    <!-- Slide-in stuck nav — appears from above (translateY -100% → 0) once
         the user has scrolled past the top nav. White bg + shadow so it
         reads as a "scrolled" state, not a continuation of the hero. -->
    <nav class="ag-nav-stuck" :class="{ visible: navStuckVisible }">
      <div class="container">
        <a href="/">
          <div class="logos">
            <img src="@/assets/images/global/logo.svg" alt="">
            <h4>Han Wang</h4>
          </div>
          <a href="/work" class="link">
            <img src="@/assets/images/projects/back-arrow-dark.svg"/>
          </a>
        </a>
      </div>
    </nav>

    <div class="work-agentapp-view">

    <!-- ============== Hero — gradient + headline + landing ============== -->
    <section class="ag-hero">
      <div class="hero-gradient-bg"></div>

      <!-- hero text -->
      <div class="ag-wrap hero-text">
        <h1 class="ag-hero-title ag-reveal">
          An Agent App that<br>Mirrors the Sales Mind
        </h1>
        <p class="ag-hero-sub ag-reveal" style="--rd:200ms">
          A mobile workspace app for 30,000+ agents at Taiwan's leading insurance corporation.
        </p>
      </div>

      <!-- landing image (96px below subtitle, with bg-deco bottom-aligned to image top).
           Mobile <=700px swaps to the dedicated landing-mobile composition. -->
      <div class="ag-wrap landing-area">
        <img class="bg-deco" src="@/assets/images/projects/agentapp/hero-bg.svg" alt="">
        <div class="landing-frame ag-reveal">
          <picture>
            <source
              media="(max-width: 700px)"
              :srcset="`${require('@/assets/images/projects/agentapp/landing-mobile@1x.jpg')} 1x, ${require('@/assets/images/projects/agentapp/landing-mobile@2x.jpg')} 2x, ${require('@/assets/images/projects/agentapp/landing-mobile@3x.jpg')} 3x`"
            >
            <img src="@/assets/images/projects/agentapp/landing@2x.jpg" alt="Insurance agent meeting a client">
          </picture>
        </div>
      </div>
    </section>

    <!-- ============== Chapter 2 — Project intro ============== -->
    <section class="ag-section ag-intro" id="intro">
      <div class="ag-wrap">
        <h2 class="ag-h-display ag-reveal">
          The creation of a<br><em>agent mobile workspace</em>
        </h2>

        <div class="intro-grid">
          <div class="intro-left ag-reveal" style="--rd:120ms">
            <h3 class="intro-h">Background</h3>
            <p class="ag-body">
              One of Taiwan's largest insurance providers, supported by a field force of more than 30,000 agents, had seen its digital ecosystem evolve into a fragmented mix of desktop systems and mobile workarounds.
            </p>
            <p class="ag-body">
              Agents often relied on personal spreadsheets, handwritten notes, and multiple apps just to manage a single client visit.
            </p>
            <p class="ag-body">
              We were commissioned to redesign the experience, repositioning mobile as the core platform for an agent's daily workflow rather than a secondary extension of desktop systems.
            </p>
          </div>
          <div class="intro-right ag-reveal" style="--rd:200ms">
            <div class="meta-row">
              <span class="k">My Role</span>
              <span class="v">Lead UI Designer — sole UI designer in the project. Owned visual direction, page-level design, and the design system the client team can extend.</span>
            </div>
            <div class="meta-row">
              <span class="k">Time</span>
              <span class="v">Jan 2022 → Nov 2022</span>
            </div>
            <div class="meta-row">
              <span class="k">Agency</span>
              <span class="v">AJA Creative</span>
            </div>
            <div class="meta-row">
              <span class="k">Team</span>
              <span class="v">1 UX designer, 1 design lead, 1 PM. Plus the client's product, compliance, and IT teams.</span>
            </div>
          </div>
        </div>

        <!-- Achievement card — the engagement's wins, framed as outcomes
             rather than numbers. Supporting metrics sit beneath each. -->
        <div class="achievement-card ag-reveal" ref="outcomeSec" style="--rd:280ms">
          <div class="ach-head">
            <div class="ag-eyebrow">Achievement</div>
            <h3 class="ach-title">
              What we <em>actually delivered</em>.
            </h3>
          </div>
          <ol class="ach-list">
            <li class="ach-item">
              <span class="ach-num">01</span>
              <div class="ach-body">
                <h4 class="ach-statement">Translated a complex desktop process into a streamlined mobile experience.</h4>
                <p class="ach-support">
                  <span class="metric-inline">
                    <span class="dim">10<span class="plus">+</span></span>
                    <span class="arrow">→</span>
                    <span class="hi">3</span>
                  </span>
                  desktop steps compressed into three mobile taps — the policy-lookup flow agents reach for most.
                </p>
              </div>
            </li>
            <li class="ach-item">
              <span class="ach-num">02</span>
              <div class="ach-body">
                <h4 class="ach-statement">Consolidated business, regulatory, security and IT perspectives into agreed design deliverables.</h4>
                <p class="ach-support">
                  Cross-functional alignment across product, compliance, security and the client's IT — one design language signed off without escalation.
                </p>
              </div>
            </li>
            <li class="ach-item">
              <span class="ach-num">03</span>
              <div class="ach-body">
                <h4 class="ach-statement">Delivered a design that won <em>{{ agentsCount.toLocaleString() }}+</em> agents at the in-house app proposal seminar.</h4>
                <p class="ach-support">
                  A live vote on the homepage concept by the field force themselves — the endorsement that locked in the final direction.
                </p>
              </div>
            </li>
          </ol>

          <figure class="ach-quote">
            <span class="ach-quote-mark" aria-hidden="true">“</span>
            <blockquote>
              A highly professional and collaborative partner who demonstrates a strong understanding of user needs. Meticulous in analyzing the logic behind user feedback, they consistently deliver highly practical, creative design solutions with great attention to detail and flawless execution.
            </blockquote>
            <figcaption>— Product Owner, Taiwan's leading insurance corporation</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ============== Chapter 3 — Problem statement (card → bg expand on scroll) ============== -->
    <section
      class="ag-problem-section"
      :class="{ 'is-expanded': problemExpanded }"
      id="problem"
      ref="problemSection"
    >
      <div class="ag-wrap">
        <div class="problem-area">
          <!-- Single bg element that genuinely expands (size + radius + shadow
               all transition together) rather than cross-fading two layers. -->
          <div class="problem-bg"></div>

          <div class="problem-statement" ref="problemStatement">
            <div class="grad-eyebrow">Problem Statement</div>
            <h2 class="grad-title">
              How might we transform a bulky desktop portal into a fast, proactive partner for agents on the move?
            </h2>
          </div>

          <div class="problem-extended">
            <div class="problem-extended-inner">
              <div class="grad-divider"></div>
              <h3 class="problem-extended-title">Three important <em>why</em></h3>
              <div class="why-cards">
                <div class="why-card">
                  <div class="why-icon">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 22 L11 25 L17 16 L23 19 L29 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M22 7 L29 7 L29 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="why-h">Why now?</div>
                  <p>A failed digital transformation had bruised client trust and shaken agent morale. The company needed a visible short-term win to proof they were listening and back on track.</p>
                  <div class="why-deco"></div>
                </div>
                <div class="why-card">
                  <div class="why-icon">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="16" r="4" stroke="currentColor" stroke-width="2"/>
                      <circle cx="26" cy="16" r="4" stroke="currentColor" stroke-width="2"/>
                      <circle cx="16" cy="16" r="2.5" fill="currentColor"/>
                      <path d="M10 16 L13.5 16 M18.5 16 L22 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div class="why-h">Why us?</div>
                  <p>An external team with a fresh view could bridge the company and its agents in a way internal teams couldn't. Half the brief was design; the other half was making agents feel heard.</p>
                  <div class="why-deco alt"></div>
                </div>
                <div class="why-card">
                  <div class="why-icon">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="9" y="3" width="14" height="26" rx="2.5" stroke="currentColor" stroke-width="2"/>
                      <line x1="13" y1="7" x2="19" y2="7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                      <circle cx="16" cy="25" r="1.2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="why-h">Why app?</div>
                  <p>The company assumed iPad. But 80% of an agent's day is in motion — between meetings, in cars, in cafés — where an iPad is too big. Mobile was the only device that fit the day.</p>
                  <div class="why-deco alt2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============== Chapter 4 — Strategy (2-col: copy + triangle diagram) ============== -->
    <section class="ag-section ag-strategy" id="strategy">
      <div class="ag-wrap">
        <div class="strategy-2col">
          <!-- Left: title + description + commitments list -->
          <div class="strategy-text">
            <div class="ag-eyebrow ag-reveal">Design Strategy</div>
            <h2 class="ag-h-display ag-reveal" style="--rd:80ms">
              Collaborative UX: <br /><em>designing with our agents</em>
            </h2>
            <p class="ag-body-l ag-reveal" style="--rd:160ms;margin-top:24px">
              Our strategy was to design from where the agent stands, not from where we sit. We invited agents into the process extensively — as users with a clear voice, and also a domain knowledge stakeholder.
            </p>

            <ol class="strategy-text-list ag-reveal" style="--rd:240ms">
              <li v-for="(p, i) in pillars" :key="i">
                <span class="li-num">0{{ i + 1 }}</span>
                <div class="li-body">
                  <strong class="li-title">{{ p.nm }}</strong>
                  <p>{{ p.lines[0] }}</p>
                </div>
              </li>
            </ol>
          </div>

          <!-- Right: Venn diagram exported from Figma -->
          <div class="strategy-diagram ag-reveal" style="--rd:200ms" aria-hidden="true">
            <img class="strategy-img" :src="require('@/assets/images/projects/agentapp/tri.svg')" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- ============== Chapter 4.5 — Research flow: Activities → Insights → Direction ============== -->
    <section class="ag-section ag-flow ag-section-research" id="research">
      <div class="ag-wrap">
        <div class="ag-section-head">
          <div class="ag-eyebrow ag-reveal">How We Got There</div>
          <h2 class="ag-h-display ag-reveal" style="--rd:80ms">
            From <em>listening</em>, through <em>insight</em>, to <em>direction</em>.
          </h2>
          <p class="ag-body-l ag-reveal" style="--rd:160ms;margin-top:24px;max-width:820px">
            Extensive user research synthesised into a core set of clustered insights, which defined the guiding principles for our entire UI/UX design.
          </p>
        </div>

        <!-- Three-tier flow diagram: 4 activities → 3 insight diamonds → 3 direction goals -->
        <div class="flow-diagram">

          <!-- Tier 01 · Activities (label intentionally removed for seamless flow) -->
          <div class="tier tier-top">
            <div v-for="(c, i) in researchCols" :key="i" class="tier-card top-card ag-reveal" :style="{ '--rd': i * 80 + 'ms' }">
              <div class="card-num"><span class="n">{{ c.n }}</span><span class="unit">{{ c.unit }}</span></div>
              <div class="card-h">{{ c.h }}</div>
              <p class="card-p">{{ c.p }}</p>
            </div>
          </div>

          <!-- Connector: Activities → Insights -->
          <div class="flow-conn flow-conn-top ag-reveal" aria-hidden="true">
            <svg viewBox="0 0 1000 90" preserveAspectRatio="none">
              <g stroke="#C5D4EE" stroke-width="1.4" stroke-dasharray="4 6" fill="none" stroke-linecap="round">
                <!-- Vertical drops from 4 top card centres -->
                <line x1="125" y1="0" x2="125" y2="45"/>
                <line x1="375" y1="0" x2="375" y2="45"/>
                <line x1="625" y1="0" x2="625" y2="45"/>
                <line x1="875" y1="0" x2="875" y2="45"/>
                <!-- Horizontal merge -->
                <line x1="125" y1="45" x2="875" y2="45"/>
                <!-- Drops to 3 middle diamonds -->
                <line x1="335" y1="45" x2="335" y2="90"/>
                <line x1="500" y1="45" x2="500" y2="90"/>
                <line x1="665" y1="45" x2="665" y2="90"/>
              </g>
            </svg>
            <span class="conn-dot blue" style="left:18%"></span>
            <span class="conn-dot accent" style="left:24%"></span>
            <span class="conn-dot diamond blue" style="left:33%"></span>
            <span class="conn-dot accent" style="left:42%"></span>
            <span class="conn-dot yellow" style="left:50%"></span>
            <span class="conn-dot blue" style="left:58%"></span>
            <span class="conn-dot diamond accent" style="left:66%"></span>
            <span class="conn-dot blue" style="left:78%"></span>
            <span class="conn-dot accent" style="left:84%"></span>
          </div>

          <!-- Tier 02 · Insights — pill panel hosts a 2-row marquee + soft synthesis line inside -->
          <div class="tier tier-middle">
            <div class="insight-rect ag-reveal">
              <p class="insight-summary">
                Agents don't think by <em>task type</em>, they think by <em>customer</em>. <br />Every workaround they invented was a way to cluster work back around the person they were about to call.
              </p>
              <div class="pain-marquee">
                <!-- Row 1 — first half, scrolls left -->
                <div class="pain-track row-1">
                  <div v-for="(p, i) in painRow1" :key="`a${i}`" class="pain-chip">{{ p }}</div>
                  <div v-for="(p, i) in painRow1" :key="`b${i}`" class="pain-chip" aria-hidden="true">{{ p }}</div>
                </div>
                <!-- Row 2 — second half, scrolls right -->
                <div class="pain-track row-2">
                  <div v-for="(p, i) in painRow2" :key="`c${i}`" class="pain-chip">{{ p }}</div>
                  <div v-for="(p, i) in painRow2" :key="`d${i}`" class="pain-chip" aria-hidden="true">{{ p }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Connector: Insights → Direction -->
          <div class="flow-conn flow-conn-bottom ag-reveal" aria-hidden="true">
            <svg viewBox="0 0 1000 90" preserveAspectRatio="none">
              <g stroke="#C5D4EE" stroke-width="1.4" stroke-dasharray="4 6" fill="none" stroke-linecap="round">
                <!-- Drops from 3 middle diamonds -->
                <line x1="335" y1="0" x2="335" y2="45"/>
                <line x1="500" y1="0" x2="500" y2="45"/>
                <line x1="665" y1="0" x2="665" y2="45"/>
                <!-- Horizontal merge -->
                <line x1="167" y1="45" x2="833" y2="45"/>
                <!-- Drops to 3 bottom cards -->
                <line x1="167" y1="45" x2="167" y2="90"/>
                <line x1="500" y1="45" x2="500" y2="90"/>
                <line x1="833" y1="45" x2="833" y2="90"/>
              </g>
            </svg>
            <span class="conn-dot accent" style="left:22%"></span>
            <span class="conn-dot diamond blue" style="left:30%"></span>
            <span class="conn-dot yellow" style="left:38%"></span>
            <span class="conn-dot blue" style="left:46%"></span>
            <span class="conn-dot accent" style="left:54%"></span>
            <span class="conn-dot diamond blue" style="left:62%"></span>
            <span class="conn-dot accent" style="left:72%"></span>
            <span class="conn-dot blue" style="left:80%"></span>
          </div>

          <!-- Tier 03 · Direction (label intentionally removed for seamless flow) -->
          <div class="tier tier-bottom">
            <div v-for="(g, i) in visionGoals" :key="i" class="tier-card bottom-card ag-reveal" :style="{ '--rd': i * 100 + 'ms' }">
              <img
                class="card-illust"
                :src="require(`@/assets/images/projects/agentapp/goal-${i+1}@1x.png`)"
                :srcset="`${require(`@/assets/images/projects/agentapp/goal-${i+1}@1x.png`)} 1x, ${require(`@/assets/images/projects/agentapp/goal-${i+1}@2x.png`)} 2x, ${require(`@/assets/images/projects/agentapp/goal-${i+1}@3x.png`)} 3x`"
                alt=""
                aria-hidden="true"
              >
              <div class="card-tag">Vision goal</div>
              <div class="card-h" v-html="g.title"></div>
              <p class="card-p">{{ g.sub }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============== Chapter 5 — Key Features (numbered modules) ============== -->
    <section class="ag-section ag-features-head" id="features">
      <img src="@/assets/images/projects/agentapp/key-feature-bg.svg" alt="" class="ag-feature-bg-deco" aria-hidden="true">
      <div class="ag-wrap">
        <div class="ag-section-head">
          <div class="ag-eyebrow ag-reveal">Key Features</div>
          <h2 class="ag-h-display ag-reveal" style="--rd:80ms">
            Empowering the <em>Agent's Day-to-Day</em>
          </h2>
          <h4>Replacing fragmented workarounds with unified, streamlined digital solutions.</h4>
        </div>
      </div>
    </section>

    <section
      v-for="(m, mi) in modules"
      :key="m.anchor"
      class="ag-module"
      :id="m.anchor"
    >
      <div class="ag-wrap">
        <div :class="['module-grid', { swap: m.swap }]">
          <div class="module-left">
            <span class="module-num ag-reveal">
              0{{mi+1}}
            </span>
            <div class="module-label ag-reveal" style="--rd:80ms">{{ m.label }}</div>
            <h3 class="module-intent ag-reveal" style="--rd:160ms" v-html="m.intent"></h3>
            <p class="module-rationale ag-reveal" style="--rd:240ms" v-html="m.rationale"></p>

            <blockquote v-if="m.quote" class="module-quote ag-reveal" style="--rd:320ms">
              <p>“{{ m.quote.text }}”</p>
              <cite>— {{ m.quote.source }}</cite>
            </blockquote>

            <div v-if="m.visionGoal" class="module-goal ag-reveal" style="--rd:400ms">
              <span class="m-goal-arrow" aria-hidden="true">→</span>
              <span class="m-goal-tag">Vision goal {{ m.visionGoal.n }}</span>
              <span class="m-goal-name">{{ m.visionGoal.title }}</span>
            </div>
          </div>
          <div class="module-right">
            <div class="ag-reveal-scale" style="--rd:400ms">
              <img
                class="module-shot"
                :src="require(`@/assets/images/projects/agentapp/features/${m.image}@1x.png`)"
                :srcset="`${require(`@/assets/images/projects/agentapp/features/${m.image}@1x.png`)} 1x, ${require(`@/assets/images/projects/agentapp/features/${m.image}@2x.png`)} 2x, ${require(`@/assets/images/projects/agentapp/features/${m.image}@3x.png`)} 3x`"
                :alt="m.imageAlt || m.label"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============== Module 04 — Live Quoting (6-step storyboard) ============== -->
    <!-- Inherits .ag-module typography (number / label / intent / rationale)
         so it sits visually as Feature 04 in the same series; .ag-quote-flow
         layers on the storyboard-specific overrides (header width, foot grid). -->
    <section class="ag-section ag-module ag-quote-flow" id="m04">
      <div class="ag-wrap">

        <!-- Header — same number/label/intent treatment as the 3 modules above -->
        <div class="quote-head">
          <span class="module-num ag-reveal">
            <span class="num-pre">0</span><span class="num-fig">4</span>
            <span class="num-rule" aria-hidden="true"></span>
          </span>
          <div class="module-label ag-reveal" style="--rd:80ms">Live Quoting · Collapsing a multi-day workflow into on-the-spot mobile quoting</div>
          <h3 class="module-intent ag-reveal" style="--rd:160ms">
            Build a quote at the table — turn the <em>moment</em> into a <em>sale.</em>
          </h3>
          <p class="module-rationale ag-reveal" style="--rd:240ms">
            Sales happen in conversations—across a café table or mid-visit—when a client suddenly opens a window of opportunity. In insurance, striking while the iron is hot is everything; if the moment slips away, re-engaging the client takes twice the effort.
            <br /><br />
            To capture this heat, we collaborated across business, compliance, security, and IT teams to transform a rigid, days-long desktop quoting process into an intuitive, 6-step mobile workflow. The platform maintains strict financial and legal rigor but empowers agents to build and share complex quotes on the spot. Once the moment is secured, the data seamlessly handshakes with existing backend platforms to generate formal proposals, ensuring the momentum of the sale is never lost.
          </p>
        </div>

        <!-- The 6-step storyboard. Reveals stagger left-to-right per step;
             chevron arrows in the gaps carry the flow direction. -->
        <div class="quote-flow-stage">
          <ol class="quote-steps">
            <li
              v-for="(s, i) in quoteSteps"
              :key="i"
              class="quote-step ag-reveal"
              :style="{ '--rd': i * 90 + 'ms' }"
            >
              <div class="step-head">
                <span class="step-num">0{{ i + 1 }}</span>
                <span class="step-tick" aria-hidden="true"></span>
              </div>
              <h4 class="step-label">{{ s.label }}</h4>
              <img
                class="step-shot"
                :src="require(`@/assets/images/projects/agentapp/features/quote-${i+1}@1x.png`)"
                :srcset="`${require(`@/assets/images/projects/agentapp/features/quote-${i+1}@1x.png`)} 1x, ${require(`@/assets/images/projects/agentapp/features/quote-${i+1}@2x.png`)} 2x, ${require(`@/assets/images/projects/agentapp/features/quote-${i+1}@3x.png`)} 3x`"
                :alt="s.label"
              >
              <p class="step-caption" style="display: none;">{{ s.caption }}</p>
            </li>
          </ol>
        </div>

        <!-- Footer — pull-quote on the left, vision-goal connection on the right -->
        <div class="quote-foot">
          <blockquote class="module-quote ag-reveal" style="--rd:80ms">
            <p>“If I had to wait until I got back to the office, the moment was already gone.”</p>
            <cite>— Agent · Shadowing session</cite>
          </blockquote>
          <div class="module-goal ag-reveal" style="--rd:160ms">
            <span class="m-goal-arrow" aria-hidden="true">→</span>
            <span class="m-goal-tag">Vision goal 03</span>
            <span class="m-goal-name">Capture the moment, shorten the cycle</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ============== Chapter 6 — Design Concept (full-width section) ============== -->
    <section class="ag-concept" id="concept">
      <div class="ag-wrap">
        <img
          class="concept-bg"
          src="@/assets/images/projects/agentapp/visual-concept-bg.svg"
          alt=""
          aria-hidden="true"
        >
        <div class="concept-text">
          <div class="ag-eyebrow ag-reveal">Design Concept</div>
          <h2 class="ag-h-display ag-reveal" style="--rd:80ms">
            A partner on the road.
          </h2>

          <ol class="concept-pillars">
            <li v-for="(p, i) in brandPillars" :key="i" class="concept-pillar ag-reveal" :style="{ '--rd': 160 + i * 120 + 'ms' }">
              <img class="cp-icon" :src="require('@/assets/images/projects/agentapp/flag.svg')" alt="" aria-hidden="true">
              <div class="cp-body">
                <div class="cp-head">
                  <span class="cp-name">{{ p.nm }}</span>
                  <span v-if="p.tag" class="cp-tag">{{ p.tag }}</span>
                </div>
                <p class="cp-text">{{ p.p }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- ============== Chapter 7 — Design system ============== -->
    <section class="ag-section ag-system" id="system">
      <div class="ag-wrap">
        <div class="ag-section-head">
          <div class="ag-eyebrow ag-reveal">Design System</div>
          <h2 class="ag-h-display ag-reveal" style="--rd:80ms">
            Architecting <em>a self-sustaining ecosystem</em>
          </h2>
          <p class="ag-body ag-reveal" style="--rd:160ms;max-width:720px;margin-top:24px">
            To ensure long-term product velocity and seamless handoff, the design system was architected as a self-sustaining framework. By codifying reusable components and strict design governance, we enabled internal teams to independently scale the platform and launch new workflows with complete visual and functional consistency.
          </p>
        </div>

        <!-- Typography -->
        <div class="system-row ag-reveal">
          <div class="system-heading">
            <div class="kicker">01</div>
            <h3>Typography</h3>
            <p class="ag-body">To optimize performance and native rendering, the design system utilizes system-default typefaces: SF Pro and Roboto for English, paired with PingFang TC and Noto Sans TC for Traditional Chinese. Matching typographic ratios across iOS and Android ensures a seamless visual weight and brand voice regardless of the device.<br /><br />To support an aging agent demographic, the system prioritizes legibility over decoration. We anchored the core body text at a minimum baseline of 16px and engineered an adaptive large-text mode, ensuring critical financial data remains readable under any field conditions.</p>
          </div>
          <div class="spec-card type-spec">
            <img class="type-img" :src="require('@/assets/images/projects/agentapp/typography.svg')" alt="Typography — Source Han Sans · Montserrat">
          </div>
        </div>

        <!-- Colour -->
        <div class="system-row ag-reveal">
          <div class="system-heading">
            <div class="kicker">02</div>
            <h3>Colour</h3>
            <p class="ag-body">We translated the corporate brand palette into a digital-first framework rooted in semantic design tokens. Colors are named strictly by their functional role and interaction context rather than their visual hue. This forces both designers and developers to choose colors based on systemic purpose, asking "what role does this play?" rather than "what does it look like?"
              <br /><br />Beyond cross-platform alignment, this semantic logic establishes a strict color-coding system that provides intuitive interaction cues for field agents. Six shadow tokens follow the exact same functional naming architecture, reinforcing consistent depth, hierarchy, and system-wide predictability without adding visual noise.</p>
          </div>
          <div class="spec-card">
            <div v-for="g in colorGroups" :key="g.title" class="color-group">
              <div class="group-title">{{ g.title }}</div>
              <div class="color-grid">
                <div v-for="c in g.cells" :key="c.n" class="color-cell">
                  <div class="swatch" :style="{ background: c.grad || c.hex }">
                    <div v-if="c.txt" class="status-sample" :style="{ color: c.txt }">STATUS</div>
                  </div>
                  <div class="nm">{{ c.n }}</div>
                  <div class="hex">{{ c.n2 || c.hex }}</div>
                </div>
              </div>
            </div>
            <div class="shadow-block">
              <div class="group-title">Shadow tokens · all keyed to brand blue</div>
              <div class="shadow-grid">
                <div v-for="sh in shadowTokens" :key="sh.n" class="shadow-cell">
                  <div class="shadow-sample" :style="{ boxShadow: sh.s }"></div>
                  <div class="nm">{{ sh.n }}</div>
                  <div class="hex">{{ sh.s }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Iconography -->
        <div class="system-row ag-reveal">
          <div class="system-heading">
            <div class="kicker">03</div>
            <h3>Iconography</h3>
            <p class="ag-body">To blend brand identity with clean utility, we established a tiered iconography framework based on interaction context. Icons scale through three distinct design principles: simple monochrome lines for inline labels, color-coded variants to signal interactivity, and rich chromatic gradients for high-visibility touchpoints like the tab bar. This ensures the icon system acts as an intuitive navigation cue rather than mere decoration.
                <br /><br />To guarantee perfect visual consistency, every icon is engineered on a strict construction grid with keyline guides. Because different geometric shapes (circles, squares, rectangles) naturally carry different visual weights, this framework standardizes the boundaries so that any team member can scale and extend the icon set while maintaining a flawless, unified optical balance.</p>
          </div>

          <div class="spec-card icon-spec">

            <!-- Construction grids — three frame types across the system -->
            <div class="icon-construction">
              <figure class="ic-frame">
                <img src="@/assets/images/projects/agentapp/icon-frame-line.svg" alt="">
                <figcaption>20 px · Monochrome line</figcaption>
              </figure>
              <figure class="ic-frame">
                <img src="@/assets/images/projects/agentapp/icon-frame-interact.svg" alt="">
                <figcaption>24 px · Interactable</figcaption>
              </figure>
              <figure class="ic-frame">
                <img src="@/assets/images/projects/agentapp/icon-frame-deco.svg" alt="">
                <figcaption>24 px+ · Display fill</figcaption>
              </figure>
            </div>

            <!-- Library samples grouped by size + mode -->
            <div class="icon-categories">
              <div v-for="cat in iconCategories" :key="cat.name" class="ic-cat">
                <div class="ic-cat-head">
                  <span class="ic-cat-name">{{ cat.name }}</span>
                  <span class="ic-cat-meta">{{ cat.meta }}</span>
                </div>
                <div :class="['ic-cat-grid', `tone-${cat.tone}`]">
                  <div v-for="ic in cat.icons" :key="ic.name" class="ic-tile" :title="ic.name">
                    <img :src="ic.src" :alt="ic.name">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Components — button, textfield, form -->
        <div class="system-row ag-reveal">
          <div class="system-heading">
            <div class="kicker">04</div>
            <h3>Components</h3>
            <p class="ag-body">The component library transforms our "simple interaction" concept principle into structural reality. Every element is deliberately styled to enforce information hierarchy—amplifying core touchpoints through the brand gradient while softening secondary controls to reduce cognitive load for agents in the field.
              <br/><br/>To ensure seamless execution, all components feature strictly documented states (default, active, disabled, error). Form inputs are unified to surface inline range hints and validation copy within the exact same footprint, delivering real-time feedback and preventing post-submission frustration.
            </p>
          </div>

          <div class="spec-card components-spec">
            <img class="components-img" :src="require('@/assets/images/projects/agentapp/components.svg')" alt="Components — buttons, textfields, form controls">
          </div>
        </div>

        <!-- Cards -->
        <div class="system-row ag-reveal">
          <div class="system-heading">
            <div class="kicker">05</div>
            <h3>Cards</h3>
            <p class="ag-body">Modular scalability is the core engine of this design system. By combining structured card blueprints with predefined typography and color tokens, we created a versatile component matrix. This allows the interface to easily scale and adapt to complex insurance logic and diverse content requirements while maintaining absolute brand consistency.
            </p>
          </div>
          <div class="spec-card cards-spec">
            <img class="cards-img" :src="require('@/assets/images/projects/agentapp/cards.svg')" alt="Cards — default, highlight, alternative">
          </div>
        </div>

        <!-- Illustrations -->
        <div class="system-row ag-reveal">
          <div class="system-heading">
            <div class="kicker">06</div>
            <h3>Illustrations</h3>
            <p class="ag-body">Illustrations serve as the emotional anchor of our design concept, projecting an optimistic, success-driven brand voice through flat geometry and the core blue-gradient palette. For instance, rather than showing a dull, grayscale empty state when tasks are cleared, the homepage deploys a celebratory "finish" flag illustration—actively rewarding the agent’s hard work and reinforcing positive momentum.
              <br/><br/>Conversely, error, alert, and empty states are meticulously calibrated to deliver clarity without causing visual fatigue. By layering muted gray baselines with subtle, color-coded accent elements, the system communicates critical system status effectively. This prevents large blocks of alarming color from overwhelming the user, turning stressful errors into calm, manageable moments.
            </p>
          </div>
          <div class="spec-card illust-spec">
            <img class="illust-img" :src="require('@/assets/images/projects/agentapp/illustration.svg')" alt="Illustration set — empty states, success moments, onboarding, quiet prompts">
          </div>
        </div>
      </div>
    </section>

    <!-- ============== Ending — closing visual card ============== -->
    <section class="ag-section ag-ending">
      <div class="ag-wrap">
        <figure class="ending-card ag-reveal">
          <img
            :src="require('@/assets/images/projects/agentapp/ending@1x.jpg')"
            :srcset="`${require('@/assets/images/projects/agentapp/ending@1x.jpg')} 1x, ${require('@/assets/images/projects/agentapp/ending@2x.jpg')} 2x, ${require('@/assets/images/projects/agentapp/ending@3x.jpg')} 3x`"
            alt="AG App — closing visual"
          >
        </figure>
        <p>* All screens in this case study have been recreated to safeguard client privacy.</p>
      </div>
    </section>

    </div>

    <ContactSection :small="true" bg="#0B1D3F" />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import { pageMeta } from '@/utils/pageMeta'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'WorksAgentApp',
  components: { ContactSection },
  data() {
    return {
      pillars: [
        {
          nm: 'Their voice, our pen',
          lines: [
            "Agents joined the process as users, telling us what was broken, voting on what to fix first. They also act as a domain-knowledge expert, guiding us through the complexity of their daily work.",
          ],
        },
        {
          nm: 'Designed for their day',
          lines: [
            "Anchor every flow to where agents actually work — between meetings, in cars, one-handed in a café — not to the desk-time most of them simply don't have.",
          ],
        },
        {
          nm: 'Wins they can feel',
          lines: [
            'Ship small, visible improvements ahead of big invisible ones. Agents experience progress in their own routine instead of waiting through it — and trust returns the same way.',
          ],
        },
      ],
      painPoints: [
        'Long travel between locations',
        'Too many nested clicks',
        'Repetitive logins',
        'Hard-to-read interface',
        'Notifications lack policy context',
        'Information is hard to find',
        'Want faster login',
        'Reply to enquiries on the go',
        'Want push notifications',
        'On-the-spot quoting with clients',
        'Quick client info lookup',
        'Direct navigation to clients',
      ],
      visionGoals: [
        {
          n: '01',
          title: '<em>Boost productivity</em>, <br />make the time count.',
          sub: 'Replace fragmented systems with one mobile workspace, so every minute on the road is meaningful work.',
        },
        {
          n: '02',
          title: '<em>Earn client trust</em> <br /> through visible professionalism.',
          sub: 'Help agents look composed and prepared in front of clients, opening up cross-sell opportunities.',
        },
        {
          n: '03',
          title: '<em>Capture the moment</em>, <br />shorten the cycle.',
          sub: 'Compress the sales process. Get from first touch to closed deal faster — without losing nuance.',
        },
      ],
      researchCols: [
        {
          n: '14', unit: 'stakeholders',
          h: 'Stakeholder interviews',
          p: 'Across product, compliance, and regional teams — each lens revealing different constraints.',
        },
        {
          n: '8', unit: 'agents · 3 wks',
          h: 'Shadowing & depth',
          p: 'Direct observation in real selling contexts. Where the workarounds — spreadsheets, screenshots, WhatsApp — surfaced.',
        },
        {
          n: '20+', unit: 'agents',
          h: 'Co-design workshop',
          p: 'Hands-on co-creation. Agents mapped routines, prototyped layouts, prioritised pain points themselves.',
        },
        {
          n: '600+', unit: 'agents',
          h: 'Live concept vote',
          p: 'A large-scale online conference where two homepage concepts were presented and put to a live agent vote.',
        },
      ],
      coreInsights: [
        { num: '01', label: 'Customer-grouped work' },
        { num: '02', label: 'Mobile-first workspace' },
        { num: '03', label: 'Visibility builds trust' },
      ],
      brandPillars: [
        { nm: 'Your partner to success', tag: '', p: "A visual language inspired by pursuit and progress, designed to support agents every step of the way." },
        { nm: 'Fast & instant',          tag: '', p: 'Every key action is designed to resolve in seconds, making speed the core value of the mobile experience.' },
        { nm: 'Simple interaction',      tag: '', p: 'Designed for one-handed, in-the-moment use, with no nested menus, unnecessary decoration, or reliance on training.' },
      ],
      modules: [
        {
          anchor: 'm01',
          label: 'Homepage · Grouping complex tasks by clients',
          intent: 'Group tasks by <em>who needs serving</em>, not by what kind of task it is.',
          rationale: 'Shadowing revealed that productivity drops when agents are forced to think in siloed task types. Their real workflow centres on the customer: every manual workaround they built—spreadsheets, screenshots, chat threads—was an effort to cluster information back around the client they were about to see. <br /><br />The homepage mirrors this mental model by grouping tasks by client, acting as a strategic assistant for planning daily visits and calls. The interface reflects the way agents already naturally think—only made much faster.',
          quote: {
            text: "I'm about to call Mr Lee — what's outstanding for him?",
            source: 'Agent · shadowing session',
          },
          visionGoal: { n: '01', title: 'Boost productivity, make the time count' },
          image: 'home',
          imageAlt: 'Homepage grouped by customer with urgent flags',
          swap: false,
        },
        {
          anchor: 'm02',
          label: 'Inquiry · Real-time inquiry handling',
          intent: 'Bring the inquiry <em>to the agent</em>',
          rationale: 'Resolving inquiries used to be a painful desktop ritual—requiring multi-factor portal logins, digging through client profiles, and tedious cross-device file transfers. Because agents spend 90% of their time on the move, this clunky workflow inevitably turned urgent client responses into dreaded after-hours office work. We broke this desk-bound bottleneck by bringing the entire inquiry ecosystem to mobile. Now, push notifications serve as the direct entry surface, carrying enough instant context for agents to triage, review, and act on critical alerts the moment they land.<br /><br />The core design value shifts from passive tracking to instant resolution in the field. By embedding versatile response tools—including direct-camera photo capture and seamless file uploads—agents can resolve urgent compliance and policy matters right in front of the client. This feature exemplifies how we transformed the product from a generic task manager into a tailored, high-performance mobile office built for the realities of the field.',
          quote: {
            text: 'I need my phone to actively push me the inquiry, and let me handle it online, anywhere.',
            source: 'Agent · depth interview',
          },
          visionGoal:  { n: '02', title: 'Earn client trust through visible professionalism.' },
          image: 'inquiry',
          imageAlt: 'Push notification then in-app inquiry reply screen',
          swap: true,
        },
        {
          anchor: 'm03',
          label: 'Notifications · Notification handling',
          intent: 'Make notifications the <em>front door</em>, not the doorbell.',
          rationale: "Head-office communications used to get lost in a bloated desktop portal, leaving agents stranded with 999+ unread alerts. We transformed this passive inbox into a mobile-first hub, using distinct visual archetypes for instant triage at a glance. To support high-mobility, one-handed use on the go, we introduced intuitive swipe gestures so agents can effortlessly pin or dismiss notifications while moving between appointments.<br /><br />The core value lies in turning these sterile alerts into active business drivers. We embedded contextual `Next Steps`—like instant client messaging and policy deep-links—to turn passive data into immediate client touchpoints. Finally, robust batch-management tools eliminate the dreaded 999+ clutter, ensuring high-priority updates remain visible and manageable.",
          quote: {
            text: "I never want a critical alert to fall off my radar just because I was driving when it landed.",
            source: 'Agent · co-design workshop',
          },
          visionGoal: { n: '01', title: 'Boost productivity, make the time count' },
          image: 'notification',
          imageAlt: 'In-app notification list with three archetypes and swipe actions',
          swap: false,
        },
      ],
      quoteSteps: [
        {
          label: 'Quotes hub',
          caption: 'Provide frictionless entry points to accelerate the primary quoting paths while surfacing recent and saved assets for instant retrieval.',
        },
        {
          label: 'Capture the insured',
          caption: 'Maximize data-entry speed for core pricing drivers while translating a complex, regulator-defined taxonomy into an instantly scannable layout.',
        },
        {
          label: 'Pick the cover',
          caption: 'Bridge the gap between internal industry codes and consumer-facing clarity, creating a transparent, shared viewing experience for both agent and client.',
        },
        {
          label: 'Edit the cover',
          caption: 'Reduce cognitive load through logical, pre-filled system defaults while providing real-time pricing visibility as the coverage is customized.',
        },
        {
          label: 'Tune the riders',
          caption: 'Prevent user errors before they happen by embedding legal and validation boundaries directly into the active typing flow.',
        },
        {
          label: 'Cover Summary',
          caption: 'Clear the noise to focus entirely on the closing momentum, anchoring the final premium prominently to drive immediate conversion or saving.',
        },
      ],
      colorGroups: [
        {
          title: 'Foreground · Text & icon',
          cells: [
            { n: 'fg / default',     hex: '#131A34' },
            { n: 'fg / medium',      hex: '#535C7D' },
            { n: 'fg / low',         hex: '#7C889F' },
            { n: 'fg / high · int',  hex: '#3565B6' },
            { n: 'fg / danger',      hex: '#DB3D31' },
            { n: 'fg / warning',     hex: '#96703D' },
            { n: 'fg / success',     hex: '#5AAC8F' },
            { n: 'fg / inverted',    hex: '#FFFFFF' },
          ],
        },
        {
          title: 'Background · Surfaces',
          cells: [
            { n: 'bg / default',     hex: '#F5F7FA' },
            { n: 'bg / medium',      hex: '#FFFFFF' },
            { n: 'bg / high',        hex: '#F4FAFF' },
            { n: 'bg / int-medium',  grad: 'linear-gradient(to top right,#FFFFFF,#AFE0FE)', n2: '#FFF → #AFE0FE' },
            { n: 'bg / int-high',    grad: 'linear-gradient(to bottom right,#3565B6,#5FC2FC)', n2: '#3565B6 → #5FC2FC' },
            { n: 'bg / inverted',    hex: '#131A34' },
            { n: 'bg / modal',       hex: 'rgba(19,26,52,.65)' },
            { n: 'border / default', hex: '#D9E7FE' },
          ],
        },
        {
          title: 'Status · Reserved for state, not decoration',
          cells: [
            { n: 'danger',   hex: '#FFECEB', txt: '#DB3D31' },
            { n: 'warning',  hex: '#F6EFE4', txt: '#96703D' },
            { n: 'success',  hex: '#E3FAF1', txt: '#5AAC8F' },
            { n: 'notice',   hex: '#D9E7FE', txt: '#3565B6' },
            { n: 'canceled', hex: '#DAE1EA', txt: '#535C7D' },
          ],
        },
      ],
      shadowTokens: [
        { n: 'shadow / card',         s: '0 0 15px rgba(53,101,182,.10)' },
        { n: 'shadow / mini-action',  s: '0 0 6px rgba(53,101,182,.05)' },
        { n: 'shadow / input-active', s: '0 4px 12px rgba(95,194,252,.15)' },
        { n: 'shadow / button',       s: '0 4px 20px rgba(95,194,252,.50)' },
        { n: 'shadow / nav',          s: '0 4px 15px rgba(19,26,52,.05)' },
        { n: 'shadow / nav-inverted', s: '0 -4px 15px rgba(19,26,52,.05)' },
      ],
      agentsCount: 0,
      countStarted: false,
      io: null,
      outcomeIo: null,
      problemExpanded: false,
      navStuckVisible: false,
    }
  },
  computed: {
    // Iconography library — sample sets pulled from
    // src/assets/images/projects/agentapp/icon/* for the design-system showcase.
    iconCategories() {
      const ic20    = (n) => require(`@/assets/images/projects/agentapp/icon/20px/${n}.svg`)
      const ic24    = (n) => require(`@/assets/images/projects/agentapp/icon/24px/${n}.svg`)
      const icTitle = (n) => require(`@/assets/images/projects/agentapp/icon/Chromatic/Title/${n}.svg`)
      const icQuot  = (n) => require(`@/assets/images/projects/agentapp/icon/Chromatic/Tab/Quotation/${n}.svg`)
      const icReq   = (n) => require(`@/assets/images/projects/agentapp/icon/Chromatic/Tab/Request/${n}.svg`)
      return [
        {
          name: '20 px · Monochrome line',
          meta: 'Inline with text · 2 px stroke',
          tone: 'plain',
          icons: ['Alert','Attachment','Calendar','Camera','Copy','Currency','Customer','Edit','Link','MessageRead','Online','Paper','Phone','Pinned','Proposal','Reply']
            .map(n => ({ name: n, src: ic20(n) })),
        },
        {
          name: '24 px · Interactable',
          meta: 'Action buttons in toolbars and rows',
          tone: 'plain',
          icons: ['Bill','Filter','Hide','Import','Print','Search','Share','Show']
            .map(n => ({ name: n, src: ic24(n) })),
        },
        {
          name: '24 px · Display',
          meta: 'Decorative emphasis on title cards — gradient fills, deep-blue line accents',
          tone: 'colorful',
          icons: [
            { name: 'Claim', src: icTitle('Claim') },
            { name: 'Investment', src: icTitle('Investment') },
            { name: 'Quotation', src: icQuot('Default') },
            { name: 'Request', src: icReq('Default') },
          ],
        },
      ]
    },
    // Split pain-points evenly across the two marquee rows.
    painRow1() {
      const half = Math.ceil(this.painPoints.length / 2)
      return this.painPoints.slice(0, half)
    },
    painRow2() {
      const half = Math.ceil(this.painPoints.length / 2)
      return this.painPoints.slice(half)
    },
  },
  mounted() {
    useMeta(pageMeta({
      title: "AG App | Han Wang | Product Designer | UX Researcher",
      description: "Lead UI Designer on the agent mobile workspace for 30,000+ field agents at Taiwan's largest insurance corporation — research-driven redesign with a token-driven design system, shipped at AJA Creative.",
      path: '/work/agentapp',
    }))
    this.setupReveal()
    this.setupOutcomeCount()
    window.addEventListener('scroll', this.onPageScroll, { passive: true })
    this.onPageScroll()
    this.$nextTick(() => {
      document.dispatchEvent(new Event('render-event'))
    })
  },
  beforeUnmount() {
    if (this.io) this.io.disconnect()
    if (this.outcomeIo) this.outcomeIo.disconnect()
    window.removeEventListener('scroll', this.onPageScroll)
  },
  methods: {
    setupReveal() {
      const els = this.$el.querySelectorAll('.ag-reveal, .ag-reveal-scale')
      this.io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            this.io.unobserve(e.target)
          }
        })
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 })
      els.forEach(el => this.io.observe(el))
    },
    setupOutcomeCount() {
      this.outcomeIo = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting && !this.countStarted) {
            this.countStarted = true
            this.runCountUp(600, 1600)
            this.outcomeIo.disconnect()
          }
        })
      }, { threshold: 0.4 })
      if (this.$refs.outcomeSec) this.outcomeIo.observe(this.$refs.outcomeSec)
    },
    runCountUp(target, duration) {
      let t0 = null
      const tick = (t) => {
        if (!t0) t0 = t
        const p = Math.min((t - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 4)
        this.agentsCount = Math.round(target * eased)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    },
    // Single scroll handler — drives both the problem-card expansion
    // and the slide-in stuck nav so we only register one listener.
    onPageScroll() {
      this.checkProblemExpand()
      this.checkNavStuck()
    },
    // Show the slide-in stuck nav once the user has scrolled past the
    // initial top nav (which is ~80 px tall). Hide again at the top.
    checkNavStuck() {
      this.navStuckVisible = window.scrollY > 80
    },
    checkProblemExpand() {
      // Two-way: card morphs to section bg when the user scrolls past the
      // "How might we" statement, and morphs back when they scroll above it.
      // Trigger when the *centre* of the card crosses the viewport midline.
      const el = this.$refs.problemStatement
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cardMid = rect.top + rect.height / 2
      this.problemExpanded = cardMid < window.innerHeight / 2
    },
  },
}
</script>

<style lang="scss">
@import './index.scss';
</style>
