<template>
  <span class="ns-status-tag" :style="{ background: m.bg, color: m.c }"><slot /></span>
</template>

<script>
const MAP = {
  danger:  { bg: '#FFECEB', c: '#DB3D31' },
  warning: { bg: '#F6EFE4', c: '#96703D' },
  success: { bg: '#E3FAF1', c: '#5AAC8F' },
  notice:  { bg: '#D9E7FE', c: '#3565B6' },
  cancel:  { bg: '#DAE1EA', c: '#535C7D' },
}

export default {
  name: 'StatusTag',
  props: {
    kind: { type: String, default: 'notice' },
  },
  computed: {
    m() { return MAP[this.kind] || MAP.notice },
  },
}
</script>

<style lang="scss">
.ns-status-tag {
  font: 600 9px/1.4 'Noto Sans TC', 'PingFang TC', sans-serif;
  padding: 2px 6px;
  border-radius: 2px;
  display: inline-block;
}
</style>
