var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Gun_controller = require('../controllers/Gun');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Gun ROUTES ///
// POST request for creating a Gun.
router.post('/Gun', Gun_controller.Gun_create_post);
// DELETE request to delete Gun.
router.delete('/Gun/:id', Gun_controller.Gun_delete);
// PUT request to update Gun.
router.put('/Gun/:id', Gun_controller.Gun_update_put);
// GET request for one Gun.
router.get('/Gun/:id', Gun_controller.Gun_detail);
// GET request for list of all Gun items.
router.get('/Gun', Gun_controller.Gun_list);
module.exports = router