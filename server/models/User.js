const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 const UserSchema = new Schema({
   Username:{
        type:String,
        required:true,
        unique:true,
    },
   
   password:{
        type:String,
        required:true,
    }
    
 });

 module.exports = mongoose.model('User',UserSchema);