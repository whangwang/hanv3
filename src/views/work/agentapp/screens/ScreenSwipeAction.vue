<template>
  <PhoneFrame label="Swipe action · pin / mark-read / share">
    <div class="ns-screen-content default-bg">
      <StatusBar />
      <NavBar title="我的通知">
        <template #right><NsIcon name="filter" :size="16" color="#3565B6" /></template>
      </NavBar>
      <div class="filter-row">
        <div v-for="(l, i) in filters" :key="i" class="filter" :class="{ active: i === 0 }">{{ l }}</div>
      </div>
      <div class="notif-list">
        <div class="notif">
          <div class="row1">
            <StatusTag kind="danger">照會</StatusTag>
            <span class="when">10 分前</span>
          </div>
          <div class="t unread">續保照會單 · 王小明</div>
          <div class="s">保費 TWD 14,000 · 限 7 日內回覆</div>
        </div>

        <div class="swipe-container">
          <div class="actions">
            <div class="bg-white"></div>
            <div class="action pin">
              <NsIcon name="pin" :size="14" color="#fff" :stroke="2" />釘選
            </div>
            <div class="action read">
              <NsIcon name="dot" :size="14" color="#fff" />已讀
            </div>
            <div class="action share">
              <NsIcon name="phone" :size="14" color="#fff" />分享
            </div>
          </div>
          <div class="swiped-card">
            <div class="row1">
              <StatusTag kind="warning">照會</StatusTag>
              <span class="when">2 小時前</span>
            </div>
            <div class="t unread">保單變更通知 · 林大華</div>
            <div class="s">地址變更需要回覆</div>
          </div>
          <div class="finger-hint"></div>
        </div>

        <div v-for="(n, i) in rest" :key="i" class="notif">
          <div class="row1">
            <StatusTag :kind="n.kind">{{ n.arch }}</StatusTag>
            <span class="when">{{ n.d }}</span>
          </div>
          <div class="t">{{ n.t }}</div>
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
  name: 'ScreenSwipeAction',
  components: { PhoneFrame, StatusBar, NavBar, TabBar, NsIcon, StatusTag },
  data() {
    return {
      filters: ['全部', '未讀 · 4', '其他'],
      rest: [
        { arch: '提醒', kind: 'notice',  t: '明日 15:00 簽約面談', s: '內湖 Cama 咖啡 · 李小華', d: '今天 09:00' },
        { arch: '系統', kind: 'cancel',  t: 'AG App 更新 v3.2.0',  s: '新增報價功能',           d: '昨天' },
        { arch: '照會', kind: 'success', t: '理賠申請確認 · 王小明', s: '已完成回覆',           d: '9/22' },
      ],
    }
  },
}
</script>
