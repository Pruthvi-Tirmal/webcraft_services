const mongoose = require('mongoose');

// About schema

const aboutSchema = mongoose.Schema({
    loggedUser: {
        type: String,
        required: true,
    },
    aboutInfo: {
        type: String,
        required: true,
    }
})

// modal

const aboutModal = mongoose.model('aboutsection', aboutSchema);
module.exports = aboutModal;