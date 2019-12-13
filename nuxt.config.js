
const Ii8N = require('./assets/lang/Ii8N.js');

module.exports = {
  mode: 'universal',
  /**
   * Nuxt.js 让你可以配置在客户端和服务端共享的环境变量
   * 通过 process.env.baseUrl
   *通过 context.baseUrl，请参考 context api
   *你可以使用 env 属性配置第三方服务的公钥信息
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /**
   * 配置Nuxt.js应用程序的服务器实例变量
   * */ 
  server: {
    port: 4000, // default: 3000    
  },
  /*
  ** 该配置项用于配置应用默认的meta标签
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ],
    // script:[{src:'~/assets/util/rem'}]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  
  
  /*
  ** Global CSS
  */
 
  css: [
    //全局样式初始化
    '@/assets/stylus/main.scss',
    'element-ui/lib/theme-chalk/index.css',
    //element-ui基于断点的隐藏类
    'element-ui/lib/theme-chalk/display.css',
    //集成font-awesome图标库 fa fa-thumbs-up
    '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
    
  ],
  /*
  ** Plugins to load before mounting the App
  该配置项用于配置那些需要在 根vue.js应用
   实例化之前需要运行的 Javascript 插件
   plugins 属性配置的所有插件会在 Nuxt.js 应用初始化之前被加载导入。
   */
  plugins: [
    '@/plugins/element-ui',
    "~/plugins/axios",//扩展axios
    { src: '~/plugins/inject', mode: 'client' }, //同时在context，Vue实例，甚至Vuex中同时注入
    '~/assets/util/filter', //增加全局顾虑器filter
    /**
     * 集成jquery，同时注入context，Vue，Vuex
     * 使用inject方法,它是plugin导出函数的第二个参数。 
     * 将内容注入Vue实例的方式与在Vue应用程序中进行注入类似。
     * 系统会自动将$添加到方法名的前面
     * 使用方法：
     * mounted () {
      this.$myInjectedFunction('works in mounted')
    },
    asyncData (context) {
      context.app.$myInjectedFunction('works with context')
    }
    */
   '~/plugins/jquery', 
   { src: '~/plugins/util.js', ssr: false },//扩展全局方法
   '@/plugins/main',//扩展全局组件components
   { src: '~/assets/util/rem', ssr: false }, //px转rem方法
  //  { src: '~/plugins/rem.js', ssr: false }, //px转rem方法
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
      添加Nuxt模块
      modules是Nuxt.js扩展，可以扩展它的核心功能并添加无限的集成
      常用模块列表：https://github.com/topics/nuxt-module
  */
  modules: [
    //i18n国际化
    'nuxt-i18n',
    /**
     * 实现接口代理
     */
    '@nuxtjs/axios',
    // 请求代理配置，解决跨域
    // '@nuxtjs/proxy'
  ],
  // I18国际化配置项
  i18n:Ii8N,
  //配置代理
  axios: {
    // baseUrl:"",//设置统一的基础url，线上环境关闭代理使用他
    // prefix: '/api', // 表示给请求url加个前缀 /api
    // credentials: true, // 表示跨域请求时是否需要使用凭证
    proxy: true //表示开启代理
  },
  //配置代理
  proxy: {
    '/home': {
      target: 'https://www.apiopen.top/api.html', //目标接口域名
      pathRewrite: { 
        '^/home': '/',  //把api替换**，'^/api': '/'：把api替换成/
        // changeOrigin: true // 表示是否跨域
      }
    },
    '/api': {
      target: 'https://api.apiopen.top', //目标接口域名
      pathRewrite: { 
        '^/api': '/',  //把api替换**，'^/api': '/'：把api替换成/
        // changeOrigin: true // 表示是否跨域
      }
    },
    
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    //配置 Webpack 插件
    plugins:[
      // new webpack.ProvidePlugin({
      //     '$' : 'jquery' 
      // })
    ],
    // vendor:['axios']//防止重复打包
    /*
    ** You can extend webpack config here
    扩展webpack的配置
    */
    extend (config, ctx) {

      

    },
    /**
       * 配置自动px转rem
       */
      // postcss:[
      //   require('postcss-pxtorem')({
      //     // "rootValue": 75,结果为：设计稿元素尺寸/75，比如元素宽750px,最终页面会换算成 10rem
      //     rootValue: 100,//根元素的值10=>62.5%,rem换算：设计稿尺寸/跟元素(10)
      //     propList: [
      //       '*'
      //     ]
      //   }),
      //   //自动为css选择器添加前缀
      //   // require('autoprefixer')({
      //   //   browsers: ['Android >= 4.0', 'iOS >= 7']
      //   // })
      // ]
  }
}
