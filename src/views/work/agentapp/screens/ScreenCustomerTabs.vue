<template>
  <PhoneFrame label="Customer detail · three-tab structure">
    <div class="ns-screen-content default-bg">
      <StatusBar />
      <NavBar title="客戶資料">
        <template #right><NsIcon name="phone" :size="16" color="#3565B6" /></template>
      </NavBar>
      <div class="cust-header">
        <div class="row">
          <div class="avatar">李</div>
          <div class="meta">
            <div class="name">李小華</div>
            <div class="sub"># A22041*** · 1986/05</div>
          </div>
          <div class="roles">
            <RoleChip role="要保人" />
            <RoleChip role="被保人" />
          </div>
        </div>
        <div class="tabs">
          <div class="tab">保單列表</div>
          <div class="tab active">保障一覽</div>
          <div class="tab">基本資料</div>
        </div>
      </div>
      <div class="policy-list">
        <div v-for="(p, i) in policies" :key="i" class="card">
          <div class="row1">
            <div class="title">{{ p.n }}</div>
            <StatusTag :kind="p.tk">{{ p.t }}</StatusTag>
          </div>
          <div class="row2">
            <span>{{ p.id }}</span>
            <span>{{ p.pre }}</span>
          </div>
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
import StatusTag from '../StatusTag.vue'
import RoleChip from '../RoleChip.vue'
export default {
  name: 'ScreenCustomerTabs',
  components: { PhoneFrame, StatusBar, NavBar, NsIcon, StatusTag, RoleChip },
  data() {
    return {
      policies: [
        { n: '安心久久醫療終身險', id: 'P 0098-21834', t: '有效',  pre: '年繳 TWD 24,000', tk: 'success' },
        { n: '富貴雙享投資型保單', id: 'P 0102-44218', t: '有效',  pre: '月繳 TWD 3,500',  tk: 'success' },
        { n: '防癌專案附約',       id: 'P 0089-19102', t: '待續保', pre: '年繳 TWD 14,000', tk: 'warning' },
        { n: '失能扶助附約',       id: 'P 0073-22884', t: '有效',  pre: '年繳 TWD 8,200',  tk: 'success' },
      ],
    }
  },
}
</script>
