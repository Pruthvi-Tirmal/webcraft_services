const productsModal = require('../models/productsModal');
// get all products-services section details
const getAllProductsServices = async (req, res) => {
    try {
        const data = await productsModal.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ failed: "True" });
        console.log(err);
    }
}

module.exports = { getAllProductsServices };