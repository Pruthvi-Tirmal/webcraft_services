const DomainModal = require('../models/DomainModal.js');

const getAllDomains = async (req, res) => {
    try {
        const data = await DomainModal.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ success: "false" });
        console.error(err);
    }
}

module.exports = { getAllDomains }