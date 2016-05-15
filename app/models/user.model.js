var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var User = new Schema({
    username : String,
    email    : String,
    password : String
});

mongoose.model('User', User);
