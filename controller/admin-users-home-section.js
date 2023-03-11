const HomeModal = require('../models/homeModal');
// get all home section details
const getAllHome = async (req, res) => {
    try {
        const data = await HomeModal.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ failed: "True" });
        console.log(err);
    }
}

module.exports = { getAllHome };