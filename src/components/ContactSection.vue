<template>
    <div class="contact-section" :style="bg != '' ? { backgroundColor: bg } : {}">
        <div :class="`container ${small && 'small'}`">
            <h2 :class="`section-title ${dark && 'dark'}`">Let's Create Something <br class="new-line-mobile">Meaningful !</h2>
        </div>
        <div class="group">
            <div :class="`container ${small && 'small'}`">
                <div class="content">
                    <div class="infos">
                        <img src="@/assets/images/global/logo.svg" alt="" class="left">
                        <div class="right">
                            <h2 class="name">Han Wang</h2>
                            <h4 class="job">Product Designer & <br>UX Researcher</h4>
                            <div class="info">
                                <h4 class="title">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/hanwang0430" class="link">https://www.linkedin.com/in/hanwang0430</a>
                            </div>
                            <div class="info">
                                <h4 class="title">Email</h4>
                                <a href="mailto:whangwang0430@gmail.com" class="link">whangwang0430@gmail.com</a>
                            </div>
                            <div class="info">
                                <button class="secondary download" @click="downloadResume('Designer')">
                                    Download my resume
                                    <img src="@/assets/images/global/deco-arrow-download.svg" alt="">
                                </button>
                            </div>
                            <button class="highlight enquiry" @click="goToEnquiry()">
                                ENQUIRY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="`container ${small && 'small'} portrait-container`">
                <img :src="require('@/assets/images/global/portrait@1x.png')" :srcset="renderImage('global/portrait.png')" alt="" class="portrait col-5">
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'ContactSection',
    props:{
        small: {
            type: Boolean,
            default: true
        },
        bg: {
            type: String,
            default: ''
        },
        dark: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        downloadResume(role){
            // Save as a role-tagged filename, but always pull the canonical PDF from /public
            const link = document.createElement('a')
            document.body.appendChild(link)
            link.href = `${process.env.BASE_URL || '/'}Han_Wang_Resume.pdf`
            link.download = `Han_Wang_${role}_Resume_${new Date().getFullYear()}.pdf`
            link.click()
            document.body.removeChild(link)
        },
        goToEnquiry(){
            this.$router.push({
                path: '/enquiry'
            })
        }
    }
}
</script>

