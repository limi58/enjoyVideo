const redisController = require('./redisController')

module.exports = function(req, res){
  redisController.getTimes((err, times)=>{
    redisController.getIps((err, ips)=>{
      if(!times || !ips) {
        res.end(`The time or ip is null`)
        return
      }
      times = times.map((time)=>{
        return new Date(Number(time) + timezone()).toISOString().replace('T', ' ').replace('Z', '')
      })
      res.end(`The time is:\n${times.join('\n')}\n\nThe ip is:\n${ips.join('\n')}`)
    })
  })
  // redis.end()
}

function timezone(){
  return 3600 * 8 * 1000
}