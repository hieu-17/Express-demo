var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user.route');

var port = 3000;

var app = express();
app.set('views', './views')
app.set('view engine', 'pug')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.render('index', {
    name: 'World'
}))
app.use(express.static('public'))
app.use('/users', userRoute);

app.listen(port, () => console.log(`Server listening on port + ${port}`))