const productsModal = require('../models/productsModal');

// create a about section 
const createProductsSection = async (req, res) => {

    try {
        console.log(req.body);
        const { productState, imgCollections } = req.body;

        const card = productsModal.create({ loggedUser: productState.loggedUser, productsInfo: productState.productsInfo, files: imgCollections });
        console.log(card);
        res.status(201).json({ success: "true" });
    } catch (err) {
        res.status(404).json({ msg: err })
        console.log(err);
    }
}

// update the products section

const updateProductsSection = async (req, res) => {
    try {
        const { productState, imgCollections } = req.body;
        const data = await productsModal.updateOne({ loggedUser: productState.loggedUser }, { loggedUser: productState.loggedUser, productsInfo: productState.productsInfo, files: imgCollections });
        console.log(data);
        res.status(204).json({ update: "Success" });
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

// get the products section

const getProductsSection = async (req, res) => {
    try {
        const { user } = req.params;
        const data = await productsModal.findOne({ loggedUser: user });
        if (!data) return res.status(403).send("no data found!");
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

// delete the products

const deleteProductsSection = async (req, res) => {
    try {
        const { user } = req.params;
        await productsModal.findOneAndDelete({ loggedUser: user });
        res.status(200).send("Done");
    } catch (err) {
        res.status(404).json({ err });
        console.log(err);
    }
}

module.exports = {
    createProductsSection,
    updateProductsSection,
    getProductsSection,
    deleteProductsSection
}