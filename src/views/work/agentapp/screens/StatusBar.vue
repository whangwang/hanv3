<template>
  <div class="ns-status-bar" :style="{ color: c }">
    <span>{{ time }}</span>
    <div class="ns-sb-icons">
      <svg width="14" height="9" viewBox="0 0 14 9"><g :fill="c">
        <rect x="0" y="6" width="2" height="3" rx=".3"/>
        <rect x="4" y="4" width="2" height="5" rx=".3"/>
        <rect x="8" y="2" width="2" height="7" rx=".3"/>
        <rect x="12" y="0" width="2" height="9" rx=".3"/>
      </g></svg>
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
        <path d="M1 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z" :stroke="c" stroke-width=".8"/>
        <rect x="2" y="2" width="9" height="5" rx="0.5" :fill="c"/>
      </svg>
      <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
        <rect x="0.5" y="1" width="14" height="7" rx="1.5" :stroke="c" stroke-width=".8"/>
        <rect x="15" y="3" width="1.5" height="3" rx=".5" :fill="c"/>
        <rect x="2" y="2.5" width="11" height="4" rx=".5" :fill="c"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusBar',
  props: {
    inverted: Boolean,
    time: { type: String, default: '9:41' },
  },
  computed: {
    c() { return this.inverted ? '#fff' : '#131A34' },
  },
}
</script>
