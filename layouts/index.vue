<template>
  <div class="index-page">
    <v-header>
        <carousel :cdataSub="cdataSub" isFixed :carouselHei="560" :data="cdata" />    
    </v-header>
    <nuxt />
    <div class="index-page-fotter">
      <v-fotter></v-fotter>
    </div>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel.vue'
export default {
  components:{
    Carousel
  },
  data() {
    return {
      cdataSub:[
          {
            title:"最新活动",
            desc:"法撒旦飞洒地方撒打发斯蒂芬"
          },
          {
            title:"最新动态",
            desc:"应用落地已成行业趋势"
          },
          {
            title:"合作发的",
            desc:"阿萨德打发士大夫撒旦发"
          },
          {
            title:"大多专区",
            desc:"大沙发沙发第三方"
          }
      ],
      cdata:[{
        img:require("@/assets/image/banner_1.png"),
        title:" Chain1",
        desc:"rrr",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_2.png"),
        title:" Chain2",
        desc:"大声道",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_3.png"),
        title:" Chain3",
        desc:"持续吃",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_4.png"),
        title:"大额是否 Chain4",
        desc:"大法师打",
        btn:[{
          name:"了解产品",
          url:""
        }],
      }],
    }
  },
}
</script>
<style lang="scss">
.index-page{
  .index-page-fotter{
    margin-top:70px;
  }

}
</style>
