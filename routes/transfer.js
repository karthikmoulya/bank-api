const express = require('express');

// Controllers
const transfersController = require('../controllers/transfer');

// App
const router = express.Router();

// => GET /transfers/my
// Get my transfers list
router.get('/my', transfersController.getMyTransfers);

// => GET /transfers/:id
// Get single transfer
router.get('/:id', transfersController.getSingle);

// => POST /transfers
// Make a transfer
router.post('/', transfersController.create);

module.exports = router;
