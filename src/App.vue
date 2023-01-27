<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} | Han Wang` : `Han Wang` }}</template>
    </metainfo>
    <transition name="loading">
        <div v-if="pageLoading" class="loader">
            <img src="@/assets/images/global/loading.svg" alt="" class="loading">
        </div>
    </transition>
    <nav v-if="!hideNav">
        <div class="container">
            <router-link to="/">
                <div class="logos">
                    <img src="@/assets/images/global/logo.svg" alt="">
                    <h4>Han Wang</h4>
                </div>
            </router-link>
            <div class="links">
                <router-link :key="`link${ind}`" v-for="(ele, ind) in links" :class="path.split('/')[1] == ele.to.slice(1) && 'active'" :to="ele.to">{{ ele.title }}</router-link>
            </div>
            <div :class="`mobile-menu ${openMobileMenu ? 'active' : ''}`" @click="openMobileMenu = !openMobileMenu">
                <svg class="menu-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="line-top" d="M0 12H36" stroke="white" stroke-width="2"/>
                    <path class="line-bottom" d="M0 24H36" stroke="white" stroke-width="2"/>
                </svg>
            </div>
            <transition name="menu">
                <div v-if="openMobileMenu" class="mobile-menu-container">
                    <div class="mobile-menu-panel" >
                        <router-link :key="`link${ind}`" v-for="(ele, ind) in links" :class="path.split('/')[1] == ele.to.slice(1) && 'active'" :to="ele.to">{{ ele.title }}</router-link>
                    </div>
                </div>
            </transition>
        </div>
    </nav>
    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition" mode="out-in" v-on:enter="enter" v-on:before-leave="leave">
            <component :is="Component" />
        </transition>
    </router-view>
    <div class="footer">
        © HAN WANG {{ new Date().getFullYear() }}
    </div>
</template>

<script>

export default{
    data(){
        return{
            links: [{
                title: 'Home',
                to: '/'
            }, {
                title: 'Work',
                to: '/work'
            }, {
                title: 'Resume',
                to: '/resume'
            }, {
                title: 'Enquiry',
                to: '/enquiry'
            }/*, {
                title: 'Contact',
                to: '/contact'
            }*/],
            path: window.location.pathname,
            contactSize: true,
            smallContact: ['Home', 'Resume'],
            pageLoading: true,
            indvidual: false,
            hideNav: false,
            openMobileMenu: false
        }
    }, watch: {
        $route() {
            this.openMobileMenu = false
            this.path = window.location.pathname
            this.contactSize = this.smallContact.includes(this.$route.name)
            this.indvidual = this.$route.meta.indvidual
            this.hideNav = this.$route.meta.hideNav
            if(this.$route.meta.indvidual){
                document.body.classList.add('detach')
            }else{
                document.body.classList.remove('detach')
            }
        }
    }, mounted(){
        this.$nextTick(function () {
            setTimeout(() => this.pageLoading = false, 1500)
        })
        this.indvidual = this.$route.meta.indvidual
        this.hideNav = this.$route.meta.hideNav
        if(this.$route.meta.indvidual){
            document.body.classList.add('detach')
        }else{
            document.body.classList.remove('detach')
        }
    },
    methods: {
        enter(){
            setTimeout(() => {
                document.body.classList.remove('loading')
            }, 500)
        },
        leave(){
            document.body.classList.add('loading')
        }
    }
}
</script>

