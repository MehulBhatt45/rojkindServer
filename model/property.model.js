var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propertySchema = new Schema({
    title: String,
    status: {
        type: String,
        enum: ['sale', 'rent']
    },
    price: String,
    currency: { type: String, default: 'USD' },
    images: [String],
    location: {
        address: String,
        city: String,
        state: String,
        zipcode: String,
        latitude: String,
        longitude: String,
        neighborhood: String
    },
    description: String,
    attributes: {
        area: {
            number: String,
            unit: String
        },
        stype: String,
        rooms: String,
        buildingAge: String,
        bedrooms: String,
        bathrooms: String,
        hasKitchen: { type: Boolean, default: false },
        hasJacuzzi: { type: Boolean, default: false },
        hasParking: { type: Boolean, default: false },
        hasSecurity: { type: Boolean, default: false },
        hasAirConditioning: { type: Boolean, default: false },
        hasGarden: { type: Boolean, default: false },
        hasSwimmingPool: { type: Boolean, default: false },
        hasCentralHeating: { type: Boolean, default: false },
        hasLaundryRoom: { type: Boolean, default: false },
        hasGym: { type: Boolean, default: false },
        hasAlarm: { type: Boolean, default: false },
        hasWindowCovering: { type: Boolean, default: false },
    },
    agent: { type: Schema.Types.ObjectId, ref: 'agents' },

});

module.exports = mongoose.model('property', propertySchema);