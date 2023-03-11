const mongoose = require('mongoose');

// Schema
const userPaymentSchema = mongoose.Schema({
    loggedUser: {
        type: String,
        required: true
    },
    files: [{
        encoded: { type: String, required: true },
        fileName: { type: String, required: true }
    }],
    bankName: {
        type: String,
        required: true,
    },
    ifscCode: {
        type: String,
        required: true,
    },
    accountHolder: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true,
    }
})

const userPaymentModal = mongoose.model('userPaymentSection', userPaymentSchema);
module.exports = userPaymentModal;