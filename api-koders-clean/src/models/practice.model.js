const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true,
        trim: true
    },
    repo: {
        type: String,
        required: true,
        trim: true,
        match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    },
    koder:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Koder',
        required: true,
        trim: true,
    },
    
})

module.exports = mongoose.model('Practice', practiceSchema);

