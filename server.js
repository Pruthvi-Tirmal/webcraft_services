// dot env
require('dotenv').config({ path: "./config.env" })
const express = require('express');
const app = express();
const cors = require('cors');
// db connection
require('./databaseConnection');
const PORT = process.env.PORT || 5000
// TODO : remove this afterward
const Payment = require('./models/paymentModal')

// middle ware
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
// routes
const cardInfo = require('./routes/cardInfoRoutes.js');
app.use('/api/new/card', cardInfo);
const adminGetter = require('./routes/adminGetter.js');
app.use('/api/admin', adminGetter);
// TODO: do separate page for payment
// ! for now use in server page
const Razorpay = require('razorpay')
app.get('/get-razor-pay-key', (req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID })
})

app.post('/create-order', async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_SECRET
        });
        console.log(req.body);
        const options = {
            amount: req.body.amount,
            currency: 'INR'
        }
        const order = await instance.orders.create(options);
        if (!order) return res.status(500).send('Some error Occurred');
        console.log(order);
        res.send(order);
    } catch (err) {
        res.status(500).send(err);
    }
})

app.post('/pay-order', async (req, res) => {
    try {
        const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature, loggedUser } = req.body;
        const newOrder = Payment({
            isPaid: true,
            amount: amount,
            razorpay: {
                orderId: razorpayOrderId,
                paymentId: razorpayPaymentId,
                signature: razorpaySignature
            },
            // loggedUser,

        });
        await newOrder.save();
        res.send({
            msg: "Payment was Successful"
        });
    } catch (err) {
        res.status(500).send(err);
    }
})



// launch
app.get('/', (req, res) => {
    res.send("<h1>You Are Hacked 💻</h1>")
})
app.listen(PORT, () => {
    console.log("listening");
})
