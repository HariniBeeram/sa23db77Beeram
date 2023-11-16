var Gun = require('../models/Gun');
// List of all Gun
exports.Gun_list = function(req, res) {
res.send('NOT IMPLEMENTED: Gun list');
};
// for a specific Gun
exports.Gun_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await sweets.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    }
// Handle Gun create on POST.
exports.Gun_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Gun create POST');
};

    
//Handle Gun update form on PUT.
exports.Gun_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Gun.findById( req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.name = req.body.name;
    if(req.body.price) toUpdate.price = req.body.price;
    if(req.body.quantity) toUpdate.quantity = req.body.version;
    let result = await toUpdate.save();
    console.log("Success " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    }

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
    // Handle building the view for creating a costume.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.Gun_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Guncreate', { title: 'Gun Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a costume. 
    // query provides the id
    exports.Gun_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Gun.findById(req.query.id)
    res.render('Gunupdate', { title: 'Gun Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
    exports.Gun_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Gun.findById(req.query.id)
    res.render('Gundelete', { title: 'Gun Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
    
    

