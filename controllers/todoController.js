const bodyParser = requrie('body-parser')
const data = [
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

    app.post('/todo', (req, res) => {
        console.log(req)
    })

    app.delete('/todo', (req, res) => {
        
    })
} 


