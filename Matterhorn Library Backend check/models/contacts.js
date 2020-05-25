const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    book_name:{
        type: String,
        required : true
    },
    author_name:{
        type: String,
        required : true
    },
    shelf_no:{
        type: String,
        required : false
    }
})

const Contact = module.exports = mongoose.model('Contact',ContactSchema);