const express = require('express')
// 初始胡实例
const app = express()

// 引入路由
const controllers = require('./controllers/todoController.js')

// 设置模板引擎
app.set('view engine', 'ejs')

// 使用静态资源中间件
app.use(express.static('./assets'))

// 执行路由
controllers(app)


// 监听端口
app.listen(3000)

