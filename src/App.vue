<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { onMounted, getCurrentInstance } from 'vue'

onMounted(() => {
  const { $http } = getCurrentInstance().appContext.config.globalProperties
  $http.get('/user/info', { headers: { token: 'Admin Token' } }).then((res) => {
    console.log(res)
  })
})
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.container {
  .title {
    font-size: 20px;
  }
}
</style>
