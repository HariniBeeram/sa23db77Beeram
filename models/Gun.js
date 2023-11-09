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
        required: true
    }
});
module.exports = mongoose.model("Gun",GunSchema)