const mongoose = require('mongoose')

const{ Schema , models } = require('mongoose')

const flightSchema =  new mongoose.Schema({
    airline: {type : String ,  enum: ['American', 'Southwest', 'United'], required: true},
    flightNo : {type: Number ,min: 10, max: 9999, required : true},
    depart: {type: Date, default: () => new Date(+new Date() + 365 * 24 * 60 * 60 * 1000),required: true }
});

const Flight =mongoose.model('Flight', flightSchema);

module.exports = Flight;