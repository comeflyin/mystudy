<template>
  <div>
    <ul>
      <li v-for="mv in personalizedMv" :key="mv.id">
        <img :src="mv.picUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { usePersonalizedStore } from '../store/personalized'
const { personalizedMv } = toRefs(usePersonalizedStore())
const { getPersonalized } = usePersonalizedStore()
onMounted(async () => {
  await getPersonalized()
})
</script>

<style scoped></style>