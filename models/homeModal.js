const mongoose = require('mongoose');

// schema
const HomeSchema = mongoose.Schema({
    loggedUser: {
        type: String,
        required: true,
        trim: true
    },
    theme: {
        type: String,
        default: "bg-cyan-500"
    },
    nameTitle: {
        type: String,
        default: "Mr."
    },
    companyLogo: {
        type: String,
        default: "",
    },
    companyName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    founderName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    whatsappNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    facebook: {
        type: String,
        default: "",
        trim: true,
    },
    linkedIn: {
        type: String,
        default: "",
        trim: true,

    },
    instagram: {
        type: String, default: "",
        trim: true
    }
})

// modal
const HomeModal = mongoose.model('homesection', HomeSchema);
module.exports = HomeModal;