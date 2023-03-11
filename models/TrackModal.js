const mongoose = require('mongoose');

// Schema
const trackSchema = mongoose.Schema({
    loggedUser: {
        type: String,
        required: true,
    },
    home: {
        type: Boolean,
        default: false,
    },
    about: {
        type: Boolean,
        default: false,
    },
    products: {
        type: Boolean,
        default: false,
    },
    gallery: {
        type: Boolean,
        default: false,
    },
    payment: {
        type: Boolean,
        default: false,
    },
    paymentToUs: {
        type: Boolean,
        default: true,
    },
    domain: {
        type: Boolean,
        default: false
    }
})

// modal
const trackModal = mongoose.model("trackSection", trackSchema);

module.exports = trackModal;