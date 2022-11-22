const mongoose = require('mongoose')

const judgeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Judge', judgeSchema)
