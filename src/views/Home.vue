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
                    Designer, Researcher, Developer<br />
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
                        <a class="work col-7" target="_blank" href="/#/work/stickerhd">
                            <div :style="renderCoverImage('stickerhd')" alt="" class="cover"></div>
                            <h5 class="title">E-commerce website redesign</h5>
                            <p class="client bold">StickerHD.com</p>
                        </a>
                        <a class="work col-7 mid" target="_blank" href="/#/work/tiago">
                            <div :style="renderCoverImage('tiago')" alt="" class="cover"></div>
                            <h5 class="title">Improve User experience in TIAGo Teleoperation</h5>
                            <p class="client bold">TIAGo</p>
                        </a>
                        <a class="work col-7 right" target="_blank" href="/#/work/avianlens">
                            <div :style="renderCoverImage('avianlens')" alt="" class="cover"></div>
                            <h5 class="title">A hackathon-winning birdwatching companion APP</h5>
                            <p class="client bold">CISSA</p>
                        </a>
                        <a class="work col-7 mid" target="_blank" href="/#/work/nubila">
                            <div :style="renderCoverImage('nubila')" alt="" class="cover"></div>
                            <h5 class="title">Designing the future of weather detection based on blockchain</h5>
                            <p class="client bold">Nubila Inc.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div id="exp-section" class="exp">
                <h2 class="adv-title">Experience</h2>
                <div class="exp-block">
                    <img src="@/assets/images/global/clients/unimelb.png" alt="" class="logo">
                    <div class="description">
                        <h3 class="job-title">Experience Design Analyst</h3>
                        <p class="org">University of Melbourne, Enterprise Service Group · Full-time</p>
                        <p>
                            Solo project lead for the first three months before the Design Lead joined. Applied a hypothesis-led approach validated through <span class="prompt design">13 in-depth interviews</span> and <span class="prompt design">249 Kano survey responses</span>, then used <span class="prompt design">RICE</span> to prioritise <span class="prompt design">25 Vision Stories</span> into a roadmap that directly informed the University's <span class="prompt design">2026 capital funding decision</span>. Short-term uplift delivered a <span class="prompt design">+289% banner click-through increase (8,522 → 33,169 YoY)</span>, mobile engagement of <span class="prompt design">60.77% (+13.4% YoY)</span>, and <span class="prompt design">~60,000 onboarding clicks</span> during peak enrolment.
                        </p>
                    </div>
                    <div class="date">
                        <p>Jan 2025 — present</p>
                    </div>
                </div>
                <div class="exp-block">
                    <img src="@/assets/images/global/clients/unimelb.png" alt="" class="logo">
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
        useMeta({
            title: '',
        })
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
