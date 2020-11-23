const express = require('express');

const usersController = require('../controllers/auth');

const router = express.Router();

router.post('/register', usersController.createUser);
router.post('/login', usersController.userLogin);

module.exports = router;
