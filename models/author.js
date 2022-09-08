const mongoose = require('mongoose');

// Author Schema
const AuthorSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
   
    age:{
        type: Number,
        required: true,
        minlength:10,
        maxlength:150
    }
})

module.exports = new mongoose.model('Author', AuthorSchema);