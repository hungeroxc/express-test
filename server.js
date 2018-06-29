const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// app.use(bodyParser.json())

// 固定路由
app.get('/', (req, res) => {
    const json = {
        name: 'oxc',
        age: 25
    }
    res.send(json)
})

// 变化路由
app.get('/profile/:id', (req, res) => {
    res.send(`profile page ${req.params.id}`)
})

// 正则匹配路由
app.get('/reg/a?:b', (req, res) => {
    res.send('abcd')
})

// 查询字符串
app.get('/string', (req, res) => {
    const query = req.query
    res.send(query)
})

// post请求
app.post('/', bodyParser.json(), (req, res) => {
    console.dir(req.body)
    res.send(req.body)
})

app.listen(3000)
console.log('listening to port 3000')

