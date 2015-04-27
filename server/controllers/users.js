/**
 * Created by rafaelpossas on 3/28/15.
 */

var User = require('../models/User');
var jwt = require('../services/jwt');

exports.createUser = function(req,res){
  var newUser = new User({
    email: req.body.email,
    password: req.body.password
  });


  newUser.save(function(err){
    if(err) next(err);

    var payload = {
      iss: req.hostname,
      sub: newUser.id
    }
    var token = jwt.encode(payload,"shhh...");

    res.status(200).send({
      user: newUser.toJSON(),
      token: token
    });
  });
}