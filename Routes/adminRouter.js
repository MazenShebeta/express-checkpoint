const adminController = require('../Controller/adminController');
const express = require('express');
const time = require('../middleware/time');
const router = express.Router();

router.get('/', adminController.home);
router.get('/service', adminController.service);
router.get('/contact', adminController.contact);

module.exports = router; 