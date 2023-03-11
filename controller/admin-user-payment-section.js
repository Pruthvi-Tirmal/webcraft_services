const userPaymentModal = require('../models/userPaymentModal');
// get all user display payment section details
const getAllUserDisplayedPayments = async (req, res) => {
    try {
        const data = await userPaymentModal.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ failed: "True" });
        console.log(err);
    }
}

module.exports = { getAllUserDisplayedPayments };