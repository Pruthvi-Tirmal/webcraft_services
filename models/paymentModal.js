
const mongoose = require('mongoose');

// payment schema
const paymentSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
        orderId: String,
        paymentId: String,
        signature: String
    },
    // loggedUser: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    date: { type: Date, default: Date.now },
})

// payment order
const Payment = mongoose.model('payment', paymentSchema);

module.exports = Payment;