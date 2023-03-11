const DomainModal = require('../models/DomainModal.js');

// create user url end point info
const createDomain = async (req, res) => {
    try {
        console.log(req.body);

        const created = await DomainModal.create(req.body);
        res.status(201).send("Successfully Done")

    } catch (error) {
        res.status(404).send(error);
        // res.status(404).json({ failure: "True" });
        console.log(error);
    }
}

// get user info
const getDomain = async (req, res) => {
    try {
        const { endpoint } = req.params;
        // console.log(`url: ${endpoint}`);
        const data = await DomainModal.findOne({ $or: [{ loggedUser: endpoint }, { domain: endpoint }] });
        // res.json(data);
        if (!data) { res.status(200).send("Domain is available"); return; }
        res.status(200).send(data);
    } catch (err) {
        // res.status(404).json({ failure: "true" });
        res.status(404).send(false);
        console.log(err);
    }
}

// delete domain
const deleteDomain = async (req, res) => {
    try {
        const { user } = req.params;
        await DomainModal.findOneAndDelete({ loggedUser: user });
        res.status(200).send("done");
    } catch (error) {
        res.status(404).json({ success: "false" });
        console.log(error);
    }
}

module.exports = { getDomain, createDomain, deleteDomain };