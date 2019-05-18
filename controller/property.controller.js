var propertyModel = require('../model/property.model');
var path = require('path');
var _ = require('lodash');
var propertyController = {
    getProperties: function(req,res){
        propertyModel
        .find({})
        .sort({"_id" : -1})
        .limit(5)
        .populate('agent')
        .exec((err, properties)=>{
            if(err){
                res.status(500).send(err);
            }else if(properties){
                res.status(200).json({
                    message: "Found al properties",
                    data: properties
                });
            }else{
                res.status(404).send("No properties found");
            }
        })
    },
    
    getProperty: function(req,res){
        propertyModel
        .findOne({ _id: req.params.propertyId })
        .populate('agent')
        .exec((err, property)=>{
            if(err){
                res.status(500).send(err);
            }else if(property){
                res.status(200).json({
                    message: "Found al properties",
                    data: property
                });
            }else{
                res.status(404).send("No property found");
            }
        })
    },
    
    removeProperty: function(req,res){
        propertyModel
        .findByIdAndRemove({_id: req.params.propertyId})
        .exec((err, deletedProperty)=>{
            if(err){
                res.status(500).send(err);
            }else if(deletedProperty){
                res.status(200).json({
                    message: "Property deleted",
                    data: deletedProperty
                });
            }else{
                res.status(404).send("No property found");
            }
        })
    },
    
    updateProperty: function(req,res){
        const property = JSON.parse(req.body.property);
        console.log(property);
        propertyModel
        .findOneAndUpdate({_id: req.params.propertyId},{$set: property})
        .exec((error, savedProperty)=>{
            if(error){
                console.log('error: ', error);
                res.status(500).send(error)
            }else if(savedProperty){
                var uploadPath = path.join(__dirname, "../uploads/property/"+savedProperty._id+"/");
                req.file('uploadFile').upload({
                    maxBytes: 500000000,
                    dirname: uploadPath,
                    saveAs: function (__newFileStream, next) {
                        return next(undefined, __newFileStream.filename);
                    }
                }, function(err, files){
                    if (err) {
                        console.log(err);
                        res.status(500).send(err);
                    }else{
                        console.log(files);
                        var fileNames=savedProperty.images;
                        if(files.length>0){
                            _.forEach(files, (gotFile)=>{
                                fileNames.push(gotFile.fd.split('/uploads/').reverse()[0])
                            })
                        }
                        propertyModel
                        .findOneAndUpdate({_id: savedProperty._id}, {$set: {images: fileNames}}, { upsert: true, new: true })
                        .exec((err , update)=>{
                            if (err) {
                                console.log(err);
                                res.status(500).send(err);
                            }else{
                                res.status(201).json({
                                    message: "new property added",
                                    data: update
                                })
                            }	
                        })
                    }
                })
                
            }else{
                res.status(400).send('Bad request');
            }
        })
    },
    
    addProperty: function(req,res){
        const property = JSON.parse(req.body.property);
        console.log(property);
        const newProperty = new propertyModel(property);
        newProperty.save((error, savedProperty)=>{
            if(error){
                console.log('error: ', error);
                res.status(500).send(error)
            }else if(savedProperty){
                var uploadPath = path.join(__dirname, "../uploads/property/"+savedProperty._id+"/");
                req.file('uploadFile').upload({
                    maxBytes: 500000000,
                    dirname: uploadPath,
                    saveAs: function (__newFileStream, next) {
                        return next(undefined, __newFileStream.filename);
                    }
                }, function(err, files){
                    if (err) {
                        console.log(err);
                        res.status(500).send(err);
                    }else{
                        console.log(files);
                        var fileNames=savedProperty.images;
                        if(files.length>0){
                            _.forEach(files, (gotFile)=>{
                                fileNames.push(gotFile.fd.split('/uploads/').reverse()[0])
                            })
                        }
                        propertyModel
                        .findOneAndUpdate({_id: savedProperty._id}, {$set: {images: fileNames}}, { upsert: true, new: true })
                        .exec((err , update)=>{
                            if (err) {
                                console.log(err);
                                res.status(500).send(err);
                            }else{
                                res.status(201).json({
                                    message: "new property added",
                                    data: update
                                })
                            }	
                        })
                    }
                })
                
            }else{
                res.status(400).send('Bad request');
            }
        })
    },
    
    changePropertyStatus: function(req,res){
    },
    
    VerifyPropertyStatus: function(req,res){
    },

    searchProperty: function(req,res){
    },
    
};


module.exports = propertyController;