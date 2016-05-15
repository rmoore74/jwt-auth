var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    res.render('index', { title: 'JWT Auth Example' });
});

router.get('/login', function(req, res) {
    res.render('login', { title: 'Login - JWT Auth Example' });
});

router.get('/register', function(req, res) {
    res.render('register', { title: 'Register - JWT Auth Example' });
});

module.exports = router;
