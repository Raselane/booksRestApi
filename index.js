const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const booksRoute = require("./routes/books")

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()) //We are telling our server that we will be posting json data
app.use(express.urlencoded({extended: true})) // We are telling our server that we will also post data as arrays, array of objects

//routes
app.use("/api/books", booksRoute)
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(()=>{
    console.log("Connected to mongodb atlas");
    
}).catch(error =>{
    console.log("Something wrong happened", error);
})

app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
})

