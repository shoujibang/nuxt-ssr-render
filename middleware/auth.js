// import Cookie from '@/assets/util/cookie'
// console.log(Cookie);
export default function (ctx) {
  console.log("ctx:",ctx)
  let { store,userAgent, req ,redirect,app} = ctx
  
  if (process.server && !req){

    return
  } 
 
 
  // userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
  // console.log(userAgent);
  if (!store.state.authenticated) {
    return redirect('/user/login')
  }
}
