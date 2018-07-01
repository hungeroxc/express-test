const bodyParser = require('body-parser')
const urlencodeParser = bodyParser.urlencoded({extended: false})
// 因为mongoose并且链接
const mongoose = require('mongoose')
mongoose.connect('mongodb://hungeroxc:oxc19930221@ds223161.mlab.com:23161/hungeroxctodo')
// 定义一个schema
const todoSchema = new mongoose.Schema({
    item: String
})
// 定义model
const Todo = mongoose.model('Todo', todoSchema)

module.exports = app => {
    app.get('/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            if(err) throw err
            res.render('todo', {todos: data})
        })
    })

    app.post('/todo', urlencodeParser, (req, res) => {
        const item = Todo(req.body).save((err, data) => {
            if(err) throw err
            res.json(data)
        })
    })

    app.delete('/todo/:item', (req, res) => {
        
        Todo.find({item: req.params.item.replace(/-/g, ' ')})
        .remove((err, data) => {
            if(err) throw err
            res.json(data)
        })
    })
} 


