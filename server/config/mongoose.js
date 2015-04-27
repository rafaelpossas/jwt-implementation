/**
 * Created by rafaelpossas on 3/25/15.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(config){
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error',console.error.bind(console,'connection error....'));
  db.once('open',function callback() {
    console.log('procymo-admin db opened!!');
  });

  User.schema.methods.createDefaultUsers();

}

