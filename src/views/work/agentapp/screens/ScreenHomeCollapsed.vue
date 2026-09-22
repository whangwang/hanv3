<template>
  <PhoneFrame label="Collapsed · customers as rows, task counts visible">
    <div class="ns-screen-content default-bg">
      <div class="hero-grad">
        <svg class="peaks-deco" width="120" height="80" viewBox="0 0 120 80">
          <path d="M0 80 L40 20 L70 50 L120 0 L120 80 Z" fill="#fff"/>
        </svg>
        <StatusBar inverted />
        <div class="greeting-row">
          <div class="hi">
            <div class="time">早安</div>
            <div class="name">陳業務 您好</div>
          </div>
          <div class="bell-wrap">
            <NsIcon name="bell" color="#fff" :size="18" :stroke="1.8" />
            <span class="bell-dot"></span>
          </div>
        </div>
        <div class="search-wrap">
          <div class="search">
            <NsIcon name="search" :size="13" color="rgba(255,255,255,.85)" />
            搜尋客戶 / 保單編號
          </div>
        </div>
      </div>
      <div class="radar-head">
        <div class="left">
          <NsIcon name="radar" :size="14" color="#3565B6" />
          <div class="title">客戶雷達</div>
          <div class="badge">9 位待服務</div>
        </div>
        <div class="sort">排序</div>
      </div>
      <div class="customer-list">
        <div
          v-for="(c, i) in customers"
          :key="i"
          class="cust-card"
          :class="{ hi: c.hi }"
        >
          <div class="row1">
            <div class="avatar">{{ c.n[0] }}</div>
            <div class="meta">
              <div class="n">{{ c.n }}</div>
              <div class="sub">{{ c.sub }}</div>
            </div>
            <div class="right">
              <span v-if="c.urg" class="dot-urg"></span>
              <div class="count" :class="{ urg: c.urg }">{{ c.count }} 件</div>
              <NsIcon name="chevD" :size="12" color="#7C889F" />
            </div>
          </div>
          <div class="tags">
            <span v-for="t in c.tags" :key="t" class="tag">{{ t }}</span>
          </div>
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
export default {
  name: 'ScreenHomeCollapsed',
  components: { PhoneFrame, StatusBar, TabBar, NsIcon },
  data() {
    return {
      customers: [
        { n: '李小華', sub: '要保人 · 4 件保單', count: 3, urg: true,  hi: true,  tags: ['續保','照會','未讀'] },
        { n: '林大華', sub: '要保人 · 2 件保單', count: 2, urg: true,  hi: false, tags: ['變更','待回覆'] },
        { n: '陳家明', sub: '要保人 · 1 件保單', count: 1, urg: false, hi: false, tags: ['理賠'] },
        { n: '王小明', sub: '被保人 · 3 件保單', count: 2, urg: false, hi: false, tags: ['續保','行事曆'] },
      ],
    }
  },
}
</script>
