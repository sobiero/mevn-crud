var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
  res.json("Hello from CRUD User");
});

module.exports = router;
