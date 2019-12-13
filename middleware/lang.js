/**
 * 切换语言时，更改路由，
 * 同时更新store中语言类型
 */
import getCookie from '@/assets/util/get-cookie'


export default function (ctx) {
    console.log(ctx);
    let {store, route, redirect, req} = ctx;
    const {lang} = getCookie(req) //在cookie拿到当前设置的语言
    //如果有改变vuex更新store中语言类型
    if (lang) {
        store.commit('setLang', lang)
      }
    //切换语言是更改路由通过vuerouter
    const routePath = route.path
    if (store.state.lang === 'en' && routePath.indexOf(`/${store.state.lang}/`) === -1) {
        console.log('redirect')
        return redirect({path: `/${store.state.lang}${routePath}`, query: route.query})
    }


    


  }



