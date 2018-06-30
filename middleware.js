const express = require('express')
const app = express()

// 中间件测试
// app.use((req, res, next) => {
//     console.log('first, middleware')
//     next()
//     console.log('first middleware after')
// })

// app.use((req, res, next) => {
//     console.log('second middleware')
//     next()
// })

// app.get('/', (req, res) => {
//     res.send('ok')
// })

// 中间件响应静态文件
app.use(express.static('public'))


app.listen(3000)