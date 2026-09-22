<template>
  <div class="ns-phone-wrap">
    <div class="ns-phone-mock">
      <div class="ns-notch"></div>
      <div class="ns-screen"><slot /></div>
    </div>
    <div v-if="label" class="ns-phone-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'PhoneFrame',
  props: { label: String },
}
</script>
