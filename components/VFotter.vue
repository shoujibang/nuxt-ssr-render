<template>
    <div class="fotter-box"> 
        <div v-if="!isShow" class="fotter-box-top">
            <slot name="top">
                <itemlist :typeLi="4" :data="itemList"></itemlist>
            </slot>
        </div>
        <div class="fotter-box-bottom">
            <slot name="bottom">
                版权所有版权所有版权所有版权所有版权所有
                版权所有版权所有版权所有版权所有版权所有版权所有
            </slot>
  
        </div>
    </div> 
</template>
<script>
import ItemList from '~/components/itemList.vue'
export default {
    name:"VFotter",
    props:{
        isShow:{
            type:[Boolean],
            default:false
        }
    },
    created() {
       
    },
    components:{
        itemlist:ItemList
    },
    data() {
        return {
            itemList:[
               {
                    img: require("@/assets/image/p17.png"),
                    title:"联系我们",
                    desc:"13810033974"
                },
                {
                    img: require("@/assets/image/p11.png"),
                    title:"联系我们",
                    desc:"13810033974"
                },
                {
                    img: require("@/assets/image/p14.png"),
                    title:"联系我们",
                    desc:"13810033974"
                },
                {
                    img: require("@/assets/image/p16.png"),
                    title:"联系我们",
                    desc:"13810033974"
                } 
            ],
            navData:[
                {
                    name:"首页",
                    url:"javascript:;"
                },
                {
                    name:"产品",
                    url:"javascript:;"
                },{
                    name:"解决方案",
                    url:"javascript:;"
                },{
                    name:"案列分享",
                    url:"javascript:;"
                },{
                    name:"白皮书",
                    url:"javascript:;"
                },{
                    name:"API",
                    url:"https://www.apiopen.top/api.html"
                }
                
                
                
            ]
        }
    },
    mounted() {

        
        
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/stylus/_reset.scss";
    .fotter-box{
       display:flex;
       align-items: center;
       justify-content: center;
       width: 100%;
       background:#2e313b;
        flex-wrap: wrap;
        flex-direction: column;
        // margin-top: 70px;
        position: absolute;
        .fotter-box-top{
            color: #c3c3c3;
            font-size: pxTorem(30px);
        }
        .fotter-box-bottom{
            width: 100%;
            height: pxTorem(46px);
            background: #1f252f;
            color: #c3c3c3;
            font-size: pxTorem(14px);
            letter-spacing: .01rem;
            text-align: center;
            line-height: pxTorem(46px);
        }
    }
   
    
</style> 