var mongoose = require('mongoose');
var config   = require('./config');

module.exports = function() {
    var db = mongoose.connect(config.db);

    require('../app/models/user.model');

    return db;
};
