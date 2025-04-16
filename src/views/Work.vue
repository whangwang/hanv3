<template>
    <div class="work-view">
        <div class="container main-container">
            <h2>From Ideation <br>to Creation.</h2>
            <div class="list">
                <div class="block" @click="to('clip')">
                    <div class="cover" :style="renderCoverImage('clip')"></div>
                    <h5>Digital license APP based on Blockchain</h5>
                </div>
                <div class="block" @click="to('avianlens')">
                    <div class="cover" :style="renderCoverImage('avianlens')"></div>
                    <h5>A hackathon-winning birdwatching companion APP</h5>
                </div>
                <div class="block" @click="to('nubila')">
                    <div class="cover" :style="renderCoverImage('nubila')"></div>
                    <h5>Designing the future of weather detection based on blockchain</h5>
                </div>
                <div class="block" @click="to('stickerhd')">
                    <div class="cover" :style="renderCoverImage('stickerhd')"></div>
                    <h5>E-commerce website for printing company</h5>
                </div>
                <div v-if="false" class="block" @click="to('hooky')">
                    <div class="cover" :style="renderCoverImage('hooky')"></div>
                    <h5>PWA APP for digital currency platform</h5>
                </div>
                <div v-if="false" class="block" @click="to('dcbot')">
                    <div class="cover" :style="renderCoverImage('dcbot')"></div>
                    <h5>Admin panel for digital currency investment</h5>
                </div>
                <div class="block" @click="to('coc')">
                    <div class="cover" :style="renderCoverImage('coc')"></div>
                    <h5>NCCU CoC Ph.D. program official website</h5>
                </div>
                <div class="block" @click="to('cloudmatrix')">
                    <div class="cover" :style="renderCoverImage('cloudmatrix')"></div>
                    <h5>The official website for face recognization system</h5>
                </div>
                <div class="block" @click="to('milelync')">
                    <div class="cover" :style="renderCoverImage('milelync')"></div>
                    <h5>B2B problem-solving system</h5>
                </div>
            </div>
        </div>
        <ContactSection :small="false" />
    </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import { useMeta } from 'vue-meta'

export default{
    name: 'WorkView',
    components:{
        ContactSection,
    },
    methods:{
        to(dist){
            //this.$router.push({ path: `/work/${dist}` })
            window.open(`/#/work/${dist}`, '_blank').focus();
        }
    },
    mounted(){
        useMeta({
            title: 'Work',
        })
    }
}
</script>

