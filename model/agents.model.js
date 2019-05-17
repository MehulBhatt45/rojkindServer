var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var agentSchema = new Schema({
    name: String,
    description: String,
    imageUrl: String
});

module.exports = mongoose.model('agents', agentSchema);