const mongoose = require('mongoose');
var propertyTypeModel = require('../model/propertyType.model');
// var jwt = require('jsonwebtoken');

let propertyTypeController = {

	getPropertyTypes: function(req,res){
		propertyTypeModel
		.find({})
		.exec((err, propertyTypes)=>{
			if(err){
                res.status(500).send(err);
            }else if(propertyTypes){
                res.status(200).json({
                    message: "Found all property types",
                    data: propertyTypes
                });
            }else{
                res.status(404).send("No property types found");
            }
		})
	},

	getPropertyType: function(req,res){
	},

	updatePropertyType: function(req,res){
	},

	createPropertyType: function(req,res){
		var type = new propertyTypeModel(req.body);
		type.save((err, saved)=>{
			if(err) res.status(500).send(err);
			res.status(200).send(saved);
		})
	},

};

module.exports = propertyTypeController;