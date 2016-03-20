'use strict'

const http = require('http')
const Router = require('./Router')
const Redis = require("redis")
const redis = Redis.createClient()
const router = new Router()

const homeController = require('./homeController')
const getTimesController = require('./getTimesController')
const javController = require('./javController')

redis.on("error", function (err) {
  console.log("Error " + err)
})

http.createServer((req, res)=>{

  router.init(req, res)
  
  router.get('/', homeController)
  router.get('/javAPI', javController)
  router.get('/getTimes', getTimesController)

}).listen(3000)
