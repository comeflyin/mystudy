<template>
  <div class="login-wrap">
      <div class="ms-login">
          <div class="ms-title">后台管理系统</div>
          <!-- v-model 双向绑定 性能不好 表单的目的是收集数据 -->
          <el-form 
              :model="param" 
              :rules="rules" 
              ref="login"
              label-width="0px"
              class="ms-content"
          >
              <el-form-item prop="username">
                  <el-input
                      autofocus
                      placeholder="请输入用户名"
                      v-model="param.username" />
              </el-form-item>
              <el-form-item prop="password">
                  <el-input
                      type="password"
                      placeholder="请输入密码"
                      @keyup.enter="submitForm(login)"
                      v-model="param.password" />
              </el-form-item>
              <div class="login-btn">
                  <el-button type="primary" 
                  @click="submitForm(login)">登录</el-button>
              </div>
          </el-form>
      </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { usePermissStore } from '../store/permiss'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import type { FormInstance } from 'element-plus';

const permiss = usePermissStore()
const router = useRouter()
interface LoginInfo {
  username: string;
  password: string;
}
// 和ref 区别  复杂reactive 
// proxy 
// 标注一个dom元素
const login = ref()
console.log(login.value);
onMounted(() => {
  console.log(login.value);
})

const param = reactive<LoginInfo>({
  username: '',
  password: ''
})
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ]
}
// submit event elementplus formEl
const submitForm = (formEl :FormInstance | undefined) => {
  console.log(formEl);
  
  if(!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      ElMessage.error('登录成功')
      localStorage.setItem('ms_username', param.username)
      const keys = permiss.roleList[param.username === 'admin' ? 'admin' : 'user']
      localStorage.setItem('ms_keys', JSON.stringify(keys))
      router.push('/')
    } else {
      ElMessage.error('请校验表单')
    }
  })
}

</script>

<style scoped>

</style>