const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/clubs', mainController.getAllClubs);

router.post('/newUser', mainController.newUser);
router.post('/logIn', mainController.logIn);

module.exports = router;