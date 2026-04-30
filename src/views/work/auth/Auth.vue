<template>
  <div class="work-auth-view">
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

    <div class="work-auth-container font">

      <!-- Hero -->
      <section class="landing">
        <div class="container small">
          <span class="kicker">Strategic Service Design · 2025</span>
          <h1>From fragmented systems<br>to a strategic blueprint.</h1>
          <p class="lede">
            Reimagining the authenticated student experience for a leading higher-education
            institution — moving the conversation from "what should it look like" to
            "what should we build, and why."
          </p>
          <div class="hero-tags">
            <span class="hero-tag">Strategic Design</span>
            <span class="hero-tag">UX Research</span>
            <span class="hero-tag">UX Design</span>
            <span class="hero-tag">Stakeholder Management</span>
            <span class="hero-tag">AI-powered Workflow</span>
          </div>
          <div class="meta">
            <div class="meta-item">
              <h6>My Role</h6>
              <p>Sole full-time Experience Designer, partnered with one Design Lead and a part-time intern.</p>
            </div>
            <div class="meta-item">
              <h6>Context</h6>
              <p>During my time as an Experience Design Analyst on the in-house service design team, I led the discovery and concept design of this strategic initiative — partnering with engineering, operations, and student-services leaders across the year.</p>
            </div>
            <div class="meta-item">
              <h6>Outcome</h6>
              <p>A solution-requirements blueprint and phased roadmap that secured executive endorsement and informed capital-funding allocation.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- HMW / Opportunity statement -->
      <section class="hmw">
        <div class="container small">
          <div class="hmw-grid">
            <div class="hmw-text">
              <span class="section-label">Opportunity Statement</span>
              <h2 class="hmw-q">
                How might we improve the
                <em>authenticated experience</em>
                for current students?
              </h2>
              <p class="hmw-sub">
                Three pain points kept surfacing across every research session — and together,
                they framed the central question we set out to answer.
              </p>
              <div class="pain-points">
                <div class="pain-point">
                  <span class="pain-num">01</span>
                  <div class="pain-body">
                    <h5>Disconnected Systems</h5>
                    <p>Students must navigate multiple platforms for basic information, often starting outside the institution altogether via web search.</p>
                  </div>
                </div>
                <div class="pain-point">
                  <span class="pain-num">02</span>
                  <div class="pain-body">
                    <h5>Constant Re-authentication</h5>
                    <p>Persistently needing to log in between systems was the highest-priority pain point students surfaced, fragmenting otherwise simple tasks.</p>
                  </div>
                </div>
                <div class="pain-point">
                  <span class="pain-num">03</span>
                  <div class="pain-body">
                    <h5>Opaque Support Processes</h5>
                    <p>Students lose confidence chasing service requests through systems that don't reveal status — leading to unnecessary support calls and erosion of trust.</p>
                  </div>
                </div>
              </div>
            </div>
            <figure class="hmw-figure">
              <img :src="require('@/assets/images/projects/auth/journey.jpg')" alt="Conceptual illustration of a student moving from a fragmented digital experience toward a unified, intelligent one." />
              <figcaption>
                Our Vision: from disconnected systems, repeated authentication, and
                opaque support — toward a unified digital home, seamless action, and proactive
                intelligence.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- Methodology: Double Diamond, expanded -->
      <section class="methodology">
        <div class="container small">
          <span class="section-label">Methodology</span>
          <h2>A Double Diamond, in four deliberate moves.</h2>
          <p class="intro">
            The biggest risk in a strategic project is jumping to solutions before you understand
            the problem. The Double Diamond's enforced separation between
            <em>problem framing</em> and <em>solution framing</em> gave us — and our
            stakeholders — a shared map of where we were in the work, and what kind of
            decisions could be made at each point. Each phase was anchored by a question, an
            objective, a defined set of activities, and the outcomes we held it accountable for.
          </p>

          <div class="phase-grid">
            <!-- Discover -->
            <article class="phase-card discover">
              <header class="phase-card-head">
                <div class="phase-meta">
                  <span class="phase-num">01</span>
                  <img src="@/assets/images/projects/auth/dd-1.svg" alt="">
                </div>
                <h3>Discover</h3>
              </header>
              <div class="phase-question">
                <span class="q-label">Guiding Question</span>
                <p>What problems are we solving with a student admin portal?</p>
              </div>
              <div class="phase-objective">
                <span class="block-label">Objective</span>
                <p>Build a clear understanding of the current landscape, user needs, and opportunities.</p>
              </div>
              <div class="phase-cols">
                <div class="phase-col">
                  <span class="block-label">Activities</span>
                  <ul>
                    <li>Heuristic review of the existing authenticated ecosystem</li>
                    <li>Comparative analysis against peer institutions</li>
                    <li>Discovery interviews and shadowing with students</li>
                    <li>Stakeholder context-setting workshops</li>
                  </ul>
                </div>
                <div class="phase-col">
                  <span class="block-label">Outcomes</span>
                  <ul>
                    <li>Identified key pain points across the student admin journey</li>
                    <li>Mapped user behaviours, contexts, and peer offerings</li>
                    <li>Surfaced quick wins achievable on the current technology stack</li>
                    <li>Gap analysis against peer-institution implementations</li>
                    <li>Catalogued emerging tech enabling personalisation and automation</li>
                  </ul>
                </div>
              </div>
            </article>

            <!-- Define -->
            <article class="phase-card define">
              <header class="phase-card-head">
                <div class="phase-meta">
                  <span class="phase-num">02</span>
                  <img src="@/assets/images/projects/auth/dd-2.svg" alt="">
                </div>
                <h3>Define</h3>
              </header>
              <div class="phase-question">
                <span class="q-label">Guiding Question</span>
                <p>How might we solve student problems with a digital self-service portal?</p>
              </div>
              <div class="phase-objective">
                <span class="block-label">Objective</span>
                <p>Explore potential solutions to student problems through digital self-service.</p>
              </div>
              <div class="phase-cols">
                <div class="phase-col">
                  <span class="block-label">Activities</span>
                  <ul>
                    <li>Translated insights into structured design hypotheses</li>
                    <li>Tested desirability of future-state product features with students</li>
                    <li>Pressure-tested feasibility of initiative themes with workstream leads</li>
                  </ul>
                </div>
                <div class="phase-col">
                  <span class="block-label">Outcomes</span>
                  <ul>
                    <li>Comprehensive list of opportunities organised as conceptual themes</li>
                    <li>Shortlisted high-potential themes refined through student feedback</li>
                    <li>A strategic future-state vision combining new and in-flight improvements</li>
                    <li>Product features defined to support each shortlisted theme</li>
                  </ul>
                </div>
              </div>
            </article>

            <!-- Ideate -->
            <article class="phase-card ideate">
              <header class="phase-card-head">
                <div class="phase-meta">
                  <span class="phase-num">03</span>
                  <img src="@/assets/images/projects/auth/dd-3.svg" alt="">
                </div>
                <h3>Ideate</h3>
              </header>
              <div class="phase-question">
                <span class="q-label">Guiding Question</span>
                <p>How might we practically deliver digital service improvements with a portal?</p>
              </div>
              <div class="phase-objective">
                <span class="block-label">Objective</span>
                <p>Design conceptual solutions aligned with the program's strategic goals.</p>
              </div>
              <div class="phase-cols">
                <div class="phase-col">
                  <span class="block-label">Activities</span>
                  <ul>
                    <li>Designed target-state product features per theme</li>
                    <li>Assessment workshops with students, operations, and engineering</li>
                  </ul>
                </div>
                <div class="phase-col">
                  <span class="block-label">Outcomes</span>
                  <ul>
                    <li>Conceptual designs for each feature, sized to enable meaningful estimation</li>
                    <li>Feasibility and viability estimates produced collaboratively with stakeholders</li>
                    <li>Cross-workstream alignment on operationalisation, case management, and support per theme</li>
                  </ul>
                </div>
              </div>
            </article>

            <!-- Deliver -->
            <article class="phase-card deliver">
              <header class="phase-card-head">
                <div class="phase-meta">
                  <span class="phase-num">04</span>
                  <img src="@/assets/images/projects/auth/dd-4.svg" alt="">
                </div>
                <h3>Deliver</h3>
              </header>
              <div class="phase-question">
                <span class="q-label">Guiding Question</span>
                <p>How might we prioritise the highest-impact, lowest-cost opportunities?</p>
              </div>
              <div class="phase-objective">
                <span class="block-label">Objective</span>
                <p>Prioritise next actions for design and prepare for implementation.</p>
              </div>
              <div class="phase-cols">
                <div class="phase-col">
                  <span class="block-label">Activities</span>
                  <ul>
                    <li>Concept design and prototype build aligned to the phased roadmap</li>
                    <li>Review and refinement of solution requirements and roadmap documentation</li>
                  </ul>
                </div>
                <div class="phase-col">
                  <span class="block-label">Outcomes</span>
                  <ul>
                    <li>Clear focus on high-impact, low-cost opportunities</li>
                    <li>A collaboratively defined, phased solution implementation roadmap and concept design set</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div class="phase-outcome">
            <img class="outcome-bg" src="@/assets/images/projects/auth/dark-mon.jpg" alt="Illustration of the final solution blueprint, showing a phased roadmap and the strategic goals it serves." />
            <span class="outcome-tag">Final Outcome</span>
            <p>
              A phased implementation roadmap that balances tactical quick wins with longer-term
              strategic goals — guiding decision-makers in establishing an enhanced, unified
              student experience aligned to institutional priorities and the technical roadmap.
            </p>
          </div>
        </div>
      </section>

      <!-- Research grounding — vertical timeline, ordered by project sequence -->
      <section class="research">
        <div class="container small">
          <span class="section-label">Activities</span>
          <h2>A research arc, not a research dump —<br>each method earning the next one's right to exist.</h2>
          <p class="intro">
            We weren't trying to collect the most data — we were trying to build a chain of
            evidence stakeholders could not dismiss. The methods unfolded in deliberate
            sequence across the project's four phases, with each one answering a question
            the previous couldn't.
          </p>

          <div class="research-timeline">
            <!-- In-depth Interviews — foundational starting method -->
            <article class="timeline-item discover">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-tag discover">Discover</span>
                <h4>In-Depth Interviews</h4>
                <p class="timeline-scale">13 sessions</p>
                <p class="timeline-why">
                  Every other method on this list earned its question from this one. Before
                  frameworks, before scoring models, before stakeholders weighed in — we
                  needed to hear from students themselves. Numbers describe scale; an
                  interview describes meaning.
                </p>
                <h6>WHAT WE DID</h6>
                <p class="timeline-what">
                  Semi-structured sessions surfaced the lived friction behind the metrics
                  and revealed the distinct mental models students brought to the ecosystem.
                  Those mental models became the structural backbone for everything we
                  recommended next.
                </p>
              </div>
              <div class="timeline-image">
                <img src="@/assets/images/projects/auth/interview.jpg" alt="Photo of a research participant during a remote interview session." />
              </div>
            </article>

            <!-- Comparative Analysis -->
            <article class="timeline-item discover">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-tag discover">Discover</span>
                <h4>Comparative Analysis</h4>
                <p class="timeline-why">
                  Before designing anything new, we needed to know what students might
                  already expect from a digital experience — and where the bar sat across
                  comparable institutions and adjacent enterprise products.
                </p>
                <h6>What we did</h6>
                <p class="timeline-what">
                  Mapped feature inventories, navigation models, and personalisation
                  approaches across peer institutional portals. Surfaced what was
                  table-stakes, what was emerging best-practice, and where genuine
                  differentiation could live.
                </p>
              </div>
              <div class="timeline-image">
                <img src="@/assets/images/projects/auth/competitor-analysis.jpg" alt="Comparison of different institutional portal designs." />
              </div>
            </article>

            <!-- Heuristic Review -->
            <article class="timeline-item discover">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-tag discover">Discover</span>
                <h4>Heuristic Review</h4>
                <p class="timeline-scale">150+ pages audited</p>
                <p class="timeline-why">
                  Before proposing what to build, we needed a defensible baseline of what
                  was failing — and at what scale. Cost-effective: no recruitment, no
                  scheduling, just structured analytical work.
                </p>
                <h6>What we did</h6>
                <p class="timeline-what">
                  Audited the existing pages within our ecosystem against established
                  usability heuristics and best practices. Surfaced recurring patterns rather than isolated
                  bugs — producing an inventory of design debt we could prioritise against.
                </p>
              </div>
              <div class="timeline-image">
                <img src="@/assets/images/projects/auth/review.jpg" alt="Illustration of the heuristic review process." />
              </div>
            </article>

            <!-- Design Hypothesis Brainstorming — synthesis bridge into Define -->
            <article class="timeline-item define">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-tag define">Define</span>
                <h4>Design Hypothesis Brainstorming</h4>
                <p class="timeline-why">
                  Insights stay descriptive until you commit to a hypothesis. Without this
                  step, research findings become a comfortable explanation for inaction.
                  Hypothesis brainstorming forced the team to put each insight on the line
                  as a testable bet — before falling in love with it.
                </p>
                <h6>What we did</h6>
                <p class="timeline-what">
                  Synthesis sessions translated raw signals from Discover into structured
                  hypotheses. Each one became a candidate solution
                  that the downstream methods — Kano survey, co-design workshops, feasibility
                  reviews — could validate or kill on evidence rather than opinion.
                </p>
              </div>
              <div class="timeline-image">
                <img src="@/assets/images/projects/auth/hypothesis.jpg" alt="Photo of a whiteboard filled with design hypotheses." />
              </div>
            </article>

            <!-- Kano Survey -->
            <article class="timeline-item define">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-tag define">Define</span>
                <h4>Kano Survey</h4>
                <p class="timeline-scale">249 survey responses</p>
                <p class="timeline-why">
                  Feature requests are infinite; budgets aren't. The Kano model gave us a
                  quantitative lens on something traditionally driven by loudest-voice
                  prioritisation.
                </p>
                <h6>What we did</h6>
                <p class="timeline-what">
                  Each candidate feature was classified as a <em>Must-Be</em>, a
                  <em>Performance Feature</em>, or a <em>Attractive</em>. The framework gave
                  us a calm, defensible answer when stakeholders pushed for personal
                  favourites ahead of basic needs.
                </p>
              </div>
              <div class="timeline-image">
                <img src="@/assets/images/projects/auth/kano.jpg" alt="Illustration of the Kano result, showing how features are classified into basic needs, performance features, and delighters." />
              </div>
            </article>

            <!-- Co-design Workshops -->
            <article class="timeline-item ideate">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-tag ideate">Ideate</span>
                <h4>Co-design Workshops</h4>
                <p class="timeline-scale">50+ participants</p>
                <p class="timeline-why">
                  Interviews surface user truth. Workshops surface stakeholder ownership.
                  We needed our recommendations to survive governance — and people defend
                  what they helped build.
                </p>
                <h6>What we did</h6>
                <p class="timeline-what">
                  Brought stakeholders, business operations, and service owners into the same
                  room to test future-state themes. The eventual direction wasn't a
                  recommendation we delivered — it was a position they had helped form.
                </p>
              </div>
              <div class="timeline-image">
                <img src="@/assets/images/projects/auth/co-design.jpg" alt="Photo of a co-design workshop session." />
              </div>
            </article>

            <!-- Feasibility Assessment — closing checkpoint before roadmap -->
            <article class="timeline-item deliver">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-tag deliver">Deliver</span>
                <h4>Feasibility Assessment</h4>
                <p class="timeline-scale">6 technology sessions + 6 business sessions</p>
                <p class="timeline-why">
                  Hopes don't fund roadmaps; cost estimates do. Without stress-testing each
                  high-impact vision story against real engineering effort and operational
                  viability, the prioritisation would have been theatre. This was the gate
                  between "ideas we like" and "stories we can ship."
                </p>
                <h6>What we did</h6>
                <p class="timeline-what">
                  Two parallel tracks. Six workshops with the technology team estimated
                  implementation effort against legacy systems, integrations, and platform
                  constraints. Six conversations with business owners validated operational
                  viability — governance load, support implications, and training cost. The
                  two views collapsed into the <em>Effort</em> input that downstream RICE
                  prioritisation depended on.
                </p>
              </div>
              <div class="timeline-image">
                <img src="@/assets/images/projects/auth/assessment.jpg" alt="Photo of a feasibility assessment session with engineering stakeholders." />
              </div>
            </article>
          </div>

          <p class="footnote">
            Findings, quotes, and segment-specific insights are intentionally omitted from
            this case study to respect institutional confidentiality. The methodology is the
            transferable part.
          </p>
        </div>
      </section>

      <!-- Prioritisation: How we adopted RICE -->
      <section class="prioritise">
        <div class="container small">
          <span class="section-label">Synthesis &amp; Prioritisation</span>
          <h2>How we adopted RICE — turning <em>276 research insights</em> into one comparable score per feature.</h2>
          <p class="intro">
            Synthesis is where strategy lives. We didn't use RICE as a calculator — we used
            it as the synthesis spine. Every research signal we collected, from interviews to
            feasibility workshops, fed into a single shared model that produced one priority
            score per candidate feature.
          </p>

          <!-- 4-step process flow -->
          <div class="rice-process">
            <div class="rice-step">
              <span class="step-num">01</span>
              <h5>Collect</h5>
              <p><strong>276 insights</strong> documented across every research activity — interviews, audits, surveys, workshops, feasibility sessions.</p>
            </div>
            <div class="rice-step">
              <span class="step-num">02</span>
              <h5>Categorise</h5>
              <p>Each insight tagged to the RICE dimension it spoke to. Tech feedback fed <em>Effort</em>; student pain fed <em>Impact</em>; peer benchmarks fed <em>Confidence</em>.</p>
            </div>
            <div class="rice-step">
              <span class="step-num">03</span>
              <h5>Score</h5>
              <p>Within its dimension, each insight got a <strong>1–5 weight</strong> reflecting severity, scale, confidence, or build cost — depending on the bucket.</p>
            </div>
            <div class="rice-step">
              <span class="step-num">04</span>
              <h5>Aggregate &amp; Score</h5>
              <p>Per candidate feature, contributing insight scores are aggregated statistically into <strong>R, I, C, and E</strong> values — then collapsed through the RICE formula into a single comparable priority score.</p>
            </div>
          </div>

          <!-- Source-to-RICE mapping (regular section, R/I/C/E vertical list) -->
          <div class="rice-source">
            <h3>Where each research stream landed in the model.</h3>
            <div class="rice-list">
              <div class="rice-row reach">
                <span class="rice-letter">R</span>
                <div class="rice-content">
                  <h5>Reach</h5>
                  <p class="rice-def">Who is actually affected.</p>
                  <ul>
                    <li>Student interview cohort breadth</li>
                    <li>Kano survey demographics</li>
                  </ul>
                </div>
              </div>
              <div class="rice-row impact">
                <span class="rice-letter">I</span>
                <div class="rice-content">
                  <h5>Impact</h5>
                  <p class="rice-def">How much value if delivered.</p>
                  <ul>
                    <li>Kano classification (basic / performance / delighter)</li>
                    <li>Severity of student pain points</li>
                    <li>Co-design priority signals</li>
                  </ul>
                </div>
              </div>
              <div class="rice-row confidence">
                <span class="rice-letter">C</span>
                <div class="rice-content">
                  <h5>Confidence</h5>
                  <p class="rice-def">How strong is the evidence.</p>
                  <ul>
                    <li>Heuristic review (150+ pages audited)</li>
                    <li>Comparative analysis (peer benchmarks)</li>
                    <li>Cross-method validation</li>
                  </ul>
                </div>
              </div>
              <div class="rice-row effort">
                <span class="rice-letter">E</span>
                <div class="rice-content">
                  <h5>Effort</h5>
                  <p class="rice-def">What's the realistic cost.</p>
                  <ul>
                    <li>Technology feasibility (6 sessions)</li>
                    <li>Business viability (6 sessions)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p class="closer">
            The output wasn't just "25 vision stories." It was 25 stories that were both
            <strong>wanted by students and realistically deliverable inside the institutional
            roadmap</strong>. That's what made the deliverable fundable — not just persuasive.
          </p>
        </div>
      </section>

      <!-- AI workflow -->
      <section class="ai-flow">
        <div class="container small">
          <span class="section-label ai">AI-Powered Workflow</span>
          <h2>From requirements document to a living, navigable prototype<br>— in days, not months.</h2>
          <p class="intro">
            The biggest unlock of the project was treating AI not as a generator of pretty
            screens, but as a way to <strong>compress the distance between writing a requirement
            and feeling what it would be like to use it</strong>. Stakeholders no longer needed
            imagination — they could click.
          </p>
          <div class="ai-steps">
            <div class="ai-step">
              <div class="step-head">
                <span class="step-num">01</span>
                <h3>Solution Requirements as the Source of Truth</h3>
              </div>
              <p>
                Each vision story was authored as a structured user story with acceptance
                criteria, dependencies, and the underlying research insight. This document
                wasn't an attachment — it was the <em>contract</em> the rest of the workflow
                read from.
              </p>
              <div class="ai-step-images">
                 <div class="ai-img-slot">
                    <img src="@/assets/images/projects/auth/requirement-file.jpg" alt="Screenshot of a user story with acceptance criteria and research insight annotations." />
                 </div>
              </div>
              </div>
              <div class="connector">
                <img src="@/assets/images/projects/auth/arrow-down.svg" alt="Illustration of a connector, showing how the user story document feeds into the prototype." />
              </div>
            <div class="ai-step">
              <div class="step-head">
                <span class="step-num">02</span>
                <h3>Generative + Vibe-Coded Functional Prototype</h3>
              </div>
              <p>
                We used GenAI tooling and vibe-coding workflows to translate those user stories
                directly into a working web prototype — not a Figma click-through, but real
                HTML you could navigate, tab through, and stress-test on mobile. Two parallel
                prototypes shipped: an <strong>MVP</strong> view, and a
                <strong>Target / Future State</strong> vision.
              </p>
              <div class="ai-step-images">
                 <div class="ai-img-slot">
                    <img src="@/assets/images/projects/auth/proto-mvp.jpg" alt="Screenshot of the MVP prototype." />
                 </div>
                 <div class="ai-img-slot">
                    <img src="@/assets/images/projects/auth/proto-future.jpg" alt="Screenshot of the future state prototype." />
                 </div>
              </div>
            </div>
            <div class="connector">
              <img src="@/assets/images/projects/auth/arrow-down.svg" alt="Illustration of a connector, showing how the prototype feeds into the documentation site." />
            </div>
            <div class="ai-step">
              <div class="step-head">
                <span class="step-num">03</span>
                <h3>A Documentation Site That Holds the Whole Story</h3>
              </div>
              <p>
                The final layer was a public-facing documentation site that wove research
                insights, RICE scores, journey steps, and the live prototypes into one
                browsable artefact. Decision-makers could move from a roadmap phase to a user
                story to a working screen in two clicks. <strong>Alignment stopped being a
                meeting; it became a hyperlink.</strong>
              </p>
              <div class="ai-step-images">
                 <div class="ai-img-slot">
                    <img src="@/assets/images/projects/auth/doc-1.jpg" alt="Screenshot of the documentation site." />
                 </div>
                 <div class="ai-img-slot">
                    <img src="@/assets/images/projects/auth/doc-2.jpg" alt="Screenshot of the documentation site." />
                 </div>
              </div>
            </div>
            <div class="connector large">
              <img src="@/assets/images/projects/auth/arrow-down.svg" alt="Illustration of a connector, showing how the prototype feeds into the documentation site." />
            </div>
          </div>
          <div class="ai-callout">
            <span class="callout-tag">Why It Mattered</span>
            <h3>
              An interactive artefact removed the most expensive friction in enterprise
              design — <em>re-explaining the same idea to a new audience.</em>
            </h3>
            <p>
              The prototype and documentation site were directly cited in the materials
              that secured next-year capital funding for implementation.
            </p>
          </div>
        </div>
      </section>

      <!-- Roadmap -->
      <section class="roadmap">
        <div class="container small">
          <img class="moun-bg" src="@/assets/images/projects/auth/moun-bg.jpg" alt="The initiative's phased roadmap, showing how the MVP, Target State, and Future State features map to short-, mid-, and long-term horizons." />
          <div class="roadmap-content">
            <span class="section-label">Strategic Roadmap</span>
          <h2>A roadmap is a decision-making artefact,<br>not a delivery plan.</h2>
          <p class="intro">
            The most strategic deliverable of the project was a phased roadmap framing the
            short-, mid-, and long-term ambition of the institution's authenticated experience.
            It gave leadership a way to talk about technology investment, governance, and future
            capability in the same shape — which is what allowed the conversation to escalate
            from a design project to a capital-funded program.
          </p>
          <p class="closer">
            The point wasn't to predict the future accurately. It was to give the institution a
            <strong>shared horizon</strong> against which every near-term decision could be
            evaluated.
          </p>
          <div class="phases">
            <div class="phase mvp">
              <div class="phase-head">
                <span class="badge">Short-term</span>
                <h4>Foundational Hub</h4>
              </div>
              <p>
                Unify visibility of priority information. Reduce friction without rewriting
                legacy systems. Earn trust through what is shipped, not what is promised.
              </p>
              <span class="phase-frame">Pragmatic, low-risk, high-signal.</span>
            </div>
            <div class="phase target">
              <div class="phase-head">
                <span class="badge">Mid-term</span>
                <h4>Seamless &amp; Actionable</h4>
              </div>
              <p>
                Move from viewing to doing. Bi-directional integrations let students complete
                priority tasks without context-switching across systems.
              </p>
              <span class="phase-frame">Capability investment with measurable lift.</span>
            </div>
            <div class="phase future">
              <div class="phase-head">
                <span class="badge">Long-term</span>
                <h4>Proactive Intelligence</h4>
              </div>
              <p>
                A learning system that anticipates needs, recommends pathways, and surfaces
                eligibility — informing not just product, but future technology selection.
              </p>
              <span class="phase-frame">Direction-setting for the next decade of investment.</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      <!-- Prototype placeholder -->
      <section class="prototype">
        <div class="container small">
          <span class="section-label">Concept Design</span>
          <h2>A glimpse, not the focus.</h2>
          <p class="intro">
            Two interactive prototypes — MVP and Target/Future — were generated and refined
            through the AI-augmented workflow above. They are intentionally treated lightly
            here; the contribution worth showing is the methodology that produced them, not
            the screens themselves.
          </p>
          <div class="prototype-grid">
            <div class="proto-card mvp">
              <span class="proto-tag">MVP</span>
              <div class="proto-frame">
                <div class="frame-bar">
                  <span></span><span></span><span></span>
                </div>
                <div class="frame-body">
                  <img src="@/assets/images/projects/auth/proto-mvp.jpg" alt="Screenshot of the MVP prototype." />
                </div>
              </div>
              <p class="proto-caption">Foundational hub — view here, do there.</p>
            </div>
            <div class="proto-card future">
              <span class="proto-tag">Target / Future</span>
              <div class="proto-frame">
                <div class="frame-bar">
                  <span></span><span></span><span></span>
                </div>
                <div class="frame-body">
                  <img src="@/assets/images/projects/auth/proto-future.jpg" alt="Screenshot of the future state prototype." />
                </div>
              </div>
              <p class="proto-caption">Seamless, actionable, and proactively intelligent.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Design thinking (pivot story + intent-definition POV) -->
      <section class="reflection">
        <div class="container small">

          <header class="reflection-header">
            <span class="section-label">Design Thinking</span>
            <h2>What this project taught me about<br>where designers <em>add value</em>.</h2>
          </header>

          <div class="reflection-grid">
            <div class="reflection-col">
              <h3 class="r-subhead">The pivot — from mocks to blueprints.</h3>
              <p>
                When I joined the project, the natural instinct was to deliver a polished
                frontend redesign. Early conversations with engineering and operations made
                clear that legacy CMS constraints and entrenched workflows would push back
                hard against any pixel-led approach. Delivering a Figma file would have
                produced a beautiful artefact that no one could build.
              </p>
              <p>
                So we changed the deliverable. Instead of mocks, we shipped
                <strong>blueprints, user stories, and annotated recommendations</strong> —
                the kind of artefacts that drive decisions in large organisations. The shift
                in output was the shift that unlocked the project.
              </p>
              <blockquote>
                In large institutions, defining <em>what</em> to build often has more
                impact than specifying <em>how</em> it looks.
              </blockquote>
            </div>

            <div class="reflection-col">
              <h3 class="r-subhead">Intent definition is the new design craft.</h3>
              <p>
                As AI continues to lower the cost of producing screens, the designer's
                centre of gravity shifts. Visual execution becomes table stakes. The
                differentiator is the upstream work: framing the right problem, structuring
                the right evidence, and earning the alignment that lets a recommendation
                actually become a built thing.
              </p>
              <p>
                The most valuable thing I produced over the year wasn't a screen. It was a
                set of artefacts — the user stories, the prioritised roadmap, the
                AI-generated prototype, the documentation site — that <strong>told the
                institution what was worth building, and gave them confidence to fund
                it</strong>.
              </p>
              <p>
                Designing in large organisations is less about crafting the perfect
                interface, and more about building the conditions under which the right
                interface can be built. That, increasingly, is the work.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Ending — the strategic value proposition embodies "definition over execution" -->
      <section class="ending">
        <div class="container small">
          <blockquote class="ending-quote">
            A unified digital home: the definitive, primary digital student entry-point
            and gateway, providing access to unified, priority, and personalised
            actionable information.
          </blockquote>
          <span class="ending-label">Authenticated Experience strategic value proposition</span>
        </div>
      </section>

    </div>
    <ContactSection :small="true" bg="#000F46" />
  </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import { useMeta } from 'vue-meta'
import { pageMeta, projectCover } from '@/utils/pageMeta'

export default {
  name: 'WorkAuthView',
  components: {
    ContactSection,
  },
  mounted() {
    useMeta(pageMeta({
      title: 'Authenticated Student Experience — Strategic Service Design',
      description: 'A year-long strategic design initiative reimagining the authenticated student experience for a leading higher-education institution. Discovery, RICE prioritisation, AI-powered prototyping, and a phased roadmap that secured executive endorsement.',
      path: '/work/authux',
      image: projectCover('auth'),
      type: 'article',
    }))
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
