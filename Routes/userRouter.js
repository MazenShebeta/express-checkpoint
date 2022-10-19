const userController = require('../Controller/userController');
const express = require('express');
const time = require('../middleware/time');
const router = express.Router();

router.get('/', time, userController.home);
router.get('/service', time, userController.service);
router.get('/contact', time, userController.contact);
router.get('/closed', userController.closed);

module.exports = router; 