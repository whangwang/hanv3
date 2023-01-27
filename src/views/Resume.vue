<template>
    <div class="resume-view">
        <div class="container small main-container">
            <div class="col-4 left">
                <div class="cover-container">
                    <img src="@/assets/images/resume/cover@1x.jpg" :srcset="renderImage('resume/cover.jpg')" class="cover" />
                </div>
                <p>
                    I’m Han Wang, an international student studying at the University of Melbourne who come from Taiwan, also work as a freelancer, focusing on helping the client create a wonderful product using my skills.
                </p>
                <p v-if="false">Start at 2020, I participated <span class="prompt">15+ projects</span> with my design or develop skill, built 10 products from 0 to 1.</p>
                <button class="primary download">
                    Resume
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V19" stroke="white"/>
                        <path d="M6 15L12 21L18 15L12 16.7143L6 15Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div class="col-8 right">
                <h2>Skills</h2>
                <div class="skills-chart">
                    <h6 class="title">Design</h6>
                    <h5 class="content">UI Design</h5>
                    <h5 class="content">UX Design</h5>
                    <h5 class="content">Design Handoff</h5>
                    <h6 class="title">Frontend Develop</h6>
                    <h5 class="content">Vue.js</h5>
                    <h5 class="content">ReactJS</h5>
                    <h5 class="content">NodeJS</h5>
                    <h5 class="content">HTML</h5>
                    <h5 class="content">CSS/SCSS</h5>
                    <h5 class="content">jQuery</h5>
                    <h6 class="title">Others</h6>
                    <h5 class="content">Python</h5>
                    <h5 class="content">C++</h5>
                    <h5 class="content">C</h5>
                    <h5 class="content">AWS</h5>
                    <h5 class="content">Nginx Routing</h5>
                    <h5 class="content">Git</h5>
                </div>
                <h2 class="exp-title">Experience</h2>
                <div class="exp-subtitle">
                    <h4><span class="design">2+ years'</span> as a UI/UX designer</h4>
                    <h4><span class="dev">4+ years'</span> as a developer</h4>
                </div>
                <div class="exp-chart">
                    <div class="exp-block">
                        <p class="date">Feb 2023 - Dec 2024(EST)</p>
                        <h4 class="title">The University of Melbourne</h4>
                        <p class="description">
                            Master of Information Technology
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Jan 2021  -  Dec 2022</p>
                        <img src="@/assets/images/global/clients/aja.png" alt="" class="logo">
                        <h4 class="title">UI Designer</h4>
                        <p class="description">
                            Cooperate with colleagues in <span class="prompt design">five</span> different design projects, including several big <span class="prompt design">banks</span>, one of the largest <span class="prompt design">insurance companies</span> in Taiwan, and a <span class="prompt design">startup company</span> focusing on machine learning.
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Jul 2019  -  May 2020</p>
                        <img src="@/assets/images/global/clients/NCCU.png" alt="" class="logo">
                        <h4 class="title">Research Assistant <span>with Porf. Kung Chen</span></h4>
                        <p class="description">
                            Working in <span class="prompt join">Emerging Technologies and Application Lab</span>, focusing on Implementing several Blockchain-based services with the governments in Taiwan.
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Dec 2019  -  Feb 2020</p>
                        <img src="@/assets/images/global/clients/gigabyte.png" alt="" class="logo">
                        <h4 class="title">Front-end Developer Intern</h4>
                        <p class="description">
                            Responsible for the product’s official website for a face recognition system. Start with designing the interface and user flow in <span class="prompt design">Figma</span>, and built it with <span class="prompt dev">Vue.js</span>, finished this mission by <span class="prompt join">myself only</span>.
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Jul 2018  -  Dec 2018</p>
                        <img src="@/assets/images/global/clients/feversocial.png" alt="" class="logo">
                        <h4 class="title">Front-end Developer Intern</h4>
                        <p class="description">
                            Developed several new features and solved issues for a single page CMS platform using <span class="prompt dev">ReactJS</span>, and built an automation software testing flow using <span class="prompt dev">Jenkins</span> and <span class="prompt dev">Docker</span>.
                        </p>
                    </div>
                    <div class="exp-block">
                        <p class="date">Sep 2015  -  Jun 2019</p>
                        <h4 class="title">National Chengchi University</h4>
                        <p class="description">
                            Bachelor for Science in Computer Science
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

export default{
    name: 'ResumeView',
    components:{
        ContactSection,
    },
}
</script>