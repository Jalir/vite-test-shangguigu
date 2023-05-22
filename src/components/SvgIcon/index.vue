<script lang="ts" setup>
defineProps({
  width: {
    type: String,
    default: '1em'
  },
  height: {
    type: String,
    default: '1em'
  },
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: {
    type: String,
    required: true,
    default: ''
  },
  color: {
    type: String,
    default: 'black'
  }
})
</script>

<template>
  <svg :style="{width, height}">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<style scoped lang='less'>
</style>