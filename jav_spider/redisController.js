const Redis = require("redis")
const redis = Redis.createClient()

module.exports = {
  addTime: ()=>{
    return redis.lpush('times', Date.now())
  },

  addIp: (req)=>{
    return redis.lpush('ips', req.connection.remoteAddress)
  },

  getTimes: (cb)=>{
    return redis.lrange('times', 0, 50, cb)
  },

  getIps: (cb)=>{
    return redis.lrange('ips', 0, 50, cb)
  },
}