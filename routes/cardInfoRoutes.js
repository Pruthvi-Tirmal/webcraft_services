const router = require('express').Router();
const { createTracker, updateTracker, getTracker, deleteTracker } = require('../controller/track-the-sections.js');
const { createAboutSection, getAboutSection, updateAboutSection, deleteAboutSection } = require('../controller/user-about-section.js');
const { createGallerySection, getGallerySection, updateGallerySection, deleteGallerySection } = require('../controller/user-gallery-section.js');
const { createHomeSection, getHomeSection, updateHomeSection, deleteHomeSection } = require('../controller/user-home-section.js');
const { createPaymentSection, getPaymentSection, updatePaymentSection, deletePaymentSection } = require('../controller/user-payment-section.js');
const { createProductsSection, updateProductsSection, getProductsSection, deleteProductsSection } = require('../controller/user-product-section.js');
const { createDomain, getDomain, deleteDomain } = require('../controller/user-domain-section.js');

// *Create a  User Card

//*Home sections
// create a user-home-section
router.post('/post/user-home-section', createHomeSection);
// get a user-home-section details
router.get('/get/user-home-section/:user', getHomeSection);
// update a user-home-section 
router.patch('/update/user-home-section', updateHomeSection);
//delete a user-home-section
router.delete('/delete/user-home-section/:user', deleteHomeSection);

//*About Section
// create a user-about-section
router.post('/post/user-about-section', createAboutSection);
// get a user-about-section
router.get('/get/user-about-section/:user', getAboutSection);
// update a user-about-section
router.patch('/update/user-about-section', updateAboutSection);
//delete a user-about-section
router.delete('/delete/user-about-section/:user', deleteAboutSection);

//*Products
// create a user-products-section
router.post('/post/user-products-section', createProductsSection);
// get a user-products-section
router.get('/get/user-products-section/:user', getProductsSection);
// update a user-products-section
router.patch('/update/user-products-section', updateProductsSection);
//delete a user-products-section
router.delete('/delete/user-products-section/:user', deleteProductsSection);

//*Gallery 
// create a user-gallery-section
router.post('/post/user-gallery-section', createGallerySection);
// get a user-gallery-section
router.get('/get/user-gallery-section/:user', getGallerySection);
// update a user-gallery-section
router.patch('/update/user-gallery-section', updateGallerySection);
//delete a user-gallery-section
router.delete('/delete/user-gallery-section/:user', deleteGallerySection);

// *Payment Details

// create a user-payment-section
router.post('/post/user-payment-section', createPaymentSection);
// get a user-payment-section
router.get('/get/user-payment-section/:user', getPaymentSection);
// update a user-payment-section
router.patch('/update/user-payment-section', updatePaymentSection);
//delete a user-payment-section
router.delete('/delete/user-payment-section/:user', deletePaymentSection);

// *Tracker
// create a tracker 
router.post('/post/user-tracker', createTracker);
// update the tracker
router.patch('/update/user-tracker', updateTracker);
// get the tracker
router.get('/get/user-tracker/:user', getTracker);
// delete the tracker
router.delete('/delete/user-tracker/:user', deleteTracker);


//*Domain Section
// create a user url end point
router.post('/post/domain', createDomain);
// get user url end point
router.get('/get/domain/:endpoint', getDomain);
// delete user url end point
router.delete('/delete/domain/:user', deleteDomain);

// export
module.exports = router;