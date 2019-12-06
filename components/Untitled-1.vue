<template>
<!--客户分享组件-->
  <div class="column-three">
        <el-row ref="typeUl" class="item-list">
          <el-col 
            @mousemove="discoverMove($event,index)" 
            @mouseleave="discoverLeave($event,index)" 
            v-for = "(item,index) in data" :key="index" 
            class="item-data" 
            :xs="24" :sm="24" :md="8"  :xl="8">
              <div class="img-box">
              <img :src="item.img" />
              </div>
              <div class="main-box">
                <h2 class="tit">{{item.title}}</h2>
                <p class="desc">{{item.desc}}</p>
              </div>
              <div ref="discover" class="discover">
                  discover
              </div>
          </el-col>          
        </el-row> 
      
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  mounted() {
    this.$nextTick(function(){

      this.typeAuto();
    })
 
  },
  props: {
    data:{
      type:Array,
      required:true,
      default:[]
    },
    isCover:{
      type:Boolean,
      default:false
    },
    typeLi:{
      type:Number
      
    }
  },
  methods: {
    typeAuto(){
     
      console.log(this.typeLi)
      switch (this.typeLi) {
        case 1:
          this.$refs.typeUl.className = " ";
          break;
        case 2:
          this.$refs.typeUl.className = "col-two";
          break;  
        case 3:
          this.$refs.typeUl.className = "pic-tit";
          break; 
        default:
          break;
      }
    },
    discoverMove(e,index){
      if(!this.isCover){
        return false;
      }
      this.$refs.discover[index].style.top = 0;
      
    },
    discoverLeave(e,index){
      if(!this.isCover){
        return false;
      }
      this.$refs.discover[index].style.top = "100%";
    }
  },
};
</script>
<style lang="scss" scoped>
// @import "@/assets/style/index.scss";
  .bor{
    border: 1px solid red;

  }
  .column-three{
    width:1200px;
    margin:0 auto;
    font-size:16px;
    color: #7D818A;
    

  }
  .column-three img{
    width: 100%;
    height: 100%;
  }
  .column-three .item-list{
    display: flex;
    justify-content: space-between;
  }
  .column-three .item-list .item-data{
    width: 360px;
    box-sizing: border-box; 
    
    margin-right: 60px;
       
    border:1px solid rgba(238,238,238,1);
    border-bottom: none;
    position: relative;
    overflow: hidden;
  }
  .column-three .item-list .item-data:last-child{
    margin-right:-0.001px;
  }
  .column-three .item-list .item-data .discover{
    position: absolute;
    top:100%;
    left: 0;
    right: 0;
    height: 100%;
    padding:30px;
    background: rgba(0, 111, 240, 0.96);
    transition: top 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 20px;
  }
  .column-three .item-list .item-data:hover{
    box-shadow:0px 3px 19px 0px rgba(219,219,219,0.5);
  }
  .column-three .item-list .item-data .main-box{ 
     box-sizing: border-box; 
    padding:36px 29px 79px 36px;

    border-bottom:1px solid rgba(238,238,238,1);
  }
  .column-three .item-list .item-data .main-box .desc{
    line-height: 30px;
    font-size: 14px;
    color: #808080;
  }
  .column-three .item-list .item-data .tit{
    font-size:20px;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin-bottom: 11px;
    
  }
  .column-three .item-list .item-data .img-box{
    height: 241px;
    overflow: hidden;
  }
   .column-three .item-list .item-data .img-box img{
    transition: all 0.8s ;

   }
  .column-three .item-list .item-data .img-box img:hover{
    transform: scale(1.1);
  }
  /**
    两列布局样式
   */
   .column-three .col-two{
     display:flex;
     flex-flow:row wrap;
    justify-content: space-between;
   }
   .column-three .col-two .item-data .main-box .desc{
    line-height: 24px;
    font-size: 14px;
    color: #808080;
  }
   .column-three .col-two .item-data{
     width:560px;
     margin-right:36px;
     display: flex;
     margin-bottom:20px;
   }
   .column-three .col-two .item-data:nth-child(2n) {
     margin-right:-0.001px;
   }
   .column-three .col-two .item-data .img-box{
     width:274px;
     height:232px
   }
   .column-three .col-two .item-data .main-box{
     width:286px;
     height:232px
   }
   /**
    三列布局样式--图和标题
   */
   
   .column-three .pic-tit{
     display:flex;
     flex-flow:row wrap;
    justify-content: space-between;
   }
   .column-three .pic-tit .item-data .main-box .desc{
    line-height: 24px;
    font-size: 14px;
    color: #808080;
  }
   .column-three .pic-tit .item-data{
     width:364px;
     margin-right:0;
     display: flex;
     align-items: center;
    justify-content: center;
     margin-bottom:20px;
     border-bottom:1px solid rgba(238,238,238,1);
   }
   .column-three .pic-tit .item-data .tit{
     margin-top:10px;
   }
   .column-three .pic-tit .item-data:hover{
     border:1px solid #fff;
   }
   .column-three .pic-tit .item-data:last-child {
     margin-right:-0.001px;
   }
   .column-three .pic-tit .item-data .img-box{
     width:49px;
     height:49px;
     margin-right:48px;
   }
   .column-three .pic-tit .item-data .main-box{
     padding: 43px 0 46px 0;
     border:none;
     width: 130px;
   }
.column-three .pic-tit .item-data .img-box img:hover{
    transform: none;
  }
</style>
