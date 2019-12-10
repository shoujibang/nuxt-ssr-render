<template>
  <div class="container-main">
    <!-- :rules="LoginRules"  -->
     <div class="login-wrap">
       <div style="width:60%">
         
        <el-form :model="loginForm" 
        
        ref="ruleForm" 
        label-position="left"
        class="demo-ruleForm">
          <el-form-item prop="name">
            <i  slot="label" class="fa fa-user">用户名:</i>
            <el-input type="text" v-model="loginForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="pass" >
            <i slot="label" class="fa fa-key">密码:</i>
            <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <p style="font-size:14px; color:red;">
          PS:
        </p>
        <p style="font-size:14px; color:red;">
          用户名:admin
        </p>
        <p style="font-size:14px; color:red;">
          密码:admin
        </p>
        </div>
     </div>
            
      
      

    
        
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'home custom title', name: 'home', content: '安全稳定、可信赖的私有化平台' }
      ]
    }
  },
  data() {
    return {
      title:"产创云登录页面",
      loginForm:{
        name:"",
        pass:""
      },
      LoginRules:{
        name:[
            { validator: /^d/g, trigger: 'blur' }
          ],
        pass:[
            { validator: /^d/g, trigger: 'blur' }
          ]
      }
    }
  },
  mounted() {
    let hei = this.$(window).height();
    this.$("html").css("height",hei)
    this.$("html").css("background",'rgba(244, 248, 255, 1)')
  },
  methods: {
    submitForm(formName) {
      let that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            debugger;
            that.$axios.post("/auth/login",{
              username:that.loginForm.name,
              password:that.loginForm.pass
            }).then(res =>{
              console.log(res)
              if(res.data.token === null){                
                this.$alert("您的用户名或密码错误")
                return false;
              }
              
              this.$router.push('/admin');
                 
            })
            // alert(this.loginForm.name);
            // alert(this.loginForm.pass);


          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
}
</script>

<style lang="scss" scoped>

 .container-main{
  // position: relative;
  width: 100%;
  height: 100%;
  // border:1px solid red;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  overflow: hidden;
  .el-form-item__label i{
    font-size: 18px;
    // width: 75px;
  }
  .login-wrap{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 700px;
    height: 560px;
    
    border-radius: 13px;
    background: #fff;
    overflow: hidden;
    transform: translate(-50%, -50%);
    box-shadow: -1px 0px 30px 1px rgba(0, 15, 151, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>
