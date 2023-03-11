const userPaymentModal = require('../models/userPaymentModal');

// create a payment section 
const createPaymentSection = async (req, res) => {
    try {
        // console.log(req.body);
        const { loggedUser, imgCollections } = req.body;
        const { bankName, ifscCode, accountHolder, accountNumber } = req.body.paymentState
        const card = await userPaymentModal.create({ files: imgCollections, loggedUser, bankName, ifscCode, accountHolder, accountNumber });
        console.log(card);
        res.status(201).json({ success: "true" });
    } catch (err) {
        res.status(404).json({ msg: err })
        console.log(err);
    }
}

// update the payment section 
const updatePaymentSection = async (req, res) => {
    try {
        // console.log(req.body);
        const { loggedUser, imgCollections } = req.body;
        const { bankName, ifscCode, accountHolder, accountNumber } = req.body.paymentState

        const data = await userPaymentModal.updateOne({ loggedUser }, { files: imgCollections, loggedUser, bankName, ifscCode, accountHolder, accountNumber });
        res.status(204).json({ update: "Success" });
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

// get the payment section
const getPaymentSection = async (req, res) => {
    try {
        const { user } = req.params;
        const data = await userPaymentModal.findOne({ loggedUser: user });
        if (!data) return res.status(403).send("no data found!");
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

// delete the payment

const deletePaymentSection = async (req, res) => {
    try {
        const { user } = req.params;
        await userPaymentModal.findOneAndDelete({ loggedUser: user });
        res.status(200).send("Done");
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: "false" });
    }
}

module.exports = { createPaymentSection, updatePaymentSection, getPaymentSection, deletePaymentSection }