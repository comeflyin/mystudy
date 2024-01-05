// store 提供数据， router 提供角色数据
import { defineStore } from "pinia";

// type RoleList = {
//   admin: string[]
//   user: string[]
// }
// 接口定义
interface ObjectList {
  // admin: string[]
  // user: string[]
  [key: string]: string[]
}

export const usePermissStore = defineStore('permiss',() => {
  return{
    // 角色列表
    roleList:<ObjectList>{
      admin: ['1','2','3','4'],
      user: ['1'] // 403
    }
  }
})