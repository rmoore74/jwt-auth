var express  = require('express');
var router   = express.Router();
var mongoose = require('../../config/mongoose.js');
var User     = require('mongoose').model('User');

router.get('/', function(req, res) {
    res.json({ 'message': 'base api route' });
});

router.get('/authenticate', function(req, res) {
    
});

router.post('/adduser', function(req, res) {
    
});

router.post('/removeuser', function(req, res) {

});

module.exports = router;
