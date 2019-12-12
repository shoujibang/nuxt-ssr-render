//同时在context，Vue实例，甚至Vuex中同时注入

import Cookie from '@/assets/util/cookie' //cookie处理
import Storage from '@/assets/util/storage' //扩展LOCALSTORAGE处理
export default ({ app }, inject) => {
    /**
 * 扩展LOCALSTORAGE处理
 * 
 */
Object.keys(Storage).forEach((key,index) =>{
    inject(key, Storage[key])
})
    /**
 * 将cookie增加为全局方法，扩展到vue实例上面 this.xxx
 *  this.setCookie()
    this.getCookie()
    this.delCookie()
    this.clearCookie()
 */
Object.keys(Cookie).forEach((key,index) =>{
    inject(key, Cookie[key])
})

inject("keyAll", string =>{
    console.log("jkfdsfsdfsldmfkm")
})
   
  }