const express = require('express');
const mongoose =  require('mongoose')
const app = express()
const UserModel = require('./models/User.model')


app.use(express.json())

const accountRouter = require("./routes/user.routes");
app.use("/account", accountRouter);
  

//rota inicial

app.get('/', (req, res)=>{

        res.json({message:'express'})
})





//porta 
mongoose.connect('mongodb+srv://root:090219@cluster0.w1ttaox.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado ao mongodb")
    app.listen(4000)
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000)
