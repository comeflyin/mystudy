<!-- View -->
<template>
  <div>
    JMain
    <div v-for="user in users">
    <Item :user="user"/>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Item from './Item.vue';
// 提供数据，模型
// Model
const users = ref([])

setTimeout(() => {
  users.value = [...users.value, 'Yiko']
}, 1000)

fetch('https://k9gtiz.laf.run/get-list')
  .then(res => res.json())
  .then(data => {
    users.value = data.data.map(item => item.txt)
  })
</script>

<style scoped>

</style>

