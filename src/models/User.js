 const {Schema, model } = require('mongoose');

 const userSchema = new Schema({
     firstName : String,
     lastName : String,
     avatar : String,
     phone : String,
     password : String,
 });

 module.exports = model('User', userSchema);