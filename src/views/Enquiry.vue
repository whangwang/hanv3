<template>
    <div class="enquiry-view">
        <div v-if="sended" class="submit-result">
            <img v-if="sending" src="@/assets/images/global/loading.svg" alt="" class="loading">
            <div v-if="!sending" :class="`result-panel ${sending ? '' : 'animated'}`">
                <img :src="require(`@/assets/images/global/${this.sendSuccess ? 'success' : 'error'}.svg`)" class="result-icon">
                <h2>{{ this.sendSuccess ? 'Success' : 'Error' }}</h2>
                <p v-if="this.sendSuccess">Thanks for your enquiry, I will get in touch with you in 1 ~ 3 business days.</p>
                <p v-if="!this.sendSuccess">Sorry, due to the temporary server issue, we can finish your request. Please try again later.</p>
            </div>
        </div>
        <div class="container main-container">
            <div class="cover col-4">
                <img src="@/assets/images/enquiry/enquiry-cover@1x.jpeg" :srcset="renderImage('enquiry/enquiry-cover.jpeg')" alt="">
            </div>
            <div class="content">
                <h2>Enquiry</h2>
                <div class="form-bg">
                    <div class="form">
                        <h4>Contact <span>(* = require)</span></h4>
                        <div class="sub-group">
                            <div id="input-group-name" :class="`input-group required ${this.errors.name ? 'error' : ''}`">
                                <input id="input-name" placeholder="Name" type="text" v-model="this.contact.name" />
                                <label for="input-name" >Name</label>
                                <span class="err">* Name is required</span>
                            </div>
                            <div class="input-group">
                                <input id="input-company" placeholder="Company" type="text" v-model="this.contact.company" />
                                <label for="input-company" >Company</label>
                            </div>
                            <div class="input-group">
                                <input id="input-mobile" placeholder="Phone Number" type="tel" v-model="this.contact.mobile" />
                                <label for="input-mobile" >Phone Number</label>
                            </div>
                            <div id="input-group-email" :class="`input-group required  ${this.errors.email ? 'error' : ''}`">
                                <input id="input-email" placeholder="Email" type="email" v-model="this.contact.email" />
                                <label for="input-email" >Email</label>
                                <span class="err">{{ emailErr }}</span>
                            </div>
                        </div>
                        <h4 id="service-section">Services you need</h4>
                        <span :class="`services-err ${this.errors.service ? 'error' : ''}`">* Please at least select one service</span>
                        <div class="sub-group option-container">
                            <div :key="`options-${ele.value}`" @click="toggle(this.services, ele.value)" v-for="ele in servicesOptions" :class="`options ${ele.type} ${this.services.indexOf(ele.value) !== -1 ? 'selected' : ''}`">
                                {{ ele.title }}
                            </div>
                        </div>
                        <h4>Duration <span>(estimate)</span></h4>
                        <div class="sub-group option-container">
                            <div :key="`duration-${ele.value}`" @click="this.duration = ele.value" v-for="ele in durationOptions" :class="`options ${ele.value === this.duration ? 'selected' : ''}`">
                                {{ ele.title }}
                            </div>
                        </div>
                        <h4>Budget</h4>
                        <div class="sub-group slider-container">
                            <div class="sub-group option-container nested">
                                <div :key="`currency-${ele.value}`" @click="this.preferredCurrency = ele.value" v-for="ele in currencyOptions" :class="`options ${ele.value === this.preferredCurrency ? 'selected' : ''}`">
                                    {{ ele.title }}
                                </div>
                            </div>
                            <VueSlider v-model="priceRange" :contained="true" height="6px" tooltip="none" :data="priceRangeOptions" :adsorb="true" :marks="true" :included="true" />
                        </div>
                        <h4>Others Details</h4>
                        <textarea v-model="this.othersInfo" placeholder="Tell me more about this potential project, your idea, your goal, or even your worries!"></textarea>
                        <div class="btn-container">
                            <button class="highlight" @click="submit()">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import VueSlider from 'vue-slider-component'
import emailjs from 'emailjs-com'

export default{
    name: 'EnquiryView',
    mounted(){
        useMeta({
            title: 'Enquiry',
        })
        this.priceRange = [this.priceRangeOptions[0], this.priceRangeOptions[2]]
    },
    data(){
        return {
            priceRange: ['1,000', '5,000'],
            services: ['FE', 'UI'],
            servicesOptions: [{
                title: 'Frontend Development',
                type: 'dev',
                value: 'FE'
            }, {
                title: 'Backend Development',
                type: 'dev',
                value: 'BE'
            }, {
                title: 'Chatbot Development',
                type: 'dev',
                value: 'CE'
            }, {
                title: 'UI Design',
                type: 'design',
                value: 'UI'
            }, {
                title: 'UX Design',
                type: 'design',
                value: 'UX'
            }, {
                title: 'UI/UX Consulting',
                type: 'design',
                value: 'Consulting'
            }],
            duration: '1mth',
            durationOptions: [{
                title: 'less than 1 mth',
                value: '1mth'
            }, {
                title: '1 ~ 1.5 mths',
                value: '1.5mths'
            }, {
                title: 'more than 1.5 mths',
                value: 'morethan1.5mths'
            }],
            preferredCurrency: 'aud',
            currencyOptions: [{
                title: 'AUD',
                value: 'aud'
            }, {
                title: 'TWD',
                value: 'twd'
            }, {
                title: 'USD',
                value: 'usd'
            }],
            contact: {
                name: '',
                company: '',
                mobile: '',
                email: ''
            },
            othersInfo: '',
            errors: {
                name: false,
                email: false,
                service: false
            },
            emailErr: '* Email is required',
            sending: false,
            sended: false,
            sendSuccess: true
        }
    },
    components: {
        VueSlider,
    },
    watch: {
        priceRangeOptions(val){
            this.priceRange = [val[0], val[2]]
        }
    },
    computed: {
        priceRangeOptions(){
            if(this.preferredCurrency == 'aud')return ['1,000', '5,000', '10,000', '> 15,000']
            if(this.preferredCurrency == 'usd')return ['500', '2,500', '5,000', '> 10,000']
            if(this.preferredCurrency == 'twd')return ['10,000', '50,000', '100,000', '> 200,000']
            return ['1,000', '5,000', '10,000', '> 15,000']
        },
    },
    methods: {
        toggle(target, val){
            if(target.indexOf(val) !== -1){
                delete target[target.indexOf(val)]
            }else{
                target.push(val)
            }
        },
        submit(){
            this.errors = {
                name: false,
                email: false,
                service: false
            }
            if(this.validation()){
                let data = {
                    name: this.contact.name,
                    company: this.contact.company,
                    email: this.contact.email,
                    mobile: this.contact.mobile,
                    services: this.services.reduce((acc, cur) => acc = `${acc}${cur}, `, '').slice(0, -2),
                    duration: this.duration,
                    preferredCurrency: this.preferredCurrency,
                    budget: `${this.priceRange[0]} ~ ${this.priceRange[1]}`,
                    othersInfo: this.othersInfo
                }
                this.sended = true
                this.sending = true
                let self = this
                emailjs.send("service_9k5nhar", "template_ppg7bgl", data, process.env.VUE_APP_EMAILJS_KEY)
                .then(function() {
                    self.sending = false
                    self.sendSuccess = true
                    setTimeout(() => {
                        self.sending = false
                    }, 3000)
                }, function() {
                    self.sending = false
                    self.sendSuccess = false
                });
            }
        },
        scroll(to, offset = 0){
            window.scrollTo({
                top: document.getElementById(to).offsetTop - 112 + offset,
                left: 0,
                behavior: 'smooth'
            })
        },
        validation(){
            if(this.contact.name == ''){
                this.errors.name = true
                this.scroll('input-group-name')
                return false
            }
            if(this.contact.email == ''){
                this.errors.email = true
                this.emailErr = '* Email is required'
                this.scroll('input-group-email')
                return false
            }
            if(this.contact.email.indexOf('@') == -1){
                this.errors.email = true
                this.emailErr = '* Wrong email format'
                this.scroll('input-group-email')
                return false
            }
            if(this.services.reduce((acc, cur) => acc = `${acc}${cur}, `, '') == ""){
                this.errors.service = true
                this.scroll('service-section')
                return false
            }
            return true
        }
    }
}
</script>
<style lang="scss">
$themeColor: #0B1D3F;
$bgColor: #CAD4E6;
@import '~vue-slider-component/lib/theme/material.scss';
</style>

