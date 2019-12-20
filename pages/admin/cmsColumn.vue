<template>
  <div class="container">
    
     
            
      <div style="text-align:center; height:560px">
        cms栏目管理
        <i class="fa fa-thumbs-up" style="font-size:30px;"></i>
      </div>
      

    
        
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ItemList from '~/components/itemList.vue'
import Carousel from '~/components/Carousel.vue'
import {mapState, mapMutations} from 'vuex'; //引入vuex
export default {
  layout: 'admin',
  async asyncData(context){
    const dataList = [];
    const { data } = await context.$axios.get(`/api/getWangYiNews?page=2&count=4`);
    data.result.forEach((item,index) => {
      dataList.push({
        img:item.image,
        title:item.title,
        desc:item.title
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
      
      itemList:[],
      sbustr:"哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽",
      title:"好几个好几个",
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
