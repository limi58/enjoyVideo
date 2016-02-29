const redisController = require('./redisController')

module.exports = function(req, res){
  redisController.addIp(req)
  redisController.addTime()
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
  res.end(getHtml())
}

function getHtml(){
  return  `<!DOCTYPE html>
<html>
<head>
  <title>jav地址解析 - 米不过分</title>
  <meta charset="utf-8">
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
</head>
<body>

<div style="text-align: center;margin-top: 10%">
  <p>正在解析jav......</p>
  <p id="status">稍等......</p>
</div>

<script type="text/javascript">
  (function(){
    var xhr = new XMLHttpRequest()

    xhr.open('get', '/javAPI')
    xhr.send()

    xhr.addEventListener('readystatechange', function(){
      if(xhr.status == 200 && xhr.readyState == 4){
        location.assign(JSON.parse(xhr.responseText).url)
      }else{
        document.querySelector('#status').innerHTML = xhr.statusText
      }
    })
  })()
</script>
</body>
</html>`
}