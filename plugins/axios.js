import axiosConfig from './axiosConfig';
console.log("axiosConfig:",axiosConfig)

/**
 * 扩展axios
 * 
 */
// export default function({ $axios, redirect }){
  export default function(ctx){
    console.log("plugins插件配置对象：",ctx);
    console.log("ctx.$axios.defaults：",ctx.$axios.defaults);
  // 添加请求拦截器
  ctx.$axios.interceptors.request.use(
    config => {
      // do something before request is sent
      
      // 在发送请求之前做些什么
    // let token = storage.getStorage("token") || 0; // 令牌
    // let tid = storage.getStorage("tid") || 1; // 租户id
    // let envName = storage.getStorage("envName") || 2; // 环境变量
    // let currentOrgId = storage.getStorage("currentOrgId") || 0; // 区域id
    let token =  0; // 令牌
    let tid = 1; // 租户id
    let envName =  2; // 环境变量
    let currentOrgId =  3; 
    let data = { token, tid, envName, currentOrgId };
    if (!config.data || JSON.stringify(config.data) === "{}") {
      config.data = data;
    } else if (!config.data.hasOwnProperty("currentOrgId")) {
      Object.assign(config.data, data);
    }
     console.log('请求拦截器config:',config)
      return config
    },
    error => {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  )
  // 添加相应拦截器
  ctx.$axios.interceptors.response.use(response =>{
    // if (response.headers.formtoken) {
    //   // storage.setStorage("formToken", response.headers.formtoken);
    // }
    console.log("相应拦截器response:",response)
    return response;
  },err =>{
    // 对相应错误做些什么
    return Promise.reject(err)
  })
  
  ctx.$axios.onRequest(config => {
        console.log('Making request to ' + config)
        console.log("请求config:",config)
        console.log(process.env.HOST)
      })
    
  ctx.$axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      ctx.redirect('/400')
    }
  })
}
