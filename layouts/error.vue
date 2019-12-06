<template>
<div>
  <v-header-admin />
  <div class="error">
      <div>小二正在努力研发中...</div>
      <nuxt-link to="/"><el-button>返回首页</el-button></nuxt-link>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style>
 .error{
   font-size: 18px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top:200px;
   flex-flow: wrap column;
   font-weight: 800;
   min-height: 560px;
   line-height: 30px;
 }
</style>
