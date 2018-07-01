const bodyParser = require('body-parser')
const urlencodeParser = bodyParser.urlencoded({extended: false})

let data = [
    {
        item: 'get milk'
    },
    {
        item: 'walk dog'
    },
    {
        item: 'kick some coding ass'
    }
]

module.exports = app => {
    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data})
    })

    app.post('/todo', urlencodeParser, (req, res) => {
        data.push(req.body)
        res.json(data)
    })

    app.delete('/todo/:item', (req, res) => {
        
        data = data.filter(todo => {
            const list = todo.item.replace(/ /g, "-") !== req.params.item
            return list
        })
        res.json(data)
    })
} 


