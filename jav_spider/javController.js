'use strict'

const superagent = require('superagent')
const cheerio = require('cheerio')

module.exports = function(req, res){
  superagent.get('http://findjavlib.tumblr.com/')
    .end((err, data)=>{
      res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'})
      res.end(`{"url": "http://${handleHtml(data.text)}"}`)
    })
}

function handleHtml(html){
  const $ = cheerio.load(html)
  const text = $('#posts .body-text a').text()
  return text
}
