// hooks 函数式编程思想
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Personalized } from '../models/personalized'
import { usePersonalized } from '../api'
// 仓库的分支,personalized
// 专注于数据管理编程
export const usePersonalizedStore = defineStore("personalized", () => {
  const personalizedMv = ref<Personalized[]>([])
  const getPersonalized = async () => {
    if (personalizedMv.value.length) return
    personalizedMv.value = await usePersonalized()
    console.log(personalizedMv.value);
    
  }
  return {
    personalizedMv,
    getPersonalized
  }

})