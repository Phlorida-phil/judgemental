const mongoose = require('mongoose')

const postingSchema = mongoose.Schema({
  nominationdate: {
    type: Date,
    required: true
  },
  confirmed: {
    type: Boolean,
    required: true,
  },
  nominated: {
    type: String,
    required: true,
    enum: ['Biden', 'Trump', 'Obama', 'G.W. Bush', 'Clinton', 'G.H. Bush', 'Reagan']
  },
  chief: {
    type: Boolean,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  court: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Court'
  },
  judge: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Judge'
  },
  confirmationdate: {
    type: Date,
    required: false
  },
  yeaVote: {
    type: String,
    required: false,
  },
  nayVote: {
    type: String,
    required: false,
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Posting', postingSchema)
