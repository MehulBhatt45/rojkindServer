var express = require('express');
var router = express.Router();
var propertyTypeController = require('../controller/propertyType.controller')

router.get('/', propertyTypeController.getPropertyTypes);
router.get('/:id', propertyTypeController.getPropertyType);
router.put('/', propertyTypeController.updatePropertyType);
router.post('/', propertyTypeController.createPropertyType);


module.exports = router;