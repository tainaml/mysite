var express = require('express')
var app = express()
var index = require('./routes/index')
const bodyParser = require('body-parser')

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('3000 is the magic port');  //adicionando a porta

app.set('view engine', 'ejs')    // Setamos que a engine será o ejs

app.use(bodyParser.urlencoded()) 
app.use(express.static(__dirname + "/public"))


