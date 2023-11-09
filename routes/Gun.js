var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Gun', { title: 'Search Results Gun' });
});

module.exports = router;

var express = require('express');
const Gun_controlers= require('../controllers/Gun');
var router = express.Router();
/* GET Gun */
router.get('/', Gun_controlers.Gun_view_all_Page );

module.exports = router;

