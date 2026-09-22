<template>
  <PhoneFrame label="In-app reply · response action prominent">
    <div class="ns-screen-content default-bg">
      <StatusBar />
      <NavBar title="續保照會單">
        <template #right><NsIcon name="more" :size="16" color="#3565B6" /></template>
      </NavBar>
      <div class="enquiry-body">
        <div class="policy-card">
          <div class="row">
            <span class="ref"># F123456789</span>
            <StatusTag kind="danger">未處理</StatusTag>
          </div>
          <div class="sub">[紙本] 續保照會單 · 111/9/28</div>
          <div class="hr"></div>
          <div v-for="(r, i) in rows" :key="i" class="kv">
            <span class="k">{{ r.k }}</span>
            <span class="v" :style="{ fontWeight: r.bold ? 600 : 400 }">
              <template v-if="r.role">
                <RoleChip :role="r.role" />{{ r.v }}
              </template>
              <template v-else>{{ r.v }}</template>
            </span>
          </div>
        </div>

        <div class="section-label">照會內容</div>
        <div class="content-card">『預設』續保金額異動，請與客戶確認下列資料是否正確，並於 7 日內回覆承辦人員。</div>

        <div class="section-label">回覆</div>
        <div class="reply-card">
          <div class="text">已與客戶確認，金額無誤，續保。</div>
          <div class="counter">14 / 250 字</div>
        </div>

        <div class="spacer"></div>

        <div class="cta-row">
          <button class="reset">重設</button>
          <button class="submit">送出回覆</button>
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
  name: 'ScreenEnquiryReply',
  components: { PhoneFrame, StatusBar, NavBar, NsIcon, StatusTag, RoleChip },
  data() {
    return {
      rows: [
        { k: '要保人', v: '王小明', role: '要保人' },
        { k: '被保人', v: '王小明', role: '被保人' },
        { k: '保費', v: 'TWD 14,000', bold: true },
        { k: '到期日', v: '111/10/15' },
      ],
    }
  },
}
</script>
