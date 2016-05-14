// set up modules
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

// set up view engine
app.set('views', path.join(__dirname, 'app/views/'));
app.set('view engine', 'pug');

// set up logging, bodyparser, cookieparser
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// make css and images static
app.use('/images', express.static(path.join(__dirname) + '/app/views/images'));
app.use('/styles', express.static(path.join(__dirname) + '/app/views/styles'));

// set up routes
app.use('/', require('./app/routes/index'));
//app.use('/app', require('./app/routes/users'));

// start server on port 3000
app.listen(3000, function() {
    console.log("Server listening on port 3000");
});
