const express = require('express');

// Controllers
const messagesController = require('../controllers/messages');

// App
const router = express.Router();

// => GET /messages/my
// Get my messages list
router.get('/my', messagesController.getMyMessages);

// => GET /messages/:id
// Get single message
router.get('/:id', messagesController.getSingle);

module.exports = router;
