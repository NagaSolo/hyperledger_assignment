const mongoose = require('mongoose')

const eduSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    field: {
        type: String,
        required: false
    }
  })

  module.exports = mongoose.model('Edu', eduSchema)