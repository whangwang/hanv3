<template>
    <div class="work-al-view">
        <nav>
            <div class="container">
                <a href="/">
                    <div class="logos">
                        <img src="@/assets/images/global/logo.svg" alt="">
                        <h4>Han Wang</h4>
                    </div>
                    <a href="/#/work" class="link">
                        <img src="@/assets/images/projects/back-arrow.svg"/>
                    </a>
                </a>
            </div>
        </nav>
        <div class="work-al-container font change-color">
            <div class="landing">
              <div class="landing-wrapper">
                <img src="@/assets/images/projects/avianlens/deco/1.svg" alt="" class="deco deco1">
                <div class="left">
                  <img src="@/assets/images/projects/avianlens/logo-landscape.svg" />
                  <h1>Unlock the <br>World of Wings</h1>
                  <h4 class="larger">Your Birding Companion</h4>
                </div>
                <div class="right">
                  <div>
                    <img class="bird-background" src="@/assets/images/projects/avianlens/landing-bird-bg.jpg" />
                    <div class="card-container">
                      <div class="bird-card-wrapper">
                        <div class="hint">
                          <div class="tr">
                            <div class="outter-indicator lt"></div>
                            <div class="outter-indicator rt"></div>
                          </div>
                          <div class="inner">
                            <div class="tr">
                              <div class="inner-indicator lt"></div>
                              <div class="inner-indicator rt"></div>
                            </div>
                            <div class="br">
                              <div class="inner-indicator lb"></div>
                              <div class="inner-indicator rb"></div>
                            </div>
                          </div>
                          <div class="br">
                            <div class="outter-indicator lb"></div>
                            <div class="outter-indicator rb"></div>
                          </div>
                        </div>
                        <div class="bird-card">
                          <img 
                            ref="card" 
                            @mousemove="handleMouseMove"
                            @mouseleave="resetCard"
                            src="@/assets/images/projects/avianlens/landing-bird-card.png" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img :srcset="renderImage('projects/avianlens/mobile-landing.png')" alt="" class="mobile-landing-cover">
              </div>
            </div>
            <div class="overview container small">
              <img src="@/assets/images/projects/avianlens/award.svg" alt="" class="award">
              <p>I participated in a design hackathon organized by CISSA, an organization at the University of Melbourne, and won first place with this project proposal. </p>
              <p>The challenge was to design a service or product that would benefit a non-profit organisation. Over the course of just two days, I led a team of four designers through the entire process, including idea brainstorming, wireframing, interface design, and presentation preparation.</p>
              <p class="bold">Scroll down to learn more about this product proposal dedicated to bird lovers!</p>
              <div class="role">
                <h6>My Role</h6>
                <div class="tags">
                  <span class="tag">Project Lead</span>
                  <span class="tag">UI Designer</span>
                  <span class="tag">Lead Presenter</span>
                </div>
              </div>
            </div>
            <div class="mission">
              <div class="container small">
                <h6>Our Mission</h6>
                <div class="quote">
                  <div class="left">
                    <img src="@/assets/images/projects/avianlens/quote-left.svg" alt="">
                  </div>
                  <h2>How can we utilise crowd-sourcing to support bird conservation efforts?</h2>
                  <div class="right">
                    <img src="@/assets/images/projects/avianlens/quote-right.svg" alt="">
                  </div>
                </div>
                <div class="features">
                  <div class="feature">
                    <img src="@/assets/images/projects/avianlens/mission/support.svg" alt="">
                    <h4>Support<br>Bird Conservation Org</h4>
                  </div>
                  <div class="feature">
                    <img src="@/assets/images/projects/avianlens/mission/awareness.svg" alt="">
                    <h4>Grow Awareness of People<br>to Protect Birds</h4>
                  </div>
                  <div class="feature">
                    <img src="@/assets/images/projects/avianlens/mission/birdlovers.svg" alt="">
                    <h4>Provide a Handy Tools<br>for Bird Lovers</h4>
                  </div>
                </div>
                <p>In bird conservation, geolocation data plays a critical role. It’s essential for bird conservation organisations to collect and record the distribution of different bird species, enabling them to track, observe, and even organise bird-watching events to raise awareness about these creatures. However, identifying these small beings in the wild is no easy task.</p>
                <p>At the same time, bird lovers face challenges in identifying birds, accessing timely information, and recording their sightings.</p>
                <p>To tackle these challenges, we've proposed an app as the solution. It enables users to identify bird species by taking photos and incorporates gamification features to motivate them to log their sightings. This data can then be shared with non-profit organisations for future analysis and conservation initiatives.</p>
              </div>
            </div>
            <div class="design">
              <div class="container small">
                <div class="title">
                  <img src="@/assets/images/projects/avianlens/deco/2.svg" alt="" class="deco2">
                  <h6>Visual Design</h6>
                  <h3>Presenting nature’s elegance<br>with a <span>modern touch</span></h3>
                </div>
                <div class="highlight color-palette">
                  <h5>Colour Palette</h5>
                  <div class="content">
                    <div class="description">
                      <p>Inspired by the colours found in nature, we chose a palette of green, blue, and a striking yellow-green gradient—sampled from seasonal leaves and the blue sky, the birds' natural stage. </p>
                      <p>To ensure the birds remain the focal point, we used a dark background throughout the app, allowing the photos to truly stand out. This colour palette creates a visual identity that is meaningful, vibrant, modern, and user-friendly.</p>
                    </div>
                    <div class="showcase">
                      <img src="@/assets/images/projects/avianlens/color.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="highlight typography">
                  <h5>Typography</h5>
                  <div class="content">
                    <div class="description">
                      <p>To create a modern vibe while preserving a dictionary-like experience, we chose <span>Yeseva One</span> as our headline font—a serif typeface that blends elegance with energy.</p>
                      <p>While the distinctive headline font adds character and visual appeal, we paired it with a clean sans-serif font, <span>Rubik</span>, for paragraph text. Rubik ensures content remains accessible and easy to read. This thoughtful font pairing strikes a balance between aesthetics and usability, reinforcing both our brand identity and the overall user experience.</p>
                    </div>
                    <div class="showcase">
                      <img src="@/assets/images/projects/avianlens/typography-title.svg" alt="">
                      <img src="@/assets/images/projects/avianlens/typography-paragraph.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="highlight icon">
                  <h5>Illustration</h5>
                  <div class="content">
                    <div class="description">
                      <img src="@/assets/images/projects/avianlens/deco/3.svg" alt="" class="deco3">
                      <p>Illustrations also play a key role in shaping the product’s tone. In our icon set, we adopted a line art style to maintain a clean and modern aesthetic. Gradient colors are applied consistently across all illustrations—from icons to badges.</p>
                      <p>Badges, in particular, are a core element in our app, designed to enhance the gamified experience. Through carefully crafted color gradients, subtle lighting, and defined borders, the badges emulate a tangible, collectible feel, making users' achievements feel more rewarding and real.</p>
                    </div>
                    <div class="showcase">
                      <img src="@/assets/images/projects/avianlens/iconabadge.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="screenshot">
              <div class="container small">
                <h3>
                  <img src="@/assets/images/projects/avianlens/deco/4.svg" alt="" class="deco4">
                  Features
                </h3>
                <div class="content">
                  <div class="left">
                    <div class="description discover">
                      <h2>Discover</h2>
                      <h5>Recommendation Updated Daily<br>Offering Knowledges on Birds Around You</h5>
                    </div>
                    <div class="description dictionary">
                      <h2>Information</h2>
                      <h5>Access detailed information about a species, including a brief introduction, its location, and identification tips</h5>
                    </div>
                    <div class="description search">
                      <h2>Search</h2>
                      <h5>Look up a particular bird by its name or discover new feathered friends using various filters</h5>
                    </div>
                    <div class="description image">
                      <h2>Image Search</h2>
                      <h5>If you encounter a breathtaking bird in its natural habitat, you can readily identify it by capturing a photo with our app</h5>
                    </div>
                    <div class="description captured">
                      <h2>Captured</h2>
                      <h5>Allow you browse through all the birds you've encountered and “captured” by your lens in the wild and earn achievement badges based on your experiences!</h5>
                    </div>
                  </div>
                  <div class="right">
                    <div class="phone">
                      <img class="cover" src="@/assets/images/projects/avianlens/phone.png" alt="">
                      <div class="screen discover">
                        <div class="wrapper">
                          <img class="bg" :srcset="renderImage('projects/avianlens/features/discover-bg.jpg')" alt="">
                          <img :srcset="renderImage('projects/avianlens/features/discover-card2.png')" alt="" class="card-prev">
                          <img :srcset="renderImage('projects/avianlens/features/discover-card1.png')" alt="" class="card-first">
                          <img :srcset="renderImage('projects/avianlens/features/discover-card2.png')" alt="" class="card-second">
                        </div>
                      </div>
                      <div class="screen dictionary">
                        <div class="backdrop"></div>
                        <div class="wrapper">
                          <img class="bg" :srcset="renderImage('projects/avianlens/features/dictionary.jpg')" alt="">
                        </div>
                      </div>
                      <div class="screen search">
                        <img class="bg" :srcset="renderImage('projects/avianlens/features/search.jpg')" alt="">
                      </div>
                      <div class="screen image">
                        <div class="backdrop"></div>
                        <div class="wrapper">
                          <img class="bg" :srcset="renderImage('projects/avianlens/features/image-bg.jpg')" alt="">
                          <img class="result-bg" :srcset="renderImage('projects/avianlens/features/image-bg-blur.jpg')" alt="">
                          <img class="result" :srcset="renderImage('projects/avianlens/features/image-bg-result.jpg')" alt="">
                        </div>
                      </div>
                      <div class="screen captured">
                        <img class="bg" :srcset="renderImage('projects/avianlens/features/captured.jpg')" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="screenshot-mobile">
              <div class="container small">
                <h3>
                  <img src="@/assets/images/projects/avianlens/deco/4.svg" alt="" class="deco4">
                  Features
                </h3>
                <div class="group">
                  <div class="phone">
                    <img class="cover" src="@/assets/images/projects/avianlens/phone.png" alt="">
                    <div class="mobilescreen discover">
                      <div class="wrapper">
                        <img class="bg" :srcset="renderImage('projects/avianlens/features/discover-bg.jpg')" alt="">
                        <img :srcset="renderImage('projects/avianlens/features/discover-card2.png')" alt="" class="card-prev">
                        <img :srcset="renderImage('projects/avianlens/features/discover-card1.png')" alt="" class="card-first">
                        <img :srcset="renderImage('projects/avianlens/features/discover-card2.png')" alt="" class="card-second">
                      </div>
                    </div>
                  </div>
                  <div class="mobile-description discover">
                    <h2>Discover</h2>
                    <h5>Recommendation Updated Daily<br>Offering Knowledges on Birds Around You</h5>
                  </div>
                </div>
                <div class="group dictionary">
                  <div class="phone">
                    <img class="cover" src="@/assets/images/projects/avianlens/phone.png" alt="">
                    <div class="mobilescreen dictionary active">
                      <div class="backdrop"></div>
                      <div class="wrapper">
                        <img class="bg" :srcset="renderImage('projects/avianlens/features/dictionary.jpg')" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="mobile-description dictionary">
                    <h2>Information</h2>
                    <h5>Access detailed information about a species, including a brief introduction, its location, and identification tips</h5>
                  </div>
                </div>
                <div class="group">
                  <div class="phone">
                    <img class="cover" src="@/assets/images/projects/avianlens/phone.png" alt="">
                    <div class="mobilescreen search">
                      <img class="bg" :srcset="renderImage('projects/avianlens/features/search.jpg')" alt="">
                    </div>
                  </div>
                  <div class="mobile-description search">
                    <h2>Search</h2>
                    <h5>Look up a particular bird by its name or discover new feathered friends using various filters</h5>
                  </div>
                </div>
                <div class="group image">
                  <div class="phone">
                    <img class="cover" src="@/assets/images/projects/avianlens/phone.png" alt="">
                    <div class="mobilescreen image active">
                      <div class="wrapper">
                        <img class="bg" :srcset="renderImage('projects/avianlens/features/image-bg.jpg')" alt="">
                        <img class="result-bg" :srcset="renderImage('projects/avianlens/features/image-bg-blur.jpg')" alt="">
                        <img class="result" :srcset="renderImage('projects/avianlens/features/image-bg-result.jpg')" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="mobile-description image">
                    <h2>Image Search</h2>
                    <h5>If you encounter a breathtaking bird in its natural habitat, you can readily identify it by capturing a photo with our app</h5>
                  </div>
                </div>
                <div class="group">
                  <div class="phone">
                    <img class="cover" src="@/assets/images/projects/avianlens/phone.png" alt="">
                    <div class="mobilescreen captured active">
                      <img class="bg" :srcset="renderImage('projects/avianlens/features/captured.jpg')" alt="">
                    </div>
                  </div>
                  <div class="mobile-description captured">
                    <h2>Captured</h2>
                    <h5>Allow you browse through all the birds you've encountered and “captured” by your lens in the wild and earn achievement badges based on your experiences!</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="ecosystem">
              <div class="container small">
                <div class="title">
                  <img src="@/assets/images/projects/avianlens/deco/2.svg" alt="" class="deco2">
                  <h6>Our Ecosystem</h6>
                  <h3>From Birdwatchers to Changemakers —<br>Together, <span>We Protect What We Love.</span></h3>
                </div>
                <div class="items">
                  <div class="item">
                    <span>1</span>
                    <img src="@/assets/images/projects/avianlens/ecosystem/1.svg" alt="">
                    <h4>Spot & Record</h4>
                    <p>Bird lovers capture sightings in the wild</p>
                  </div>
                  <div class="item">
                    <span>2</span>
                    <img src="@/assets/images/projects/avianlens/ecosystem/2.svg" alt="">
                    <h4>Map the Habitat</h4>
                    <p>We log each bird’s location with precision</p>
                  </div>
                  <div class="item">
                    <span>3</span>
                    <img src="@/assets/images/projects/avianlens/ecosystem/3.svg" alt="">
                    <h4>Unlock Insights</h4>
                    <p>Patterns and trends are revealed through smart analysis</p>
                  </div>
                  <div class="item">
                    <span>4</span>
                    <img src="@/assets/images/projects/avianlens/ecosystem/4.svg" alt="">
                    <h4>Support Conservation</h4>
                    <p>Your observations fuel real-world impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="ending">
              <div class="container small">
                <div class="bg-wrapper">
                  <div class="ending-bg" :style="renderBackgroundImage('projects/avianlens/banner-bg.jpg')"></div>
                </div>
                <div class="title-wrapper">
                  <div class="title">
                    <img src="@/assets/images/projects/avianlens/logo-square.svg" />
                    <h1>Unlock the <br> World of Wings</h1>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <ContactSection :small="true" bg="#13140D" />
    </div>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'
import { useMeta } from 'vue-meta'

export default{
    name: 'WorkALView',
    components:{
        ContactSection,
    },
    data(){
        return{
            dictionaryDescription: null,
            dictionaryScreen: null,
            dictionaryScreenScroll: null,
            dictionaryScreenScrollTimeout: null,
            searchDescription: null,
            searchScreen: null,
            imageDescription: null,
            imageScreen: null,
            imageScreenTimeout: null,
            imageScreenWrapper: null,
            capturedDescription: null,
            capturedScreen: null,
            featureTitle: null,
            endingSection: null,
            vh: 0,
            mobileDictionaryScreen: null,
            mobileDictionaryScreenScroll: null,
            mobileDictionaryScreenScrollTimeout: null,
            mobileImageScreen: null,
            mobileImageScreenScroll: null,
            mobileImageScreenScrollTimeout: null
        }
    },
    created(){
      let ticking = false
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll()
            ticking = false;
          })
          ticking = true;
        }
      })
    },
    methods: {
      handleScroll() {
        const threshold = (this.vh * 0.5) - 64;
        const dictionaryAnchor = this.dictionaryDescription.offsetTop - threshold
        const searchAnchor = this.searchDescription.offsetTop - threshold
        const imageAnchor = this.imageDescription.offsetTop - threshold
        const capturedAnchor = this.capturedDescription.offsetTop - threshold
        const endAnchor = this.capturedDescription.offsetTop - (this.vh) + this.capturedDescription.offsetHeight + 64

        const endingSectionAnchor = this.endingSection.offsetTop - threshold

        const mobileDictionaryAnchor = this.mobileDictionaryScreen.offsetTop - threshold
        const mobileImageAnchor = this.mobileImageScreen.offsetTop - threshold

        console.log(this.mobileDictionaryScreen.offsetTop)

        // dictionary
        if (window.scrollY < dictionaryAnchor) {
          this.dictionaryScreen.classList.remove('active')
          this.dictionaryScreenScroll.classList.remove('scroll')
          clearTimeout(this.dictionaryScreenScrollTimeout)
          this.dictionaryScreenScrollTimeout = null
        } else {
          this.dictionaryScreen.classList.add('active')
          if(this.dictionaryScreenScrollTimeout == null && !this.dictionaryScreenScroll.classList.contains('scroll')){
            this.dictionaryScreenScrollTimeout = setTimeout(() => 
              this.dictionaryScreenScroll.classList.add('scroll')
            ,1500)
          }
        }

        //search
        if(window.scrollY < searchAnchor) {
          this.searchScreen.classList.remove('active')
        }else{
          this.searchScreen.classList.add('active')
        }

        //image
        if(window.scrollY < imageAnchor) {
          this.imageScreen.classList.remove('active')
          this.imageScreenWrapper.classList.remove('enter')
          clearTimeout(this.imageScreenTimeout)
          this.imageScreenTimeout = null
        }else{
          this.imageScreen.classList.add('active')
          if(this.imageScreenTimeout == null && !this.imageScreenWrapper.classList.contains('enter')){
            this.imageScreenTimeout = setTimeout(() => 
              this.imageScreenWrapper.classList.add('enter')
            ,1500)
          }
        }

        //captured
        if(window.scrollY < capturedAnchor) {
          this.capturedScreen.classList.remove('active')
        }else{
          this.capturedScreen.classList.add('active')
        }

        //end
        if(window.scrollY >= endAnchor) {
          this.featureTitle.classList.add('hide')
        }else{
          this.featureTitle.classList.remove('hide')
        }

        //ending section
        if(window.scrollY >= endingSectionAnchor) {
          this.endingSection.classList.add('active')
        }else{
          this.endingSection.classList.remove('active')
        }

        if(window.scrollY < mobileDictionaryAnchor){
          this.mobileDictionaryScreenScroll.classList.remove('scroll')
          clearTimeout(this.mobileDictionaryScreenScrollTimeout)
          this.mobileDictionaryScreenScrollTimeout = null
        } else {
          if(this.mobileDictionaryScreenScrollTimeout == null && !this.mobileDictionaryScreenScroll.classList.contains('scroll')){
            this.mobileDictionaryScreenScrollTimeout = setTimeout(() => 
              this.mobileDictionaryScreenScroll.classList.add('scroll')
            ,1500)
          }
        }

        if(window.scrollY < mobileImageAnchor) {
          this.mobileImageScreenScroll.classList.remove('enter')
          clearTimeout(this.mobileImageScreenScrollTimeout)
          this.mobileImageScreenScrollTimeout = null
        }else{
          if(this.mobileImageScreenScrollTimeout == null && !this.mobileImageScreenScroll.classList.contains('enter')){
            this.mobileImageScreenScrollTimeout = setTimeout(() => 
              this.mobileImageScreenScroll.classList.add('enter')
            ,1500)
          }
        }
      },
      handleMouseMove(e) {
        const card = this.$refs.card
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        console.log(`x: ${x}, y: ${y}`)

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateY = ((x - centerX) / rect.width) * -30
        const rotateX = ((y - centerY) / rect.height) * 30

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`
      },
      resetCard() {
        const card = this.$refs.card
        if (card) {
          card.style.transform = 'rotateX(0deg) rotateY(0deg)'
        }
      }
    },
    mounted(){
        useMeta({
            title: 'AvianLens - Unlock the World of Wings',
        })
        this.vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        this.dictionaryDescription = document.querySelector(".description.dictionary")
        this.dictionaryScreen = document.querySelector(".screen.dictionary")
        this.dictionaryScreenScroll = document.querySelector(".screen.dictionary .bg")
        this.searchDescription = document.querySelector(".description.search")
        this.searchScreen = document.querySelector(".screen.search")
        this.imageDescription = document.querySelector(".description.image")
        this.imageScreen = document.querySelector(".screen.image")
        this.imageScreenWrapper = document.querySelector(".screen.image .wrapper")
        this.capturedDescription = document.querySelector(".description.captured")
        this.capturedScreen = document.querySelector(".screen.captured")
        this.featureTitle = document.querySelector(".screenshot h3")
        this.endingSection = document.querySelector(".ending")
        this.mobileDictionaryScreen = document.querySelector(".group.dictionary")
        this.mobileDictionaryScreenScroll = document.querySelector(".mobilescreen.dictionary .bg")
        this.mobileImageScreen = document.querySelector(".group.image")
        this.mobileImageScreenScroll = document.querySelector(".mobilescreen.image .wrapper")
    }
}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>

