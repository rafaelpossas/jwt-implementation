/**
 * Created by rafaelpossas on 3/25/15.
 */
var servers = require('../controllers/servers');

module.exports = function(router,config,https){
  router.get('/:serverid/:actiontype',servers.performAction(config));
  return router;
}
