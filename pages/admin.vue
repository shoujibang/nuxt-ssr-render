<template>
  <div class="container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>    
      <nuxt-child keep-alive />  
  </div>
</template>
<script>
export default {
  name:"Admin",
  layout: 'admin',
  data() {
    return {
      
    }
  },
}
</script>
<style lang="scss" scoped>
  .container{
    padding-top:20px;
  }
</style>
