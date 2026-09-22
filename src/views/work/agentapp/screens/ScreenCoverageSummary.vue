<template>
  <PhoneFrame label="Coverage summary · single scrollable view">
    <div class="ns-screen-content default-bg">
      <StatusBar />
      <NavBar title="保障一覽">
        <template #right><NsIcon name="more" :size="16" color="#3565B6" /></template>
      </NavBar>
      <div class="coverage-body">
        <div class="cust-slim">
          <RoleChip role="被保人" />
          <span class="name">李小華</span>
          <span class="sub">· 4 件有效保單</span>
        </div>
        <div class="totals">
          <div class="lab">總年繳保費</div>
          <div class="cur">TWD</div>
          <div class="amt">46,200</div>
        </div>
        <div class="cov-card">
          <div
            v-for="(it, i) in items"
            :key="i"
            class="cov-row"
            :class="{ inactive: !it.active }"
          >
            <div class="meta">
              <div class="n">{{ it.n }}</div>
              <div class="sub">{{ it.sub }}</div>
            </div>
            <div class="val">
              <div class="v">{{ it.v }}</div>
              <NsIcon v-if="it.active" name="chevR" :size="12" color="#7C889F" />
            </div>
          </div>
        </div>
        <div class="foot-link">
          <span>查看明細保單條款</span>
          <NsIcon name="chevR" :size="11" color="#3565B6" />
        </div>
      </div>
    </div>
  </PhoneFrame>
</template>

<script>
import PhoneFrame from './PhoneFrame.vue'
import StatusBar from './StatusBar.vue'
import NavBar from './NavBar.vue'
import NsIcon from '../NsIcon.vue'
import RoleChip from '../RoleChip.vue'
export default {
  name: 'ScreenCoverageSummary',
  components: { PhoneFrame, StatusBar, NavBar, NsIcon, RoleChip },
  data() {
    return {
      items: [
        { n: '壽險保額', v: 'TWD 3,000,000', sub: '安心久久 + 富貴雙享', active: true },
        { n: '醫療日額', v: 'TWD 3,000 / 日', sub: '安心久久終身險', active: true },
        { n: '重大傷病', v: 'TWD 1,000,000', sub: '防癌專案 (待續保)', active: true },
        { n: '意外身故', v: '—', sub: '未投保', active: false },
        { n: '失能扶助', v: 'TWD 30,000 / 月', sub: '失能附約', active: true },
      ],
    }
  },
}
</script>
