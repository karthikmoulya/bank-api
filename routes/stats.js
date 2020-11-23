const express = require('express');

// Controllers
const statsController = require('../controllers/stats');

// App
const router = express.Router();

// => GET /stats/:accId/:daysPast
// Get stats for specific account
router.get('/:accId/:daysPast', statsController.getStats);

module.exports = router;
