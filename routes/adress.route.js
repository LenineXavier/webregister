const express = require("express");
const router = express.Router();

const AdressModel = require("../models/Adress.model");
const UserModel = require("../models/User.model");

//Criar endereço

router.post("/adress", async (req, res)=>{
    const user = await UserModel.findOne({_id:req.body.user});
})