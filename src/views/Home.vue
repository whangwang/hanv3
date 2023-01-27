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
                    UI/UX Designer & <br class="new-line-for-pad">Front-end Developer<br> 
                    based in <span>Melbourne</span>
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
                        <p>Starting in 2020, I participated in <span class="prompt">15+ projects</span> with my design and development skills and built 10 products from 0 to 1.</p>
                        <button class="primary" @click="to('/work')">VIEW ALL</button>
                        <img @click="anchor('exp-section')" src="@/assets/images/global/deco-arrow-more.svg" alt="" class="indicator">
                    </div>
                    <div class="right col-8" :style="`margin-top: ${headlineHeight}px;`">
                        <a class="work col-7" target="_blank" href="/work/clip">
                            <div :style="renderCoverImage('clip')" alt="" class="cover"></div>
                            <h5 class="title">Digital License APP baseㄎ on Blockchain</h5>
                            <p class="client bold">Snowbridge Inc.</p>
                        </a>
                        <a class="work col-7 right" target="_blank" href="/work/coc">
                            <div :style="renderCoverImage('coc')" alt="" class="cover"></div>
                            <h5 class="title">NCCU CoC Ph.D. Program Official Website</h5>
                            <p class="client bold">National Chengchi University</p>
                        </a>
                        <a class="work col-7 mid" target="_blank" href="/work/cloudmatrix">
                            <div :style="renderCoverImage('cloudmatrix')" alt="" class="cover"></div>
                            <h5 class="title">The official website for face recognization system</h5>
                            <p class="client bold">Gigabyte(Cloudmatrix)</p>
                        </a>
                    </div>
                </div>
            </div>
            <div id="exp-section" class="exp">
                <h2 class="adv-title">My Adventure</h2>
                <div class="exp-block">
                    <img src="@/assets/images/global/clients/aja.png" alt="" class="logo">
                    <div class="description">
                        <h3 class="job-title">UI Designer</h3>
                        <p>
                            Cooperate with colleagues in <span class="prompt design">five</span> different design projects, including several big <span class="prompt design">banks</span>, one of the largest <span class="prompt design">insurance companies</span> in Taiwan, and a <span class="prompt design">startup company</span> focusing on machine learning.
                        </p>
                    </div>
                    <div class="date">
                        <p>Jan 2021  -  Dec 2022</p>
                    </div>
                </div>
                <div class="exp-block">
                    <img src="@/assets/images/global/clients/NCCU.png" alt="" class="logo">
                    <div class="description">
                        <h3 class="job-title">Research Assistant <span>with Porf. Kung Chen</span></h3>
                        <p>
                            Working in <span class="prompt join">Emerging Technologies and Application Lab</span>, focusing on Implementing several Blockchain-based services with the governments in Taiwan.
                        </p>
                    </div>
                    <div class="date">
                        <p>Jul 2019  -  May 2020</p>
                    </div>
                </div>
                <div class="exp-block">
                    <img src="@/assets/images/global/clients/gigabyte.png" alt="" class="logo">
                    <div class="description">
                        <h3 class="job-title">Front-end Developer Intern</h3>
                        <p>
                            Responsible for the product’s official website for a face recognition system. Start with designing the interface and user flow in <span class="prompt design">Figma</span>, and built it with <span class="prompt dev">Vue.js</span>, finished this mission by <span class="prompt join">myself only</span>.
                        </p>
                    </div>
                    <div class="date">
                        <p >Dec 2019  -  Feb 2020</p>
                    </div>
                </div>
                <div class="exp-block">
                    <img src="@/assets/images/global/clients/feversocial.png" alt="" class="logo">
                    <div class="description">
                        <h3 class="job-title">Front-end Developer Intern</h3>
                        <p>
                            Developed several new features and solved issues for a single page CMS platform using <span class="prompt dev">ReactJS</span>, and built an automation software testing flow using <span class="prompt dev">Jenkins</span> and <span class="prompt dev">Docker</span>.
                        </p>
                    </div>
                    <div class="date">
                        <p>Jul 2018  -  Dec 2018</p>
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
