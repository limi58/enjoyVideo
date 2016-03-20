'use strict'

const url = require('url')

class Router{

  constructor(){}

  init(req, res){
    this.req = req 
    this.res = res
  }

  get(pathname, callback){
    if(url.parse(this.req.url).pathname === pathname) callback(this.req, this.res)
  }

  

}

module.exports = Router