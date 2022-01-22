const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    postcode: {
        type: String,
        required: false
    }
  })
 
  module.exports = mongoose.model('Address', addressSchema)