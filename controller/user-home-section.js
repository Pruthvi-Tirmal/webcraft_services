

const HomeModal = require('../models/homeModal');

// create a home section 
const createHomeSection = async (req, res) => {
    try {
        console.log(req.body);
        const card = await HomeModal.create(req.body);
        res.status(201).json({ success: "true" });
    } catch (err) {
        res.status(404).json({ msg: err })
        console.log(err);
    }
}

// get the home section data
const getHomeSection = async (req, res) => {
    const { user } = req.params;
    try {
        const data = await HomeModal.findOne({ loggedUser: user });
        if (!data) return res.status(403).send("no data found!");
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
    }
}

// update the home section data
const updateHomeSection = async (req, res) => {
    try {
        const data = await HomeModal.updateOne({ loggedUser: req.body.loggedUser }, req.body);
        console.log(data);
        res.status(204).json({ update: "success" });
    } catch (err) {
        res.status(404).json({ failed: "true" });
        console.log(err);
    }
}

// delete Users
const deleteHomeSection = async (req, res) => {
    try {
        const { user } = req.params;
        const data = await HomeModal.findOneAndDelete({ loggedUser: user });
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: "false" })
    }
}

module.exports = {
    createHomeSection,
    getHomeSection, updateHomeSection,
    getHomeSection, deleteHomeSection
}