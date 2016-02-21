'use strict'

const superagent = require('superagent')
const cheerio = require('cheerio')
const http = require('http')

http.createServer((request, response)=>{
  superagent.get('http://findjavlib.tumblr.com/')
    .end((err, res)=>{
      response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'})
      response.end(`{"url": "http://${handleHtml(res.text)}"}`)
    })

}).listen('3001')



function handleHtml(html){
  const $ = cheerio.load(html)
  const text = $('#posts .body-text a').text()
  return text
}
