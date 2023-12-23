<template>
  <div>
    <ul>
      <li v-for="banner in banners" :key="banner.targetId">
        <img :src="banner.pic" alt="">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useBannerStore } from '../store/banner'
import { onMounted,toRefs } from 'vue'
const { banners } = toRefs(useBannerStore())
const { getBanners } = useBannerStore()
onMounted(async () => {
  await getBanners()
})
</script>

<style scoped></style>