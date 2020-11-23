const express = require('express');

// Controllers
const cardsController = require('../controllers/cards');

// App
const router = express.Router();

// => GET /cards/my
// Get my cards list
router.get('/my', cardsController.getMyCards);

// => GET /cards/:id
// Get single card
router.get('/:id', cardsController.getSingle);

module.exports = router;
