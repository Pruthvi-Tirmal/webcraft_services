const galleryModal = require('../models/galleryModal');
// get all gallery section details
const getAllGalleries = async (req, res) => {
    try {
        const data = await galleryModal.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ failed: "True" });
        console.log(err);
    }
}

module.exports = { getAllGalleries };