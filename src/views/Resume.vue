<template>
    <div class="resume-view">
        <div class="container small main-container">
            <div class="col-3 left">
                <div class="cover-container">
                    <img src="@/assets/images/resume/cover@1x.jpg" :srcset="renderImage('resume/cover.jpg')" class="cover" />
                </div>
                <p>
                    Experience Designer with 4+ years delivering end-to-end UX for large-scale institutional digital platforms. Currently designing student-facing digital experiences at the University of Melbourne, serving 50,000+ students across user research, service blueprints, and design system work.
                    <br />I combine deep user research with hands-on front-end fluency — bridging user needs, technical constraints, and business outcomes without handoff friction.
                </p>
                <p v-if="false">Start at 2020, I participated <span class="prompt">15+ projects</span> with my design or develop skill, built 10 products from 0 to 1.</p>
            </div>
            <div class="col-9 right">
                <h2>Skills</h2>
                <div class="skills-chart">
                    <div class="skill-col">
                        <h6 class="title">Research &amp; Strategy</h6>
                        <h5 class="content">Research Planning</h5>
                        <h5 class="content">Desktop Research</h5>
                        <h5 class="content">Stakeholder Management</h5>
                        <h5 class="content">Kano Studies</h5>
                        <h5 class="content">Semi-Structured Interviews</h5>
                        <h5 class="content">Workshops</h5>
                        <h5 class="content">Covert Observation</h5>
                        <h5 class="content">Strategic Design</h5>
                        <h5 class="content">RICE Analysis</h5>
                    </div>
                    <div class="skill-col">
                        <h6 class="title">Design</h6>
                        <h5 class="content">UX Design</h5>
                        <h5 class="content">UI Design</h5>
                        <h5 class="content">Prototyping</h5>
                        <h5 class="content">Usability Testing</h5>
                        <h5 class="content">End-to-End Product Development</h5>
                        <h5 class="content">Design Handoff</h5>
                        <h5 class="content">Design Proposal</h5>
                    </div>
                    <div class="skill-col">
                        <h6 class="title">Software &amp; Design Engineering</h6>
                        <h5 class="content">Figma (Variables, Tokens, MCP)</h5>
                        <h5 class="content">Zeplin</h5>
                        <h5 class="content">Next.js</h5>
                        <h5 class="content">React</h5>
                        <h5 class="content">Tailwind CSS</h5>
                        <h5 class="content">Redux</h5>
                        <h5 class="content">API Contract Documentation</h5>
                        <h5 class="content">GenAI-assisted Prototyping</h5>
                    </div>
                    <div class="skill-col">
                        <h6 class="title">Project Experience</h6>
                        <h5 class="content">Institutional Websites</h5>
                        <h5 class="content">Student Portals</h5>
                        <h5 class="content">Fintech / Crypto Apps</h5>
                        <h5 class="content">Insurance Platforms</h5>
                        <h5 class="content">E-commerce</h5>
                        <h5 class="content">Blockchain Apps</h5>
                    </div>
                </div>
                <h2 class="exp-title">Experience</h2>
                <div class="exp-subtitle">
                    <h4><span class="design">4+ years’</span> in design career</h4>
                    <h4><span class="design">20+ clients</span> across diverse platforms</h4>
                </div>
                <div class="exp-chart">
                    <div class="exp-block">
                        <p class="date">Jan 2025  —  present</p>
                        <img src="@/assets/images/global/clients/unimelb.png" alt="" class="logo">
                        <h4 class="title">Experience Design Analyst</h4>
                        <p class="org">Enterprise Service Group · Full-time</p>
                        <p class="description">
                            <span class="prompt design">Student Website Transformation:</span> Solo project lead for the first three months — managed project planning, desktop research, research design, and all stakeholder communication before the Design Lead joined. Facilitated stakeholder discussions to define a research plan for redesigning help content and support-seeking experiences. Conducted desktop research, competitor analysis, current-state reviews, and interviews to inform institutional channel strategy decisions.<br /><br />
                            <span class="prompt design">Authenticated Experience (Student Digital Portal):</span> Ran research synthesis and solution design for the unification of the University's authenticated student platform — serving domestic, international, undergraduate, and postgraduate segments across the full student lifecycle. Applied a hypothesis-led approach validated through <span class="prompt design">13 in-depth interviews</span> and <span class="prompt design">249 Kano survey responses</span>, then used <span class="prompt design">RICE</span> to prioritise <span class="prompt design">25 Vision Stories</span> into a multi-horizon roadmap that directly informed the University's <span class="prompt design">2026 capital funding decision</span>.<br /><br />
                            <span class="prompt design">Quantifiable Impact:</span> Short-term uplift delivered a <span class="prompt design">+289% increase in banner click-through rate (8,522 → 33,169 YoY)</span>, improved mobile engagement to <span class="prompt design">60.77% (+13.4% YoY)</span>, and generated <span class="prompt design">~60,000 clicks</span> on the new personalised onboarding shortcut during peak enrolment.
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Mar 2024  —  Dec 2024</p>
                        <img src="@/assets/images/global/clients/unimelb.png" alt="" class="logo">
                        <h4 class="title">Student Co-Designer</h4>
                        <p class="org">Enterprise Service Group · Intern</p>
                        <p class="description">
                            Translated student insights into a comprehensive end-to-end journey using <span class="prompt design">TheyDo</span>, mapping insights across each stage to create a centralised repository for broader organisational use. Planned and facilitated <span class="prompt design">13 in-depth student interviews</span> to uncover pain points in the student portal experience, alongside supporting survey design and workshop facilitation. Interview findings directly informed the <span class="prompt design">2025 Auth UX strategic direction</span>. Received outstanding feedback from stakeholders, resulting in a return offer as a full-time designer.
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Feb 2023  —  Dec 2024</p>
                        <h4 class="title">University of Melbourne</h4>
                        <p class="description">
                            Master of Information Technology (Human-Computer Interaction)<br />
                            <span class="prompt design">Awarded the 2023 Dean’s Honours List</span> · WAM 78.5 (H2A)<br />
                            <span class="prompt design">1st Place, CISSA UI/UX Design Hackathon 2023</span> (AvianLens)
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Jan 2021  —  Nov 2022</p>
                        <img src="@/assets/images/global/clients/aja.png" alt="" class="logo">
                        <h4 class="title">UI Designer</h4>
                        <p class="org">AJA Creative · Full-time</p>
                        <p class="description">
                            Collaborated across five design projects spanning major banks, a leading insurance company, and an AI startup.<br /><br />
                            <span class="prompt design">Nanshan Life Insurance (Agent App):</span> Led UI design as the sole designer — developing visual proposals, design systems, and interface solutions informed by user shadowing and co-creation workshops.<br /><br />
                            <span class="prompt design">CTBC Bank (SME Banking App):</span> Redesigned homepage visual direction and contributed to scalable UI delivery aligned with design guidelines.<br /><br />
                            <span class="prompt design">InfuseAI Website:</span> Conducted audience research, delivered end-to-end website design, and built the production site in Webflow with handover documentation.
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Sep 2018  —  present</p>
                        <h4 class="title">Freelancer</h4>
                        <p class="description">
                            Delivered UI/UX design, front-end development, and design consulting for <span class="prompt design">20+ clients</span> across e-commerce (StickerHD), fintech, blockchain (CLIP/Snowbridge), AI/ML (Nubila.ai), and institutional websites. The freelance track is where I've maintained hands-on technical fluency in the <span class="prompt design">Next.js / React / Tailwind CSS</span> ecosystem.
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Sep 2015  —  Jun 2019</p>
                        <h4 class="title">National Chengchi University</h4>
                        <p class="description">
                            Bachelor of Science in Computer Science
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <ContactSection :small="true" />
    </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import { useMeta } from 'vue-meta'

export default{
    name: 'ResumeView',
    components:{
        ContactSection,
    },
    mounted(){
        useMeta({
            title: 'Resume',
        })
    },
    methods: {
        downloadResume(role){
            var link = document.createElement('a')
            document.body.appendChild(link)
            link.download = `Han_Wang_${role}_Resume_2025.pdf`
            link.href = `Han_Wang_${role}_Resume_2025.pdf`
            link.click()
            document.body.removeChild(link)
        },
    }
}
</script>