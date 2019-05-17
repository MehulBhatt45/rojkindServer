var express = require('express');
var router = express.Router();
var adminController = require('../controller/admin.controller');
/* GET users listing. */
router.post('/login', adminController.login);
router.post('/create', adminController.createAdmin);
router.get('/agent', adminController.getAgents);

module.exports = router;
