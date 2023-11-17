const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
// Define the account schema
const accountSchema = new Schema({
  username: String,
  password: String
}); 
// Apply the passportLocalMongoose plugin to the schema
accountSchema.plugin(passportLocalMongoose);
// Export the model based on the schema
module.exports = mongoose.model("Account", accountSchema);