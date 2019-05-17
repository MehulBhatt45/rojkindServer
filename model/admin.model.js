var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

var adminSchema = new Schema({
    name: String,
    email: String,
    password: String
});

adminSchema.pre('save', function(next) {
	var admin = this;
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash(admin.password, salt, function(err, hash) {
			if (err){ 
				return next(err);
			}
			admin.password = hash;
			next();
		});
	});
});

adminSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};


module.exports = mongoose.model('admin', adminSchema);