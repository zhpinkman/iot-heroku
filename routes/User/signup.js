var express = require('express');
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
var router = express.Router();
var config = require('../../utils/config');
var User = require('../../models/user');

router.post('/', async function(req, res, next){
    const errors = validationResult(req);
    console.log('1');
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let newUser = req.body.data;
    console.log(newUser)
    newUser.password = await bcrypt.hash(newUser.password, config.saltRounds);

    console.log('2');
    try {
        let user = await User.create(newUser);
    }
    catch (err) {
        return res.status(500).send();
    }

    return res.status(200).send();
}); 

module.exports = router;
