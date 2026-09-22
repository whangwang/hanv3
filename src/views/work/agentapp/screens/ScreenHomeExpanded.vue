<template>
  <PhoneFrame label="Expanded · task cards + add custom">
    <div class="ns-screen-content default-bg">
      <div class="hero-grad slim">
        <StatusBar inverted />
        <div class="back-row">
          <NsIcon name="back" color="#fff" :size="16" />
          <div class="title">客戶雷達 · 任務展開</div>
        </div>
      </div>
      <div class="expanded-card">
        <div class="avatar">李</div>
        <div class="meta">
          <div class="n">李小華</div>
          <div class="sub">要保人 · 4 件保單</div>
        </div>
        <span class="dot-urg"></span>
        <div class="count">3 件</div>
        <NsIcon name="chevD" :size="12" color="#7C889F" />
      </div>
      <div class="task-list">
        <div
          v-for="(t, i) in tasks"
          :key="i"
          class="task"
          :style="{ borderLeftColor: borderColor(t.kind) }"
        >
          <div class="ic-tile">
            <NsIcon :name="t.icon" :size="14" color="#3565B6" />
          </div>
          <div class="meta">
            <div class="row">
              <StatusTag :kind="t.kind">{{ t.tag }}</StatusTag>
              <span v-if="t.custom" class="custom">自訂</span>
            </div>
            <div class="t">{{ t.t }}</div>
            <div class="d">{{ t.d }}</div>
          </div>
          <NsIcon name="chevR" :size="12" color="#7C889F" />
        </div>
        <div class="add-task">
          <NsIcon name="plus" :size="13" color="#3565B6" />
          新增自訂任務
        </div>
      </div>
      <TabBar active="home" />
    </div>
  </PhoneFrame>
</template>

<script>
import PhoneFrame from './PhoneFrame.vue'
import StatusBar from './StatusBar.vue'
import TabBar from './TabBar.vue'
import NsIcon from '../NsIcon.vue'
import StatusTag from '../StatusTag.vue'

const BORDER = {
  danger:  '#DB3D31',
  warning: '#C89C61',
  success: '#5AAC8F',
  notice:  '#3565B6',
}

export default {
  name: 'ScreenHomeExpanded',
  components: { PhoneFrame, StatusBar, TabBar, NsIcon, StatusTag },
  data() {
    return {
      tasks: [
        { kind: 'danger',  tag: '續保照會', t: '續保金額異動',     d: '剩 7 日 · TWD 14,000', icon: 'notif' },
        { kind: 'warning', tag: '保單變更', t: '地址資料待確認',   d: '今天到期', icon: 'doc' },
        { kind: 'notice',  tag: '行事曆',  t: '下午 3:00 簽約面談', d: '明天 · 內湖 Cama 咖啡', icon: 'cal' },
        { kind: 'success', tag: '自訂任務', t: '生日祝賀電話',     d: '10/02 週日', icon: 'phone', custom: true },
      ],
    }
  },
  methods: {
    borderColor(kind) { return BORDER[kind] || '#3565B6' },
  },
}
</script>
