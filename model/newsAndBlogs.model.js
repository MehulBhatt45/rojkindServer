var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    Title: String,
    Description: String,
    Link: String
});

module.exports = mongoose.model('blogs', blogSchema);