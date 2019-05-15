var express = require('express');
var router = express.Router();
var propertyController = require('../controller/property.controller')

router.get('/property/getProperties', propertyController.getProperties);
router.get('/property/getUnverifiedProperties', propertyController.getUnverifiedProperties);
router.get('/property/getAvilableProperties', propertyController.getAvilableProperties);
router.get('/property/getUnavilableProperties', propertyController.getUnavilableProperties);
router.get('/property/getSoldProperties', propertyController.getSoldProperties);
router.get('/property/agentWiseProperty', propertyController.agentWiseProperty);
router.get('/property/getRentedProperties', propertyController.getRentedProperties);
router.get('/property/agentWiseExpireProperty', propertyController.agentWiseExpireProperty);
router.get('/property/getRentedPropertiesCount', propertyController.getRentedPropertiesCount);
router.get('/property/agentWisePropertyCount', propertyController.agentWisePropertyCount);
router.get('/property/getAvilablePropertiesCount', propertyController.getAvilablePropertiesCount);
router.get('/property/getSoldPropertiesCount', propertyController.getSoldPropertiesCount);
router.get('/property/getUnverifiedPropertiesCount', propertyController.getUnverifiedPropertiesCount);
router.get('/property/getProperty', propertyController.getProperty);
router.delete('/property/removeProperty', propertyController.removeProperty);
router.put('/property/updateProperty', propertyController.updateProperty);
router.post('/property/addProperty', propertyController.addProperty);
router.post('/property/changePropertyStatus', propertyController.changePropertyStatus);
router.post('/property/VerifyPropertyStatus', propertyController.VerifyPropertyStatus);
router.post('/property/searchProperty', propertyController.searchProperty);

module.exports = router;