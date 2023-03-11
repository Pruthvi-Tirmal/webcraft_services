const mongoose = require('mongoose');
// gallery Schema
const gallerySchema = mongoose.Schema({
    loggedUser: {
        type: String,
        required: true,
        trim: true
    },

    // *  every important to understand that we have object in mongodb if req.body don't have the name field then create a object like {files: req.body} here files are the name that we are passing explicitly to the mongoose (very imp)
    files: [{
        encoded: {
            type: String,
        },
        fileName: {
            type: String,
        }
    }]

})

// gallery Modal

const galleryModal = mongoose.model("gallerySection", gallerySchema);
module.exports = galleryModal;
