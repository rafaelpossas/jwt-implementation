/**
 * Created by rafaelpossas on 3/25/15.
 */
var https = require('https');

exports.performAction = function(config){
  return function(req,res){
    var options = {
      method: 'POST',
      host: 'api.digitalocean.com',
      path: '/v2/droplets/'+req.params.serverid+'/actions',
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + config.token}
    };

    var request = https.request(options,function(response) {
      // Continuously update stream with data
      var body = '';

      response.on('data', function (chunk) {
        body+= chunk;
      });
      response.on('end', function() {
        res.send(JSON.parse(body));
      });
    });
    var body = {
      "type": req.params.actiontype
    };
    request.write(JSON.stringify(body));
    request.end();
  }
}


