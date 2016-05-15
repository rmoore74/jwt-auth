// set up modules
var morgan       = require('morgan');
var path         = require('path');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var express      = require('express');
var mongoose     = require('./config/mongoose.js');

var db  = mongoose();
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
app.use('/', require('./app/routes/index.routes'));
app.use('/app', require('./app/routes/users.routes'));

// set up api routes
app.use('/api', require('./app/api/users.api'));

// start server on port 3000
app.listen(3000, function() {
    console.log("Server listening on port 3000");
});
