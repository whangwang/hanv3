<template>
    <div :class="`work-template-view ${data.theme}`">
        <nav>
            <div class="container">
                <a href="/">
                    <div class="logos">
                        <img src="@/assets/images/global/logo.svg" alt="">
                        <h4>Han Wang</h4>
                    </div>
                </a>
                <a href="/#/work" class="link">
                    <img :src="require(`@/assets/images/projects/back-arrow${data.theme == 'light' ? '-dark' : ''}.svg`)"/>
                </a>
            </div>
        </nav>
        <img class="background-decoration" :src="require(`@/assets/images/projects/${data.cover}@1x.jpg`)" />
        <div class="container small work-template-container">
          <div class="landing-container">
            <img class="cover-img" :srcset="renderImage(data.landing)" />
            <img v-if="data.logo != null" class="cover-logo" :src="require(`@/assets/images/projects/${data.logo}`)" />
            <h2 class="landing-title" v-html="data.title"></h2>
          </div>
          <div class="project-info">
            <div class="project-props">
              <template v-for="(prop, ind) in data.info" :key="`project-props-${ind}`">
                <h5 class="props-title">{{ prop.title }}</h5>
                <div class="props-content">
                  <p v-for="(c, index) in prop.content" :key="`props-content-${index}`" v-html="c"></p>
                </div>
              </template>
            </div>
            <div class="project-description">
              <p v-for="(des, ind) in data.description" :key="`project-description-${ind}`">{{ des }}</p>
            </div>
          </div>
          <div class="showcase-container">
            <div v-for="(item, index) in data.images" :key="`showcase-group-${index}`" class="showcase-group">
              <h4>{{ item.title }}</h4>
              <img v-for="(img, ind) in item.content" :key="`showcase-${index}-img=${ind}`" :srcset="renderImage(img)" />
            </div>
          </div>
        </div>
        <ContactSection :small="true" :bg="data.backgroundColor" :dark="data.theme == 'light'" />
    </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import ContactSection from '@/components/ContactSection.vue'
import { pageMeta, projectCover } from '@/utils/pageMeta'

export default{
    name: 'WorkTemplateView',
    components:{
        ContactSection,
    },
    props: ['data'],
    mounted(){
        // Cover field is stored as "<project>/cover" — split out the project folder name
        const projectName = (this.data?.cover || '').split('/')[0]
        // Strip HTML and use the first description paragraph as the OG description
        const rawDesc = (this.data?.description?.[0] || '').replace(/\s+/g, ' ').trim()
        useMeta(pageMeta({
            title: this.data?.metaTitle || this.$route.meta.title,
            description: rawDesc,
            path: this.$route.path,
            image: projectName ? projectCover(projectName) : undefined,
            type: 'article',
        }))
    }
}
</script>

<style lang="scss">
    @import './index.scss';
</style>

