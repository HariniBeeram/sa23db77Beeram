var express = require('express');
const Gun_controllers = require('../controllers/Gun');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
};

/* GET Gun */
router.get('/', Gun_controllers.Gun_view_one_Page);

// GET request for one Gun.
router.get('/Gun/:id', Gun_controllers.Gun_detail);

/* GET detail Gun page */
router.get('/detail', secured,Gun_controllers.Gun_view_one_Page);

/* GET create costume page */
router.get('/create',secured, Gun_controllers.Gun_create_Page);

/* GET create update page */
router.get('/update', secured , Gun_controllers.Gun_update_Page);

/* GET delete costume page */
router.get('/delete',secured, Gun_controllers.Gun_delete_Page);



module.exports = router;
