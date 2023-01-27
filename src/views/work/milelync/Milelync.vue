<template>
    <div class="work-milelync-view">
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
        <div class="container small work-milelync-container">
            <div class="landing">
                <h2>B2B problem-solving system</h2>
                <div class="cover" :style="renderBackgroundImage('projects/milelync/landing.jpeg')"></div>
                <p class="intro">
                    MileLync is a project entrusted to me by CloudMile Inc.
                    <br><br>This platform provides consulting for GCP services. The main requirement is to let customers report their needs on the platform, and then the technical consultant will reply and solve them.
                    <br><br>In this project, the client proposed a structure, and I designed the screen layout according to the proposal, so that the screen and process could be more in line with the needs of users, and at the same time improve the aesthetics of the screen.
                </p>
                <div class="meta">
                    <h5>Platform</h5>
                    <p>Website</p>
                    <h5>Responsibility</h5>
                    <p>UI Design</p>
                    <h5>Tools</h5>
                    <p>Figma, Zeplin</p>
                    <h5>Link</h5>
                    <p><a href="https://reurl.cc/33gbL0" target="_blank">https://reurl.cc/33gbL0</a></p>
                </div>
            </div>
            <div class="content">
                <img src="@/assets/images/projects/milelync/styleguide.jpg" alt="" class="screenshot">
                <img src="@/assets/images/projects/milelync/screenshot-1.png" alt="" class="screenshot">
                <img src="@/assets/images/projects/milelync/screenshot-2.png" alt="" class="screenshot">
                <img src="@/assets/images/projects/milelync/screenshot-3.png" alt="" class="screenshot">
                <img src="@/assets/images/projects/milelync/screenshot-4.png" alt="" class="screenshot">
                <img src="@/assets/images/projects/milelync/screenshot-5.png" alt="" class="screenshot">
                <img src="@/assets/images/projects/milelync/screenshot-6.png" alt="" class="screenshot">
            </div>
        </div>
        <ContactSection :small="true" />
    </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import { useMeta } from 'vue-meta'

export default{
    name: 'WorkMilelyncView',
    components:{
        ContactSection,
    },
    mounted(){
        useMeta({
            title: 'Milelync',
        })
    }
}
</script>

<style lang="scss">
    @import './index.scss';
</style>

