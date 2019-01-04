var express = require('express');
var router = express.Router();
var login = require('./login.js');
var signup = require('./signup.js');

router.use('/login', login); 

router.use('/signup', signup);

module.exports = router;
