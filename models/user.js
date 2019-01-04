var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema= mongoose.Schema({
    username: String,
    password: String,
    channelId: String,
    members: [String]
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User',userSchema);