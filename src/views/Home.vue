<template>
    <div class="home">
        <div class="container small">
            <div class="landing">
                <div class="mobile-video-container">
                    <video class="video" :style="`transform: scale(${videoScale});`" src="@/assets/images/home/landing-video.mp4" autoplay muted loop playsinline></video>
                    <img class="slogan-mobile" src="@/assets/images/home/headline.svg" />
                </div>
                <img class="slogan" src="@/assets/images/home/headline.svg" />
                <h4>
                    Product Designer | UX Researcher<br />
                    <p class="tag">Based in <span>Melbourne, VIC 3000</span></p>
                </h4>
                <button @click="anchor('contact-section', 80)" class="highlight">
                    GET IN TOUCH
                </button>
                <img @click="anchor('works-section')" src="@/assets/images/global/deco-arrow-more.svg" alt="" class="indicator">
            </div>
            <div id="works-section" class="works">
                <div class="list">
                    <div id="works-section-title" class="left col-4">
                        <h2 class="works-title">From Ideation <br>to Creation.</h2>
                        <p>Since 2018, I’ve contributed to <span class="prompt">20+ projects</span>—designing and developing over 15 products from concept to launch.</p>
                        <button class="primary" @click="to('/work')">VIEW ALL</button>
                        <img @click="anchor('exp-section')" src="@/assets/images/global/deco-arrow-more.svg" alt="" class="indicator">
                    </div>
                    <div class="right col-8" :style="`margin-top: ${headlineHeight}px;`">
                        <a class="work col-7" target="_blank" href="/work/authux">
                            <div :style="renderCoverImage('auth')" alt="" class="cover"></div>
                            <h5 class="title">Improving authenticated student experience</h5>
                            <p class="client bold">University of Melbourne</p>
                        </a>
                        <a class="work col-7 mid" target="_blank" href="/work/agentapp">
                            <div :style="renderCoverImage('agentapp')" alt="" class="cover"></div>
                            <h5 class="title">Agent mobile workspace for 30,000+ insurance agents</h5>
                            <p class="client bold">Taiwan's largest insurance company</p>
                        </a>
                        <a class="work col-7 right" target="_blank" href="/work/tiago">
                            <div :style="renderCoverImage('tiago')" alt="" class="cover"></div>
                            <h5 class="title">Improve User experience in TIAGo Teleoperation</h5>
                            <p class="client bold">TIAGo</p>
                        </a>
                        <a class="work col-7 mid" target="_blank" href="/work/stickerhd">
                            <div :style="renderCoverImage('stickerhd')" alt="" class="cover"></div>
                            <h5 class="title">E-commerce website redesign</h5>
                            <p class="client bold">StickerHD.com</p>
                        </a>
                    </div>
                </div>
            </div>
            <div id="exp-section" class="exp">
                <h2 class="adv-title">Experience</h2>
                <div class="exp-block large">
                    <img src="@/assets/images/global/clients/unimelb.svg" alt="" class="logo">
                    <div class="description">
                        <h3 class="job-title">Experience Design Analyst</h3>
                        <p class="org">University of Melbourne, Enterprise Service Group · Full-time</p>
                        <p>
                            <span class="prompt design">Lead research and design across the student platform (students.unimelb), bridging user needs, business goals, and technical constraints.</span> My work spans discovery research, information architecture, and product strategy, <span class="prompt design">from running user interviews and card sorting to aligning stakeholders across teams and prioritising with frameworks like KANO and RICE.</span> One of my recent project unified a fragmented authenticated experience serving 50,000+ students, translating competing stakeholder needs into both near-term improvements and a long-term service blueprint.
                        </p>
                        <p class="project-link">
                            <a href="/work/authux">Project: Student Authenticated Experience Improvement →</a>
                        </p>
                    </div>
                    <div class="date">
                        <p>Jan 2025 — present</p>
                    </div>
                </div>
                <div class="exp-block">
                    <img src="@/assets/images/global/clients/unimelb.svg" alt="" class="logo">
                    <div class="description">
                        <h3 class="job-title">Student Co-Designer</h3>
                        <p class="org">University of Melbourne, Enterprise Service Group · Intern</p>
                        <p>
                            Translated student insights into a comprehensive end-to-end journey using <span class="prompt design">TheyDo</span>, creating a centralised repository for broader organisational use. Planned and facilitated <span class="prompt design">13 in-depth student interviews</span> to uncover portal pain points — findings directly informed the <span class="prompt design">2025 Auth UX strategic direction</span>. Received outstanding feedback, resulting in a return offer as a full-time designer.
                        </p>
                    </div>
                    <div class="date">
                        <p>Mar 2024 — Dec 2024</p>
                    </div>
                </div>
                <div class="exp-block">
                    <img src="@/assets/images/global/clients/aja.png" alt="" class="logo">
                    <div class="description">
                        <h3 class="job-title">UI Designer</h3>
                        <p class="org">AJA Creative · Full-time</p>
                        <p>
                            Collaborated across five design projects spanning major banks, a leading insurance company, and an AI startup. Led UI design for <span class="prompt design">Nanshan Life Insurance’s agent app</span> as the sole designer — informed by user shadowing and co-creation workshops. Contributed to <span class="prompt design">CTBC Bank’s SME banking app</span> and delivered <span class="prompt design">InfuseAI’s official website</span> end-to-end in Webflow.
                        </p>
                    </div>
                    <div class="date">
                        <p>Jan 2021 — Nov 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <ContactSection id="contact-section" :small="true" />
    </div>
</template>

<script>
// @ is an alias to /src
import ContactSection from '@/components/ContactSection.vue'
import { useMeta } from 'vue-meta'
import { pageMeta } from '@/utils/pageMeta'

export default {
    name: 'HomeView',
    data(){
        return{
            headlineHeight: 0,
            videoScale: 1
        }
    },
    components:{
        ContactSection,
    },
    mounted(){
        this.headlineHeight = document.getElementsByClassName('works-title')[0].clientHeight + 32
        useMeta(pageMeta({
            title: 'Han Wang | Product Designer | UX Researcher',
            description: "I'm a designer with 4 years' experience across UX research, product design, and front-end engineering, working across domains from education and technology to regulated industries like finance. I transform complex challenges into strategic, user-centred solutions. Combining expertise in design, front-end development, and AI-assisted workflows, I bridge the gap between design vision and technical implementation to deliver impactful digital experiences.",
            path: '/',
        }))
    },
    created(){
        window.addEventListener("scroll", this.handleScroll)
    },
    methods: {
        handleScroll(){
            // for landing video
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            let offset = vh
            let adjustOffset = Math.max(Math.min(window.scrollY, offset), 0)
            this.videoScale = 1 + (adjustOffset / offset * 0.15)

            // for work section title
            let anchorWork = document.getElementById('works-section-title').offsetTop - (vh * 0.7) + 64
            if(window.scrollY > anchorWork){
                document.getElementById('works-section-title').parentElement.classList.add('show')
            }else{
                document.getElementById('works-section-title').parentElement.classList.remove('show')
            }

            // for adventure
            let anchorExp = document.getElementById('exp-section').offsetTop - (vh * 0.7) + 64
            if(window.scrollY > anchorExp){
                document.getElementById('exp-section').classList.add('show')
            }else{
                document.getElementById('exp-section').classList.remove('show')
            }
        },
        to(url){
            this.$router.push({
                path: url
            })
        },
        anchor(to, offset = 0){
            window.scrollTo({
                top: document.getElementById(to).offsetTop - 112 + offset,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>
