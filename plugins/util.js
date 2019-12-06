// 对vue实例对象的扩展

import Vue from 'vue'
// import Logo from '@/components/logo'
import Cookie from '@/assets/util/cookie' //cookie处理
import Dates from '@/assets/util/date' //扩展对日期的处理
import Storage from '@/assets/util/storage' //扩展LOCALSTORAGE处理
import UrlQuery from '@/assets/util/urlQuery' //扩展对urlquery的处理


/**
 * 扩展对urlquery的处理
 */
Object.keys(UrlQuery).forEach((key,index) =>{
    console.log(key)
    Vue.prototype[`$${key}`] = UrlQuery[key];
})

/**
 * 扩展LOCALSTORAGE处理
 * 
 */
Object.keys(Storage).forEach((key,index) =>{
    Vue.prototype[`$${key}`] = Storage[key];
})

/**
 * //扩展对日期的处理
 * this.dateFormat() 
    this.datePlus24()
    this.dateTransform()
    this.UTCto0800()
 * 
 */
    Object.keys(Dates).forEach((key,index) =>{       
        Vue.prototype['$' + key] = Dates[key];
    })

/**
 * 将cookie增加为全局方法，扩展到vue实例上面 this.xxx
 *  this.setCookie()
    this.getCookie()
    this.delCookie()
    this.clearCookie()
 */
Object.keys(Cookie).forEach((key,index) =>{
    Vue.prototype['$'+ key] = Cookie[key];

})

