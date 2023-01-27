import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { renderImageMixin } from './mixins/renderImage.js'

// styles
import './assets/styles/global.scss'
import './assets/styles/nav.scss'
import './assets/styles/contactSection.scss'
import './assets/styles/home.scss'
import './assets/styles/work.scss'
import './assets/styles/resume.scss'

const app = createApp(App)
app.use(router).mixin(renderImageMixin).mount('#app')