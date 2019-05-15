var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var agentSchema = new Schema({
    Name: String,
    Email: String,
    Phone: String,
    ContactLinks: String,
    Status: String
});

module.exports = mongoose.model('agents', agentSchema);