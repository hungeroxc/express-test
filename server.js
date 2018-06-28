const express = require('express')

const app = express()

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

app.listen(3000)
console.log('listening to port 3000')

