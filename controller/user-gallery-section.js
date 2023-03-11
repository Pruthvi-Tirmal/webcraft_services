const galleryModal = require("../models/galleryModal");

// create a gallery section

const createGallerySection = async (req, res) => {
    try {
        // console.log(req.body);
        const card = await galleryModal.create({ loggedUser: req.body.loggedUser, files: req.body.imgCollections });
        console.log(card);
        res.status(201).json({ success: "true" });
    } catch (err) {
        console.log(err);
        res.status(404).json({ failure: "true", err });
    }
}

// get the gallery section

const getGallerySection = async (req, res) => {
    try {
        const { user } = req.params;
        const data = await galleryModal.findOne({ loggedUser: user });
        if (!data) return res.status(403).send("no data found!");
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

// update the about section 
const updateGallerySection = async (req, res) => {
    try {
        const data = await galleryModal.updateOne({ loggedUser: req.body.loggedUser }, { loggedUser: req.body.loggedUser, files: req.body.imgCollections });
        console.log(data);
        res.status(204).json({ update: "Success" });
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

//delete the gallery section
const deleteGallerySection = async (req, res) => {
    try {
        const { user } = req.params;
        await galleryModal.findOneAndDelete({ loggedUser: user });
        res.status(200).send("Done");
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: "false" });
    }
}

module.exports = { createGallerySection, getGallerySection, updateGallerySection, deleteGallerySection }