const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema({
    position: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    skill: {
        type: String,
        required: false
    }
  })

  module.exports = mongoose.model('Job', jobsSchema)