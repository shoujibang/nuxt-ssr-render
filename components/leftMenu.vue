<template>
    <div class="left-menu">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      
      <el-menu
      class="el-menu-vertical-demo"      
      @open="handleOpen"
       @close="handleClose"
      :collapse="isCollapse"
      >
      <!-- <el-menu-item>
        <div @click="menuBtns" :label="isCollapse" class="left-menu-btn">
        {{isCollapse == false ? "收起" : '展开'}}
      </div>
      </el-menu-item> -->
        <div v-for="(item,index) in menuData" :key="index" >
            <el-submenu v-if="item.children" :index="item.keys">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item-group v-for="(values,index) in item.children" :key="index">
                <!-- <template slot="title">{{values.groupName}}</template> -->
                <el-menu-item 
                v-for="(val,index) in values.subThree" 
                :key="index" 
                :index="val.keys"
                @click="routerPush(val.url)"
                v-if="values.subThree">
              
                  {{val.name}}
                
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
           
              <el-menu-item v-else @click="routerPush(item.url)"  :index="item.keys">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            
        </div>
        
        
      </el-menu>
    </div>
</template>
<script>
export default {
  name:"leftMenu",
  data() {
    return {
      isCollapse:false, //控制菜单隐藏和显示
    }
  },
  props:{
    menuData:{
      type:[Array],
      required:true
    }
  },
  mounted() {
    this.$nextTick(function(){
      
      this.init();
      
      

    })
    console.log(this.menuData)
  },
  methods: {
    routerPush(url){
      this.$router.push({path:url});
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    init(){
      let navigatorHei = this.$(window).height();
      let headerHei = document.querySelector(".header-box").offsetHeight;
      let fotterHei = document.querySelector(".fotter-box").offsetHeight;
      let leftMenuHei = navigatorHei - headerHei ;
      // leftMenuHei = (leftMenuHei /1920)*100 + "rem"
      this.$(".el-menu-vertical-demo").css("height",leftMenuHei + 'px');
      // this.$(".left-menu").height(leftMenuHei + 'px');
    },
    menuBtns(){
      debugger;
      this.isCollapse = !this.isCollapse;
      this.init();
          
    }
  },
}
</script>
<style lang="scss" scoped>

  .left-menu{
    width: 100%;
    height: 100%;
    color: rgb(174, 185, 194);
    // background:#1f252f;
    position: relative;
    .left-menu-btn{
      width: 100%;
      
      cursor: pointer;
    }
    
  }
</style>
