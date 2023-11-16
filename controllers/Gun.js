var Gun = require('../models/Gun');
// List of all Gun
exports.Gun_list = function(req, res) {
res.send('NOT IMPLEMENTED: Gun list');
};
// for a specific Gun.
exports.Gun_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Gun detail: ' + req.params.id);
};
// Handle Gun create on POST.
exports.Gun_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Gun create POST');
};

    
// Handle Gun update form on PUT.
exports.Gun_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Gun update PUT' + req.params.id);
};

// List of all Gun
exports.Gun_list = async function(req, res) {
    try{
    theGun = await Gun.find();
    res.send(theGun);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.Gun_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Gun.findById( req.query.id)
    res.render('Gundetail',
    { title: 'Gun Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }

// Handle Gun create on POST.
exports.Gun_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gun();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Gun_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.price = req.body.price;
    document.version = req.body.version;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Gun delete on DELETE.
    exports.Gun_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Gun.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
    
    

