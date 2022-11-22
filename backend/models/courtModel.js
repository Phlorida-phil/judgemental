const mongoose = require('mongoose')

const courtSchema = mongoose.Schema({
  seats: {
    type: Number,
    required: true
  },
  courtName: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    required: true,
    enum: ['District', 'Appeals']
  }
}, {
  timestamps: false
})

module.exports = mongoose.model('Court', courtSchema)
