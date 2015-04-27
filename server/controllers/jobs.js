/**
 * Created by rafaelpossas on 4/16/15.
 */
var jwt = require('../services/jwt')

exports.getJobs = function(){
  return function(req,res){
    if(!req.headers.authorization){
      return res.status(401).send({message: 'You are not authorized'});
    }
    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decote(token,secret);

    if(!payload.sub){
      res.status(401).send({message:'You are not authorized'});
    }
    var jobs = [
      'Angular Developer',
      'Data Scientist',
      'NodeJS Developer',
      'Database Analyst'
    ]
    res.send(jobs)
  }
}