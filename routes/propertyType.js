var express = require('express');
var router = express.Router();
var propertyTypeController = require('../controller/propertyType.controller')

router.get('/property-type/getPropertyTypes', propertyTypeController.getPropertyTypes);
router.get('/property-type/getPropertyType/:id', propertyTypeController.getPropertyType);
router.put('/property-type/updatePropertyType', propertyTypeController.updatePropertyType);
router.post('/property-type/createPropertyType', propertyTypeController.createPropertyType);


module.exports = router;