<template>
  <PhoneFrame label="Lock-screen push · enquiry summary">
    <div class="ns-screen-content lock">
      <StatusBar inverted />
      <div class="lock-clock">
        <div class="day">9月28日 星期三</div>
        <div class="time">9:41</div>
      </div>
      <svg class="lock-peaks" viewBox="0 0 280 80" preserveAspectRatio="none">
        <path d="M0 80 L60 30 L100 60 L150 10 L210 50 L280 25 L280 80 Z" fill="#fff"/>
      </svg>
      <div class="lock-pushes">
        <div class="push primary">
          <div class="push-head">
            <div class="logo">AG</div>
            <div class="src">南山 AG APP</div>
            <span class="when">現在</span>
          </div>
          <div class="push-meta">
            <StatusTag kind="danger">未處理照會</StatusTag>
            <span class="ref"># F123456789</span>
          </div>
          <div class="push-title">續保照會單 · 王小明</div>
          <div class="push-body">續保金額異動，請於 7 日內回覆。<br>保費 TWD 14,000 · 到期 111/10/15</div>
          <div class="push-actions">
            <div class="dismiss">關閉</div>
            <div class="reply">立即回覆</div>
          </div>
        </div>
        <div class="push stack">
          <div class="dot"></div>
          <span>南山 AG APP · 2 則其他通知</span>
        </div>
      </div>
      <div class="unlock-pill"><div class="bar"></div></div>
    </div>
  </PhoneFrame>
</template>

<script>
import PhoneFrame from './PhoneFrame.vue'
import StatusBar from './StatusBar.vue'
import StatusTag from '../StatusTag.vue'
export default {
  name: 'ScreenLockNotif',
  components: { PhoneFrame, StatusBar, StatusTag },
}
</script>
