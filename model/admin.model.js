var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('admin', adminSchema);