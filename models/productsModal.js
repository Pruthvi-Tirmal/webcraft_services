const mongoose = require('mongoose');

// About schema

const productsSchema = mongoose.Schema({
    loggedUser: {
        type: String,
        required: true,
    },
    productsInfo: {
        type: String,
        required: true,
    },
    files: [{
        encoded: {
            type: String,
        },
        fileName: {
            type: String,
        }
    }]
})

// modal

const productsModal = mongoose.model('productssection', productsSchema);
module.exports = productsModal;