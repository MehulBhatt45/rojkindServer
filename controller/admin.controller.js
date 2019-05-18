var adminModel = require('../model/admin.model');
var agentModel = require('../model/agents.model');
var jwt = require('jsonwebtoken');

let adminController = {
    login: function(req,res){
        adminModel.findOne({
            'email': req.body.email,
        }).exec(function(err,admin){
            if (err) {
                return res.status(500).send({err});
            }else{
                admin.comparePassword(req.body.password,(err, isMatch)=>{
                    // console.log("FINISHED COMPARING ",isMatch);
                    if(err || isMatch == false){
                        return res.status(404).send('No User Found');
                    }else{
                        // const payload = {
                        //     'user': admin
                        // };
                        var token = jwt.sign(JSON.stringify(admin),'rojkind');
                        res.send({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token,
                            user: admin
                        });
                    }
                });
            }
        });
	},

	updateUser: function(req,res){
	},

	createAdmin: function(req,res){
        const Admin = new adminModel({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		});

		Admin.save().then(result => {
			res.status(200).json(result);
		})
		.catch(err => console.log(err));
	},

	contactUs:(req,res)=>{
    },
    
    getAgents: (req, res)=>{
        agentModel
        .find({})
        .exec((err, agents)=>{
            if(err){
                res.status(500).send(err);
            }else if(agents){
                res.status(200).json({
                    message: "Found all agents",
                    data: agents
                });
            }else{
                res.status(404).send("No agents found");
            }
        })
    }

};

module.exports = adminController;

