<template>
  <div class="container">
    <div class="admin-box">
      <div>
        <h2>用户统计</h2>
      </div>
      <div ref="echart" id="echart" style="width: 100%;height:400px;">

      </div>
    </div>
     
  </div>
</template>
<script>
export default {
  name:"Admin",
  layout: 'admin',
  middleware:['auth'],
  data() {
    return {
      title:"控制台管理页面",
      datas:{
        xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
      }]
      }
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
  mounted() {
    this.echartIint();
  },
  methods: {
    echartIint(){
      let dom = this.$refs.echart;
     let myChart =  this.$echarts.init(dom);
     myChart.setOption(this.datas);


    }
  },
}
</script>
<style lang="scss" scoped>
  .container{
    padding-top:20px;
    .admin-box{
      display: flex;
      div{
        width: 50%;
        text-align: center;
      }
    }
    
  }
</style>
