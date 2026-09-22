import { createApp } from 'vue'
import App from './App.vue'
import { createMetaManager } from 'vue-meta'
import router from './router'
import { renderImageMixin } from './mixins/renderImage.js'

// styles
import './assets/styles/global.scss'
import './assets/styles/nav.scss'
import './assets/styles/contactSection.scss'
import './assets/styles/home.scss'
import './assets/styles/work.scss'
import './assets/styles/resume.scss'
import './assets/styles/enquiry.scss'

const app = createApp(App)
app.use(router).use(createMetaManager()).mixin(renderImageMixin)

// Wait for the router to resolve the initial route BEFORE mounting — this is
// required for the prerender plugin to snapshot the correct page. After mount,
// give vue-meta one event-loop tick to inject the per-page meta tags into the
// document head, then dispatch the `render-event` the prerender plugin waits on.
router.isReady().then(() => {
  app.mount('#app')
  setTimeout(() => {
    document.dispatchEvent(new Event('render-event'))
  }, 50)
})