const { findOne } = require('../models/adminModal');
const adminModal = require('../models/adminModal');

// get 
const getCred = async (req, res) => {
    try {
        const { user } = req.params;
        const data = await adminModal.findOne({ email: user });
        if (!data) { res.status(200).send(false) }
        else { res.status(200).send(data) }
    } catch (err) {
        res.status(404).json({ success: "false" });
        console.log(err);
    }
}

module.exports = getCred;