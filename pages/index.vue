<template>
  <div class="container">
    
      <!-- <logo /> -->
      <!-- <go-to>
        
      </go-to>       -->
      
      <!-- <div style="text-align:center;">
        {{counter}}
        <el-button @click="add">增加</el-button>
        <el-button @click="remove">减少</el-button>
      </div> -->
      
      <item-list   :typeLi="2" :data="itemList"></item-list>
      
    
      
    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ItemList from '~/components/itemList.vue'
import Carousel from '~/components/Carousel.vue'
import {mapState, mapMutations} from 'vuex'; //引入vuex
export default {
  layout: 'index',
  async asyncData(context){
    const dataList = [];
    const { data } = await context.$axios.get(`/api/getWangYiNews?page=2&count=4`);
    data.result.forEach((item,index) => {
      dataList.push({
        img:item.image,
        title:item.title,
        desc:item.title,
        path:item.path
      })
      
    });
      console.log("000000000000res")
      console.log(dataList)
    
    
   return { itemList: dataList }
  },
  //该项会被混入到vue实例中
  computed: {
    ...mapState({
      counter: state => state.counter
    })

    
  },
  methods: {
    ...mapMutations([
      'INCREMENT',
      "Remove"
    ]),
    add(){
      this.INCREMENT();
    },
    remove(){
      this.Remove();
    }
  },
  data() {
    return {
      cdataSub:[
          {
            title:"最新活动",
            desc:"京东数科与京东云联袂发布智臻链“云”"
          },
          {
            title:"最新动态",
            desc:"京东数科获智博会区块链高峰论坛两大奖项 应用落地已成行业趋势"
          },
          {
            title:"合作招商",
            desc:"区块链全流程可追溯 京东联合中国检科院看清进口燕窝“前世今生”"
          },
          {
            title:"文档专区",
            desc:"京东区块链白皮书重磅发布"
          }
      ],
      cdata:[{
        img:require("@/assets/image/banner_1.png"),
        title:"京东区块链底层引擎JD Chain1",
        desc:"南京产业云",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_2.png"),
        title:"京东区块链底层引擎JD Chain2",
        desc:"南京产业云",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_3.png"),
        title:"京东区块链底层引擎JD Chain3",
        desc:"南京产业云",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("@/assets/image/banner_4.png"),
        title:"京东区块链底层引擎JD Chain4",
        desc:"南京产业云",
        btn:[{
          name:"了解产品",
          url:""
        }],
      }],
      itemList:[],
      sbustr:"哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽",
      title:"南京产创云",
      baseUrl:process.env.baseUrl //通过nuxt.config.js的env配置的全局变量
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'home custom title', name: 'home', content: '安全稳定、可信赖的私有化平台' }
      ]
    }
  },
  components: {
    Logo,
    ItemList,
    Carousel

  },
  mounted() {
    
  }
  
}
</script>

<style lang="scss"  scoped>
.container{
  position: relative;
}
.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
.container {
  // margin: 0 auto;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 16px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 18px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
