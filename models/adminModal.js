const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email: {
        type: "String",
        required: true,
        unique:true,
    },
    password: {
        type: "String",
        required: true
    }
})

const adminModal = mongoose.model('adminCred', adminSchema);
module.exports = adminModal;