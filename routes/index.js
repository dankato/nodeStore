const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// object destructuring, allows import of entire object to be able to use one method
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
