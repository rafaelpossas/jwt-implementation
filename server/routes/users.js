var express = require('express');
var router = express.Router();
var users = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',users.createUser);
module.exports = router;
