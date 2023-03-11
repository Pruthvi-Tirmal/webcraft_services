const trackModal = require('../models/TrackModal');

// create a track section

const createTracker = async (req, res) => {
    try {
        const { loggedUser, home } = req.body;
        const card = await trackModal.create({ loggedUser, home });
        console.log(card);
        res.status(201).json({ success: "true" });
    } catch (err) {
        res.status(404).json({ err });
    }
}

// update the rest of the section

const updateTracker = async (req, res) => {
    try {
        const { loggedUser } = req.body;
        const data = await trackModal.updateOne({ loggedUser }, req.body)
        console.log(data);
        res.status(204).json({ update: "successfully" });
    } catch (err) {
        res.status(404).json({ err });
    }
}

// get the tracker status

const getTracker = async (req, res) => {
    try {
        const { user } = req.params;  // the user is in router
        const data = await trackModal.findOne({ loggedUser: user });
        console.log(data);
        if (!data) res.status(403).send("no user data");
        else
            res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ err });
    }
}

// delete tracker status
const deleteTracker = async (req, res) => {
    try {
        const { user } = req.params
        await trackModal.findOneAndDelete({ loggedUser: user });
        res.status(200).send("done");
    } catch (err) {
        res.status(404).json({ success: "false" });
        console.log(err);
    }
}

module.exports = { createTracker, updateTracker, getTracker, deleteTracker };