<template>
  <span class="ns-role-chip" :style="{ background: m.bg }">{{ m.c }}</span>
</template>

<script>
const MAP = {
  '要保人': { bg: '#3565B6', c: '要' },
  '被保人': { bg: '#5AAC8F', c: '被' },
  '客戶':   { bg: '#C89C61', c: '客' },
}

export default {
  name: 'RoleChip',
  props: {
    role: { type: String, default: '客戶' },
  },
  computed: {
    m() { return MAP[this.role] || MAP['客戶'] },
  },
}
</script>

<style lang="scss">
.ns-role-chip {
  display: inline-flex; align-items: center; justify-content: center;
  width: 16px; height: 16px; border-radius: 50%;
  color: #fff;
  font: 700 9px/1 'Noto Sans TC', 'PingFang TC', sans-serif;
  flex: none;
}
</style>
