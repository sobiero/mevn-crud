const express = require('express'),
     router = express.Router(),
     User = require('../models/User');

router.use('/api/user', require('./user'));

router.get('/api', function(req, res ) {
  res.json("Hello from Crud");
});

module.exports = router ;

