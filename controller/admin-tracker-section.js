const TrackModal = require('../models/TrackModal');
// get all tracker status details
const getAllTrackers = async (req, res) => {
    try {
        const data = await TrackModal.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ failed: "True" });
        console.log(err);
    }
}


module.exports = { getAllTrackers };