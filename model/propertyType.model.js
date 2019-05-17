var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propertyTypeSchema = new Schema({
    title : String,
    description : String
});

module.exports = mongoose.model('propertyType', propertyTypeSchema);