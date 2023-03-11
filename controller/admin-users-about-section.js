const aboutModal = require('../models/aboutModal');
// get all about section details
const getAllAbout = async (req, res) => {
    try {
        const data = await aboutModal.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ failed: "True" });
        console.log(err);
    }
}

module.exports = { getAllAbout };