import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    }, {
        path: '/work',
        name: 'Work',
        component: () => import('../views/Work.vue')
    }, {
        path: '/resume',
        name: 'Resume',
        component: () => import('../views/Resume.vue')
    }, {
        path: '/enquiry',
        name: 'Enquiry',
        component: () => import('../views/Enquiry.vue')
    }, {
        path: '/work/clip',
        name: 'WorksClip',
        component: () => import('../views/work/clip/Clip.vue'),
        meta: { indvidual: true, hideNav: true }
    }, {
        path: '/work/coc',
        name: 'WorksCoc',
        component: () => import('../views/work/coc/Coc.vue'),
        meta: { hideNav: true }
    }, {
        path: '/work/cloudmatrix',
        name: 'WorksCloudmatrix',
        component: () => import('../views/work/cloudmatrix/Cloudmatrix.vue'),
        meta: { hideNav: true }
    }, {
        path: '/work/milelync',
        name: 'WorksMilelync',
        component: () => import('../views/work/milelync/Milelync.vue'),
        meta: { hideNav: true }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0 })
            }, 300)
        })
    },
})

router.beforeEach((to, from, next)=>{
    if(to.name === undefined || from.name === undefined)next()
    let order = ['Home', 'Work', 'Resume', 'Enquiry']
    let toIndex = order.indexOf(to.name)
    let fromIndex = order.indexOf(from.name)
    if(to.name.startsWith('Works'))toIndex = 100000
    else if(from.name.startsWith('Works'))fromIndex = -1
    if ( toIndex > fromIndex ){
        to.meta.transition = 'next'
    } else {
        to.meta.transition = 'pre'
    }
    next()
})

export default router
