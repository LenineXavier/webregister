const mongoose = require("mongoose");
const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    name:{type:String, required: true, trim: true},
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      password:{type:String,require:true}
     
  
})

const UserModel = model("User", UserSchema);

module.exports = UserModel;