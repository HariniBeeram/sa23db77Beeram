var express = require('express');
const Gun_controllers= require('../controllers/Gun');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Gun', { title: 'Search Results Gun' });
});

/* GET Gun */
router.get('/', Gun_controllers.Gun_view_all_Page );
router.get('/Gun/:id', Gun_controllers.Gun_detail);

/* GET detail Gun page */
router.get('/detail', Gun_controlers.Gun_view_one_Page);
module.exports = router;
