const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const multer =require('multer')

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


// 文件上传
const createFolder = (folder) => {
    try {
        fs.accessSync(folder)
    } catch (e) {
        fs.mkdirSync(folder)
    }
}
const uploadFolder = './uploads/'

createFolder(uploadFolder)

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, uploadFolder)
    },
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({storage})
app.get('/form', (req, res) => {
    const form = fs.readFileSync('./upload.html', {encoding: 'utf8'})
    res.send(form)
})
app.post('/upload', upload.single('logo'), (req, res) => {
    res.send({'ret_code': 0})
})

// 模板引擎
app.set('view engine', 'ejs')
app.get('/ejs/:name', (req, res) => {
    const person = req.params.name
    res.render('ejs', {person})
})

app.listen(3000)
console.log('listening to port 3000')

