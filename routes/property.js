var express = require('express');
var router = express.Router();
var propertyController = require('../controller/property.controller')

router.get('/', propertyController.getProperties);
router.get('/:propertyId', propertyController.getProperty);
router.delete('/:propertyId', propertyController.removeProperty);
router.put('/', propertyController.updateProperty);
router.post('/', propertyController.addProperty);
router.post('/changePropertyStatus', propertyController.changePropertyStatus);
router.post('/VerifyPropertyStatus', propertyController.VerifyPropertyStatus);
router.post('/searchProperty', propertyController.searchProperty);

module.exports = router;