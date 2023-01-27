<template>
    <div class="work-coc-view">
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
        <div class="container small work-coc-container">
            <div class="landing">
                <h2>NCCU CoC Ph.D. Program Official Website</h2>
                <div class="cover" :style="renderBackgroundImage('projects/coc/landing.jpeg')"></div>
                <p class="intro">
                    The Ph.D. program of the College of Communication at National Chengchi University hopes to separate its website from the College and make it its official website.<br><br>
                    So I first went through a meeting to confirm their requirements, reviewed the original architecture and functions under the official website, re-planned a new information architecture, then made a new visual design proposal, and finally completed the development.
                </p>
                <div class="meta">
                    <h5>Platform</h5>
                    <p>Website</p>
                    <h5>Responsibility</h5>
                    <p>UI/UX Design, Front-end Development</p>
                    <h5>Tools</h5>
                    <p>Figma, HTML/CSS/jQuery</p>
                    <h5>Link</h5>
                    <p><a href="https://ccphd.nccu.edu.tw" target="_blank">https://ccphd.nccu.edu.tw</a></p>
                </div>
            </div>
            <div class="content">
                <img src="@/assets/images/projects/coc/screenshot-1.jpeg" alt="" class="screenshot">
                <img src="@/assets/images/projects/coc/screenshot-2.jpeg" alt="" class="screenshot">
                <img src="@/assets/images/projects/coc/screenshot-3.jpeg" alt="" class="screenshot">
            </div>
        </div>
        <div class="hero">
            <div class="bg">
                <div class="img" :style="renderBackgroundImage('projects/coc/hero.jpeg')"></div>
            </div>
            <h2 class="container">NCCU CoC Ph.D. Program Official Website</h2>
        </div>
        <ContactSection :small="true" />
    </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'

export default{
    name: 'WorkCocView',
    components:{
        ContactSection,
    },
}
</script>

<style lang="scss">
    @import './index.scss';
</style>

