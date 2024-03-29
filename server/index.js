const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

app.use(cookieParser('bang')); //应用cookie中间件
app.use(bodyParser.json());//boday中间件
// JWT middleware
// app.use(
//   jwt({
//     secret: 'dummy'
//   }).unless({
//     path: '/api/auth/login'
//   })
// )
const auth = require('./router/auth'); //引入权限路由
//将权限路由通过use添加到中间件
app.use("/auth",auth);

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
