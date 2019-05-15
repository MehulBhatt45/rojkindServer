var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propertyTypeSchema = new Schema({
    Title : String,
    Description : String
});

module.exports = mongoose.model('propertyType', propertyTypeSchema);