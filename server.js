/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/

const express = require('express')
const app = express()

app.get('/', function(req , res){
    res.send('<bold>Hello</bold>')
})

app.get('/contact', function(req, res){
    res.send('here you can contact me')
})

app.get('/about', function(req, res){
    res.send('This is me, Prajwal')
})

app.get('/hobbies', function(req, res){
    res.send('<ul><li>ME</li><li>MY LIFE</li><li>MY WISH</li></ul>')
})
app.listen(3000, function(){
    console.log('New Terminal')
})