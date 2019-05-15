var express = require('express');
var router = express.Router();
var adminController = require('../controller/admin.controller');
/* GET users listing. */
router.get('/login', adminController.login);

module.exports = router;
