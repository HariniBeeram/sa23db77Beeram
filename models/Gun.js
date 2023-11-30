const mongoose = require("mongoose")
const GunSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    version:{
        type:Number,
        required: true, 
        min:0,
        max:5000
       
        
    }
});
module.exports = mongoose.model("Gun",GunSchema);


