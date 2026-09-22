<template>
  <div class="ns-nav-bar" :class="{ inverted }">
    <button class="back"><NsIcon name="back" :color="c" :size="16" /></button>
    <div class="title" :style="{ color: c }">{{ title }}</div>
    <div class="right"><slot name="right" /></div>
  </div>
</template>

<script>
import NsIcon from '../NsIcon.vue'
export default {
  name: 'NavBar',
  components: { NsIcon },
  props: {
    title: String,
    inverted: Boolean,
  },
  computed: {
    c() { return this.inverted ? '#fff' : '#131A34' },
  },
}
</script>
