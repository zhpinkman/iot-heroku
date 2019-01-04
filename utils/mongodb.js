const mongoose = require('mongoose');


mongoose.connect('mongodb://iotdb:123QWEasd@ds149034.mlab.com:49034/iot', { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log('cant connect to DB');
  } else {
    console.log('connected to mongoDB');
  }
});



module.exports = mongoose;
