<template>
    <div class="work-cloudmatrix-view">
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
        <div class="container small work-cloudmatrix-container">
            <div class="landing">
                <h2>The Official website for face recognization system</h2>
                <div class="cover" :style="`background-image: url(${require('@/assets/images/projects/cloudmatrix/landing.jpg')});`"></div>
                <p class="intro">
                    CloudMatrix is a subsidiary of GIGABYTE. When their facial recognition system was about to be sold in early 2020, I was an intern within the company, responsible for designing and developing the product's official website.
                    <br><br>Due to the relatively little experience in website design and development within the organization, after I formulate the website structure, I need to obtain sales documents from the business side, convert them into website content, extract page highlights, and finally be able to complete the presentation in the form of a website, that's where I found this case is challenging for.
                    <br><br>In the interface design, the image I want to convey is lively and friendly, but professional. Therefore, in addition, to showing the function and performance, the content of the website also has many explanatory paragraphs, which makes even managers or buyers who are not familiar with AI technology can be able to understand the product, and know the advantages of using this solution. Visually, a large number of pictures are used to balance the amount of text, and the sense of technology is packaged lightly, with an approach such as shadow, color scheme, and glowing, mack sure is neither too heavy and boring nor does it appear Unprofessional.
                </p>
                <div class="meta">
                    <h5>Platform</h5>
                    <p>Website</p>
                    <h5>Responsibility</h5>
                    <p>UI/UX Design, Front-end Development</p>
                    <h5>Tools</h5>
                    <p>Figma, HTML/CSS/Vue</p>
                    <h5>Link</h5>
                    <p><a href="https://reurl.cc/rQmalO" target="_blank">https://reurl.cc/rQmalO</a></p>
                </div>
            </div>
            <div class="content">
                <img src="@/assets/images/projects/cloudmatrix/screenshot-1.jpeg" alt="" class="screenshot">
                <img src="@/assets/images/projects/cloudmatrix/screenshot-2.jpeg" alt="" class="screenshot">
            </div>
        </div>
        <div class="hero">
            <div class="bg">
                <div class="img" :style="renderBackgroundImage('projects/cloudmatrix/hero.jpeg')"></div>
            </div>
            <h2 class="container">The Official website for face recognization system</h2>
        </div>
        <ContactSection :small="true" />
    </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import { useMeta } from 'vue-meta'

export default{
    name: 'WorkCloudmatrixView',
    components:{
        ContactSection,
    },
    mounted(){
        useMeta({
            title: 'Cloudmatrix',
        })
    }
}
</script>

<style lang="scss">
    @import './index.scss';
</style>

