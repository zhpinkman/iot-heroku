var express = require('express');
const { validationResult } = require('express-validator/check');
var router = express.Router();
var User = require("../../models/user");
var auth = require("../../utils/authorization");

router.post('/', async function(req, res, next){
	const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let username = req.body.data.username;
  console.log(username);
  let user = await User.findOne({ username: username });
  console.log(user);
  let Token = await auth.createToken(user);
  console.log(Token);
  // return res.json({
  //   data: { Token: Token }
  // });
  return res.status(200).send();












  \
}); 

module.exports = router;
