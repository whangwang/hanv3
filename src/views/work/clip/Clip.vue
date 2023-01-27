<template>
    <div class="work-clip-view">
        <nav>
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
        <div class="container small work-clip-container font change-color">
            <div class="landing">
                <div class="bg"></div>
                <img src="@/assets/images/projects/clip/app-icon@1x.png" :srcset="renderImage('projects/clip/app-icon.png')" class="app-icon" />
                <h1>Credential management<br> in one click</h1>
                <p>
                    With snowbridge, we created a blockchain-based credential service that not only fulfills various scenarios but also matches the traditional user experience, allowing everyone to enjoy the future of credentials.
                </p>
                <div class="screenshots">
                    <img src="@/assets/images/projects/clip/screenshot-1.svg" alt="" class="screen1 large">
                    <img src="@/assets/images/projects/clip/screenshot-2.svg" alt="" class="screen2">
                    <img src="@/assets/images/projects/clip/screenshot-3.svg" alt="" class="screen3">
                    <img src="@/assets/images/projects/clip/screenshot-4.svg" alt="" class="screen4 large">
                </div>
            </div>
            <div class="goal change-color">
                <h2>Project Goal</h2>
                <div class="goal-container">
                    <div class="feature">
                        <img src="@/assets/images/projects/clip/redesign-flow.svg" class="illustration" />
                        <h2>Redesign Flow</h2>
                    </div>
                    <div class="feature">
                        <img src="@/assets/images/projects/clip/create-unique.svg" class="illustration" />
                        <h2>Create Unique</h2>
                    </div>
                    <div class="feature">
                        <img src="@/assets/images/projects/clip/design-handoff.svg" class="illustration" />
                        <h2>Design Handoff</h2>
                    </div>
                </div>
            </div>
            <div class="change-color redesign-flow">
                <div class="left">
                    <p class="sub">Redesign Flow</p>
                    <h2>access Credential <br>easier & quicker</h2>
                    <p class="description">Through tones of reference studied, I modified the user flow, making the experience more like a payment app like apply pay, in which users can easily view/use the card they already store in it, and add new cards quickly.</p>
                </div>
                <div class="right">
                    <img src="@/assets/images/projects/clip/IA.svg" alt="" class="arch">
                </div>
            </div>
            <div class="create-unique">
                <div class="bg"></div>
                <div class="change-color  intro">
                    <div class="left">
                        <p class="sub">Create Unique</p>
                        <h2>Add eye-catching detail <br>through visual design</h2>
                        <p class="description">From ideation and moodboarding to visual guidelines, we use various methods to put delicate detail into the product, and let the interface be more unique and exquisite.</p>
                    </div>
                    <div class="right"></div>
                </div>
                <div class="change-color group">
                    <div class="left">
                        <h3>Color palette</h3>
                        <p class="description">Inspired by aurora, we choose this set of color to represent the young and progressive spirit of this product, and also the country where Snowbridge Inc. come from - Sweden.</p>
                    </div>
                    <div class="right color-palette">
                        <img src="@/assets/images/projects/clip/color.svg" alt="">
                        <img src="@/assets/images/projects/clip/aurora.jpg" alt="" class="aurora">
                    </div>
                </div>
                <div class="change-color group">
                    <div class="left">
                        <h3>Typography</h3>
                        <p class="description">In choosing typography, we worked toward the goal to emphasize the “Hi-Tech” impression.<br>
                        Using <span>Syncopate</span> as a headline will surely be a strong hint to the user since it has wide body width and a unique appearance.<br>
                        But when we talk about display information, a font like Syncopate won’t be a good idea, so that’s why we choose <span>Red Hat Display</span> and <span>Red Hat Text</span> for the title and paragraph, matching with our headline but also letting users feel comfortable reading the text in our app.</p>
                    </div>
                    <div class="right typography">
                        <div class="block">
                            <div class="title">
                                <h5>Headline</h5>
                                <h5>Syncopate</h5>
                            </div>
                            <div class="preview">
                                <h2>Credential management in one click</h2>
                            </div>
                        </div>
                        <div class="block">
                            <div class="title">
                                <h5>Title</h5>
                                <h5>Red Hat Display</h5>
                            </div>
                            <div class="preview">
                                <h3>Employee ID card</h3>
                            </div>
                        </div>
                        <div class="block">
                            <div class="title">
                                <h5>Paragraph</h5>
                                <h5>Red Hat Text</h5>
                            </div>
                            <div class="preview">
                                <p>This may cause by your network issue, or our server error. Please check your network or try later.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="change-color group">
                    <div class="left">
                        <h3>Pattern and Symbol</h3>
                        <p class="description">Pattern and symbol is always the key to creating a unique style. Just like our color palette, we use gradient and shadow to present the flow of the light, while also making the “Hi-Tech” vibe more complete and vivid.
                        <br>We also take this style to the background and illustration, aiming to create a consistent experience.</p>
                    </div>
                    <div class="right pattern">
                        <div class="credential-wrapper">
                            <div class="credential">
                                <div class="meta">
                                    <span>
                                        <img src="@/assets/images/projects/clip/snowbridge.png" alt="">
                                        Snowbridge Inc.
                                    </span>
                                    <p>Sep 4, 2022</p>
                                </div>
                                <h5>Employee ID card</h5>
                                <p class="id">A12345678</p>
                            </div>
                        </div>
                        <div class="wrapper">
                            <img src="@/assets/images/projects/clip/tab.svg" alt="" class="tab">
                            <button class="clip">Back to List</button>
                        </div>
                        <img src="@/assets/images/projects/clip/icons.svg" alt="" class="icons">
                        <img src="@/assets/images/projects/clip/screenshot-5.svg" alt="" class="screenshot">
                        <img src="@/assets/images/projects/clip/screenshot-6.svg" alt="" class="screenshot">
                    </div>
                </div>
            </div>
        </div>
        <div class="design-handoff font">
            <div class="intro container small">
                <p class="sub">Design Handoff</p>
                <h2>Making Developing<br>accurate & effortless</h2>
                <p class="description">A pretty interface is not enough for a good design, we need to let the developer know how to build it. So with my client, we use Figma to define the user flow\, including error state, blank state ...etc, and Zeplin helps our developer download all the resources they need, and review the space & alignment in the design, make sure the real app will be 1:1 to the draft.</p>
            </div>
            <div class="video-bg">
                <video src="@/assets/images/projects/clip/zeplin.mp4" autoplay muted loop></video>
            </div>
        </div>
        <div class="hero font">
            <div class="bg" :style="renderBackgroundImage('projects/clip/hero.png')">
                <div class="placholder"></div>
            </div>
            <h2 class="container small">Digital license APP based on Blockchain</h2>
        </div>
        <ContactSection :small="true" />
    </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import { useMeta } from 'vue-meta'

export default{
    name: 'WorkClipView',
    components:{
        ContactSection,
    },
    created(){
        window.addEventListener("scroll", this.handleScroll)
    },
    methods:{
        handleScroll(){
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            var anchor = document.getElementsByClassName('create-unique')[0].offsetTop - (vh * 0.7) + 64
            if(window.scrollY > anchor){
                console.log('light')
                document.body.classList.add('inverted')
            }else{
                console.log('dark')
                document.body.classList.remove('inverted')
            }
        }
    },
    mounted(){
        useMeta({
            title: 'Clip',
        })
    }
}
</script>

<style lang="scss">
    @import './index.scss';
</style>

