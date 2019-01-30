var express = require('express');
var router = express.Router();
var Test = require('../models/test');

/* GET home page. */
router.get('/', function(req, res, next) {
  Test.create({ title: 'test' }, function (err, test) {
    if (err) return handleError(err);
    res.render('index', { title: test.title });
  });  
});

module.exports = router;