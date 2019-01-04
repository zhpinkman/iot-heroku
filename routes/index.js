var express = require('express');
var router = express.Router();
var user = require('./User');

/* GET home page. */

app = express();
app.set('view engine', 'ejs');

router.get('/', function (req, res, next) {
    return res.render('login.ejs');
});

router.use('/user', user);

module.exports = router;
