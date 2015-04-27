/**
 * Created by rafaelpossas on 4/16/15.
 */
/**
 * Created by rafaelpossas on 3/25/15.
 */
var express = require('express');
var router = express.Router();
var jobs = require('../controllers/jobs');

router.get('/', jobs.getJobs());

module.exports = router;