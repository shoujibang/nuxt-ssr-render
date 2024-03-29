/**
 * 扩展axios
 */
export default function({ $axios, redirect }){
  debugger;
    $axios.onRequest(config => {
        console.log('Making request to ' + config)
        console.log(config)
        console.log(process.env.HOST)
      })
    
      $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
          redirect('/400')
        }
      })
}
