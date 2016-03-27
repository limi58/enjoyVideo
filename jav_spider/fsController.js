const fs = require('fs')
const path = require('path')

module.exports = {
  add: (req)=>{
    const name = Date.now() + '.txt'
    fs.writeFile(path.join(__dirname, 'file', name), req.connection.remoteAddress)
  },
}