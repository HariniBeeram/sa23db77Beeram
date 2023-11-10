var Gun = require('../models/Gun');
// List of all Gun
exports.Gun_list = function(req, res) {
res.send('NOT IMPLEMENTED: Gun list');
};
// for a specific Costume.
exports.Gun_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Gun.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Gun create on POST.
exports.Gun_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Gun create POST');
};
// Handle Gun delete form on DELETE.
exports.Gun_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Gun delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Gun_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Gun.findById( req.params.id)
// Do updates of properties
if(req.body.Gun_type)
toUpdate.Gun_type = req.body.Gun_type;
if(req.body.name) toUpdate.name = req.body.name;
if(req.body.price) toUpdate.size = req.body.price;
if(req.body.version) toUpdate.version = req.body.version;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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

    // VIEWS
    // Handle a show all view
    exports.Gun_view_all_Page = async function(req, res) {
    try{
    theGun = await Gun.find();
    res.render('Gun', { title: 'Gun Search Results', results: theGun });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

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


   

    
    

