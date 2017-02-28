var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/detail', function(req, res, next) {
  res.render('customer-detail', { title: 'Express' });
});

router.get('/gongdan', function(req, res, next) {
  res.render('customer-gongdan', { title: 'Express' });
});
router.get('/gongdan-list', function(req, res, next) {
  res.render('gongdan-list', { title: 'Express' });
});

router.get("/:pagename",function(req,res,next){
  res.render(req.params.pagename, { title: 'Express' });
})
router.get("/:page/:pagename",function(req,res,next){
  res.render(req.params.page+"/"+req.params.pagename, { title: 'Express' });
})

module.exports = router;
