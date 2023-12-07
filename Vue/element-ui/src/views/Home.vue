<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <span>选课系统</span>
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            欢迎 {{$route.hash.slice(1)}}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>个人详情</el-dropdown-item>
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user: ''
    }
  }
}
</script>

<style lang="less" scoped>
.common-layout {
  height: 100vh;

  .el-container {
    height: 100%;

    .el-header {
      background-color: #c6e2ff;
      line-height: 60px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
      }
    }

    .el-aside {
      background-color: #d9ecff;
      color: #333;
      line-height: 200px;

    }

    .el-main {
      background-color: #ecf5ff;
      color: #333;
      line-height: 200px;
      text-align: center;
    }
  }
}
</style>