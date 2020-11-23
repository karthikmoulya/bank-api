const express = require('express');

const userController = require('../controllers/users');

const router = express.Router();

router.get('/my', userController.getMyself);
router.put('/my', userController.updateMyself);

module.exports = router;
