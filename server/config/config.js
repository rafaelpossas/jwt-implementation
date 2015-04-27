/**
 * Created by rafaelpossas on 3/25/15.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {

  development: {
    db: 'mongodb://localhost/procymo-admin',
    rootPath: rootPath,
    port: process.env.PORT || 3000,
    token: '7c50ca8c117b0603aefaad1f2f9c5c46c2d2784157cddd4d13085dbba3b6fb2b'
  },
  production:{
    db: 'mongodb://rafaelpossas:rage1283@ds041821.mongolab.com:41821/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 80,
    token: '7c50ca8c117b0603aefaad1f2f9c5c46c2d2784157cddd4d13085dbba3b6fb2b'
  }
}