const express = require('express'),
     router = express.Router(),
     User = require('../models/User');

router.use('/api/user', require('./user'));

router.use('/api/auth', require('./auth'));

router.get('/api', (req, res ) => {
  res.json("Hello from Crud");
});

module.exports = router ;

