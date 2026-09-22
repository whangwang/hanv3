<template>
  <PhoneFrame label="My notifications · three archetypes + filter tabs">
    <div class="ns-screen-content default-bg">
      <StatusBar />
      <NavBar title="我的通知">
        <template #right><NsIcon name="filter" :size="16" color="#3565B6" /></template>
      </NavBar>
      <div class="filter-row">
        <div v-for="(t, i) in filters" :key="i" class="filter" :class="{ active: t.a }">{{ t.l }}</div>
      </div>
      <div class="notif-list">
        <div v-for="(n, i) in notifs" :key="i" class="notif" :class="{ pinned: n.pin }">
          <div v-if="n.pin" class="pin-tag">
            <NsIcon name="pin" :size="9" color="#fff" :stroke="2" />釘選
          </div>
          <div class="row1">
            <div class="left">
              <StatusTag :kind="n.kind">{{ n.arch }}</StatusTag>
              <span v-if="n.unread" class="unread"></span>
            </div>
            <span class="when">{{ n.d }}</span>
          </div>
          <div class="t" :class="{ unread: n.unread }">{{ n.t }}</div>
          <div class="s">{{ n.s }}</div>
        </div>
      </div>
      <TabBar active="inbox" />
    </div>
  </PhoneFrame>
</template>

<script>
import PhoneFrame from './PhoneFrame.vue'
import StatusBar from './StatusBar.vue'
import NavBar from './NavBar.vue'
import TabBar from './TabBar.vue'
import NsIcon from '../NsIcon.vue'
import StatusTag from '../StatusTag.vue'
export default {
  name: 'ScreenNotifList',
  components: { PhoneFrame, StatusBar, NavBar, TabBar, NsIcon, StatusTag },
  data() {
    return {
      filters: [{ l: '全部', a: true }, { l: '未讀 · 4', a: false }, { l: '其他', a: false }],
      notifs: [
        { arch: '照會', kind: 'danger',  t: '續保照會單 · 王小明',    s: '保費 TWD 14,000 · 限 7 日內回覆', d: '10 分前',   pin: true,  unread: true },
        { arch: '照會', kind: 'warning', t: '保單變更通知 · 林大華',  s: '地址變更需要回覆',               d: '2 小時前', unread: true },
        { arch: '提醒', kind: 'notice',  t: '明日 15:00 簽約面談',    s: '內湖 Cama 咖啡 · 李小華',          d: '今天 09:00', unread: true },
        { arch: '提醒', kind: 'notice',  t: '生日祝賀電話 · 陳家明',  s: '自訂任務',                       d: '昨天',      unread: false },
        { arch: '系統', kind: 'cancel',  t: 'AG App 更新 v3.2.0',     s: '新增報價功能',                   d: '昨天',      unread: false },
        { arch: '照會', kind: 'success', t: '理賠申請確認 · 王小明',  s: '已完成回覆',                     d: '9/22',      unread: false },
      ],
    }
  },
}
</script>
