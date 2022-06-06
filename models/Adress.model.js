const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");


const adressSchema = new Schema({
    country:{
        type:String,
        require:true,
        minlength:1,
        trim:true,
    },

    state:{
        type:String,
        require:true,
        minlength:1,
        trim:true,
    },

    city:{
        type:String,
        require:true,
        minlength:1,
        trim:true,
    },

    cep:{
        type:Number,
        require:true,
        minlength:1,
     },

     street:{
        type:String,
        require:true,
        minlength:1,
        trim:true,
    },


})

module.exports = mongoose("Adress", adressSchema )