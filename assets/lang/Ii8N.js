let zh = require('./zh'); //中文语言包
let en = require('./en');//英文语言包
// 加载element-ui语言包
let enLocale = require('element-ui/lib/locale/lang/en');
let zhLocale = require('element-ui/lib/locale/lang/zh-CN');


//合并语言包自定义和element-ui语言包
// const mergeEN = Object.assign(enLocale.default,en);
// const mergeZH = Object.assign(zhLocale.default,zh);

const mergeZH = Object.assign(zhLocale.default, zh);
const mergeEN = Object.assign(enLocale.default, en);

const Ii8N = {
    //语言包列表
    locales:[
      {
        code: 'zh',
        iso: 'zh-ZH',
        name: 'English'
      },{
        code: 'en',
        iso: 'en-US',
        name: '中文'
      },
      
  ],
    defaultLocale:'zh',
    //// vue-i18n 配置
    vueI18n:{
        fallbackLocale: 'zh',
        messages: {
            en: mergeEN,
            zh: mergeZH
        }

    }
}

module.exports = Ii8N;
// export default Ii8N;




