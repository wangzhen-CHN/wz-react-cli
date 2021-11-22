const express = require('express')
const path = require('path')

const app = express()

/** 健康检查 */
app.get('/check.txt', (req, res) => {
  res.json({
    message: 'OK'
  })
})
app.use(express.static(__dirname, { index: false }))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000, function () {
  console.log('开始监听3000端口')
})
