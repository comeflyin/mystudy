<script setup lang="ts">
import Banner from './components/Banner.vue'
import PersonalizedMv from './components/PersonalizedMv.vue'

</script>

<template>
  <div>
    <Banner />
    <!-- <ul>
      <li 
      v-for="banner in banners" 
      :key="banner.targetId">
    <img :src="banner.pic" alt=""></li>
    </ul> -->
    <PersonalizedMv />
    <!-- <ul>
      <li 
      v-for="mv in personalizedMv" 
      :key="mv.id">
    <img :src="mv.picUrl" alt=""></li>
    </ul> -->
  </div>

</template>

<style scoped>

</style>
