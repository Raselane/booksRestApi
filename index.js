const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(()=>{
    console.log("Connected to mongodb atlas");
    
}).catch(error =>{
    console.log("Something wrong happened", error);
})

app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
})

