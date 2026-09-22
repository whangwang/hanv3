<template>
  <div class="ns-tab-bar">
    <div v-for="i in items" :key="i.k" class="ns-tab" :class="{ active: active === i.k }">
      <NsIcon :name="i.i" :size="18" :color="active === i.k ? '#3565B6' : '#7C889F'" />
      <span>{{ i.l }}</span>
    </div>
  </div>
</template>

<script>
import NsIcon from '../NsIcon.vue'
export default {
  name: 'TabBar',
  components: { NsIcon },
  props: { active: { type: String, default: 'home' } },
  data() {
    return {
      items: [
        { k: 'home',  l: '首頁', i: 'home' },
        { k: 'inbox', l: '通知', i: 'inbox' },
        { k: 'doc',   l: '保單', i: 'doc' },
        { k: 'me',    l: '我',   i: 'user' },
      ],
    }
  },
}
</script>
