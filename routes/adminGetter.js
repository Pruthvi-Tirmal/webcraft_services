const getCred = require('../controller/admin-login-cred');
const { getAllTrackers } = require('../controller/admin-tracker-section');
const { getAllDomains } = require('../controller/admin-user-domin-selection');
const { getAllUserDisplayedPayments } = require('../controller/admin-user-payment-section');
const { getAllAbout } = require('../controller/admin-users-about-section');
const { getAllGalleries } = require('../controller/admin-users-gallery-section');
const { getAllHome } = require('../controller/admin-users-home-section');
const { getAllProductsServices } = require('../controller/admin-users-products-services-section');

const router = require('express').Router();
// *Home sections
// get all home section details
router.get("/get/home", getAllHome);

// *About Sections
// get all about section details
router.get("/get/about", getAllAbout);

// *Products-Services  Sections
// get all products services section details
router.get("/get/products-services", getAllProductsServices);

// *Galleries  Sections
// get all galleries section details
router.get("/get/galleries", getAllGalleries);

// *User Displayed payment  Sections
// get all user displayed payment section details
router.get("/get/userpayments", getAllUserDisplayedPayments);

// * Tracker Sections
// get all Trackers section details
router.get("/get/trackers", getAllTrackers);

// *Domain selection
// get all domains details
router.get('/get/domains', getAllDomains);

//*Admin Cred
router.get(`/get/admin-cred/:user`, getCred);



module.exports = router;