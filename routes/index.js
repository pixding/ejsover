var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/detail', function(req, res, next) {
  res.render('customer-detail', { title: 'Express' });
});

module.exports = router;
