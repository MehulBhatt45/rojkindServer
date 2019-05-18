var jwt = require('jsonwebtoken');

var authMiddleWare = {
	isAuthenticatedJWT(req, res, next) {
		var token = req.body.token || req.query.token || req.headers['authorization'];
		if (token) {
            console.log(token);
			jwt.verify(token, 'rojkind', function(err, decoded) {      
				if (err) {
                    console.log(err);
					return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });    
				} else {
					req.decoded = decoded;    
					next();
				}
			});
		} else {
			return res.status(403).send({ 
				success: false, 
				message: 'No token provided.' 
			});
		}
	}
};
module.exports = authMiddleWare;