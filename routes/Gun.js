var express = require('express');
const Gun_controllers= require('../controllers/Gun');
var router = express.Router();
/* GET Gun */
router.get('/', Gun_controllers.Gun_view_one_Page);
// GET request for one Gun.
router.get('/Gun/:id', Gun_controllers.Gun_detail);
module.exports = router;
/* GET detail Gun page */
router.get('/detail', Gun_controllers.Gun_view_one_Page);
/* GET create costume page */
router.get('/create', Gun_controllers.Gun_create_Page);
/* GET create update page */
router.get('/update', Gun_controllers.Gun_update_Page);
/* GET delete costume page */
router.get('/delete', Gun_controllers.Gun_delete_Page);
