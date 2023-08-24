const mongoose = require('mongoose');

const koderSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        trim: true
    
    },
    lastName : {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        trim: true
    },
    program : {
        type: String,
        enum: ['javascript', 'python', 'ios'],
        required: true
    },
    email: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }

})


module.exports = mongoose.model('Koder', koderSchema);