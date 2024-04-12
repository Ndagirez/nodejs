const express=require('express')
const mongoose=require('mongoose')
require("dotenv/config")
const app= express()
mongoose.connect()

//app.listen(4000,()=>console.log('port is running'))//providing a pot name.
app.listen(process.env.port,()=>console.log('port is running'))//providing a pot name.