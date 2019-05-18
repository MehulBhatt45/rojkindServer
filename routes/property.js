var express = require('express');
var router = express.Router();
var propertyController = require('../controller/property.controller');
var auth = require('./auth');

router.get('/', propertyController.getProperties);
router.get('/:propertyId', propertyController.getProperty);
router.delete('/:propertyId', propertyController.removeProperty);//auth.isAuthenticatedJWT
router.put('/:propertyId', propertyController.updateProperty);//auth.isAuthenticatedJWT
router.post('/', propertyController.addProperty);//auth.isAuthenticatedJWT
router.post('/changePropertyStatus', propertyController.changePropertyStatus);//auth.isAuthenticatedJWT
router.post('/VerifyPropertyStatus', propertyController.VerifyPropertyStatus);//auth.isAuthenticatedJWT
router.post('/searchProperty', propertyController.searchProperty);

module.exports = router;