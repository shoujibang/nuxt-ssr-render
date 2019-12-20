<template>
  <div class="index-page">
    <go-to />
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
            desc:"发生的范德萨发生的发的说法萨达"
          },
          {
            title:"最新动态",
            desc:"从V字形从V型从是徐表现出VB从v"
          },
          {
            title:"肥嘟嘟",
            desc:"破了我没收到是的我科普日么么哒富马酸的看法第三方"
          },
          {
            title:"是的范德萨",
            desc:"菲欧我入耳我宁可NoIE兼容打卡机酸辣粉时代峻峰东方今典"
          }
      ],
      cdata:[{
        img:require("@/assets/image/banner_1.png"),
        title:"Chain1",
        desc:"的是多少多所多",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_2.png"),
        title:" Chain2",
        desc:"VC大叔大婶大所大所多所多",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_3.png"),
        title:" Chain3",
        desc:"大法师打发多福多寿法撒旦飞洒地方撒打发斯",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_4.png"),
        title:" Chain4",
        desc:"V型小",
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
    margin-top:pxTorem(70px);
  }

}
</style>
