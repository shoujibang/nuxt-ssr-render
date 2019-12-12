export default function (ctx) {
  console.log("ctx:",ctx)
  let { userAgent, req ,redirect} = ctx
  if (process.server && !req) return
  // alert()
  // userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
  // console.log(userAgent);
  // if (!store.state.authenticated) {
  //   return redirect('/login')
  // }
}
