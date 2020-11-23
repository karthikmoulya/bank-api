const express = require('express');

// Controllers
const accountsController = require('../controllers/accounts');

// App
const router = express.Router();

// => GET /accounts/my
// Get my accounts list
router.get('/my', accountsController.getMyAccounts);

// => GET /accounts/:id
// Get single account
router.get('/:id', accountsController.getSingle);

module.exports = router;
