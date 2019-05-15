var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propertySchema = new Schema({
    Title : String,
    Status : String,
    Type : { type: Schema.Types.ObjectId, ref: 'propertyType' },
    Price : String,
    Area : String,
    Rooms : String,
    Images : Array,
    Location : {
        Address : String,
        City : String,
        State : String,
        Pincode : String,
        Latitude : String,
        Longitude : String,
        _id: false
    },
    Description : String,
    BuildingAge : String,
    Bedrooms : Number,
    Bathrooms : Number,
    Amenities : {
        AirConditioning  : {type: Boolean, default: false },
        SwimmingPool  : {type: Boolean, default: false },
        CentralHeating  : {type: Boolean, default: false },
        LaundryRoom : {type: Boolean, default: false },
        Gym : {type: Boolean, default: false },
        Alarm : {type: Boolean, default: false },
        WindowCovering : {type: Boolean, default: false },
        _id: false
    },
    ContactDetails : { type: Schema.Types.ObjectId, ref: 'agents' }

});

module.exports = mongoose.model('property', propertySchema);