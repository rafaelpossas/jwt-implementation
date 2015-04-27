/**
 * Created by rafaelpossas on 3/25/15.
 */
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');
var express = require('express');
var router = express.Router();


module.exports = function(config,logger){

  var app = express();


  // uncomment after placing your favicon in /public
  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
  });

  var users = require(config.rootPath+'/server/routes/users');
  var servers = require(config.rootPath+'/server/routes/servers')(router,config);
  var jobs = require(config.rootPath+'/server/routes/jobs');

  app.use('/users', users);
  app.use('/servers',servers);
  app.use('/jobs',jobs)



  return app;

}