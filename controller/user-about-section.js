const aboutModal = require('../models/aboutModal');

// create a about section 
const createAboutSection = async (req, res) => {

    try {
        console.log(req.body);
        const card = aboutModal.create(req.body);
        res.status(201).json({ success: "true" });
    } catch (err) {
        res.status(404).json({ msg: err })
        console.log(err);
    }
}

// get the about section

const getAboutSection = async (req, res) => {
    try {
        const { user } = req.params;
        const data = await aboutModal.findOne({ loggedUser: user });
        if (!data) return res.status(403).send("no data found!");
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

// update the about section 
const updateAboutSection = async (req, res) => {
    try {
        const data = await aboutModal.updateOne({ loggedUser: req.body.loggedUser }, req.body);
        console.log(data);
        res.status(204).json({ update: "Success" });
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

// delete the user about section
const deleteAboutSection = async (req, res) => {
    try {
        const { user } = req.params;
        await aboutModal.findOneAndDelete({ loggedUser: user });
        res.status(200).send("done");
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: "false" });
    }
}

module.exports = {
    createAboutSection, getAboutSection, updateAboutSection, deleteAboutSection
}