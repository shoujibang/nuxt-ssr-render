<template>
  <div class="admin-box">
    <v-header-admin />
      <div class="admin-main"> 
        <el-row :gutter="10">
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="left-menu-box">
              <left-menu :menuData="menuData"></left-menu>
            </div>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
            <div class="right">
              <nuxt/>
            </div>
          </el-col>      
        </el-row>
      </div>  
    <v-fotter isShow></v-fotter>  
  </div>
</template>
<script>
import leftMenu from '~/components/leftMenu.vue'
export default {
  mounted() {
    

  },
  data() {
    return {
      menuData:[
        {
          name:"首页",
          url:"/admin",
          icon:"fa fa-home",
          keys:"1"
        },
        {
          name:"CMS管理",
          url:"",
          icon:"fa fa-cog fa-fw",
          keys:"2",
          children:[
            {
            groupName:"栏目一",
            keys:"2-1",
            subThree:[
              {
                name:"cms综合",
                url:"/admin/cmsNews",
                icon:"fa fa-home",
                keys:"2-1-1",
              },{
                name:"栏目管理",
                url:"/admin/cmsColumn",
                icon:"fa fa-home",
                keys:"2-1-2",
              }
            ]
            
          },{
            groupName:"栏目二",
            keys:"2-2",
            subThree:[
              {
                name:"资讯管理",
                url:"/cms/info",
                icon:"fa fa-home",
                keys:"2-2-1",
              },{
                name:"栏目管理",
                url:"/cms/column",
                icon:"fa fa-home",
                keys:"2-2-2",
              }
            ]
            
          }]
        },{
          name:"认证管理",
          url:"/auth",
          icon:"fa fa-user",
          keys:"3",
          children:[{
            groupName:"",
            keys:"3-1",
            subThree:[{
              name:"增加用户",
              url:"/auth/userAdd",
              icon:"fa fa-home",
              keys:"3-1-1",
            }]
          },{
            groupName:"",
            keys:3-2,
            subThree:[{
              name:"增加用户",
              url:"/auth/userAdd",
              icon:"fa fa-home",
              keys:"3-2-1",
            },{
              name:"修改用户",
              url:"/auth/userAdd",
              icon:"fa fa-home",
              keys:"3-2-2",
            },{
              name:"删除用户",
              url:"/auth/userAdd",
              icon:"fa fa-home",
              keys:"3-2-3",
            }]
          }]
        },
        {
          name:"订单管理",
          url:"/admin/orderList",
          icon:"fa fa-home",
          keys:"4",
        },{
          name:"开发管理",
          url:"/admin/devList",
          icon:"fa fa-home",
          keys:"5",
        },{
          name:"运营管理",
          url:"admin/businessList",
          icon:"fa fa-home",
          keys:"6",
        }
      ]
    }
  },
  components:{
    leftMenu
  }
}
</script>
<style lang="scss">
 .admin-box{
   font-size: 14px;
   .admin-main{
     .left{
       width: 100%;
     }
     .right{
       width: 100%;
     }  

   }
 }
</style>
