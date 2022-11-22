const asyncHandler = require('express-async-handler')
const Posting = require('../models/postingModel')


// GET POSTINGS
// ROUTE GET api/GOALS
// ACCESS Public

const getPostings = asyncHandler(async (req, res) => {
  const posts = await Posting.find({status: true}).populate("judge")

  res.status(200).json(posts)
})

// Update POSTING
// ROUTE PUT api/Positing
// ACCESS Public

const updatePosting = asyncHandler(async (req, res) => {
  const posting = await Posting.findById(req.params.id)

  if (!posting) {
    res.status(400)
    throw new Error('Posting not found')
  }

  const updatedPosting = await Posting.findByIdAndUpdate(req.params.id, req.body, {new: true},)

  res.status(200).json(updatedPosting)
})

// Create JUDGES
// ROUTE POST api/GOALS
// ACCESS Public

const createPosting = asyncHandler(async (req, res) => {
  const {
    nominationdate,
    confirmationdate,
    confirmed,
    nominated,
    yeaVote,
    nayVote,
    chief,
    status,
    court,
    judge,

 } = req.body

  if(!nominationdate || !nominated || !court || !judge){
    res.status(400)
    throw new error('please enter all required fields')
  }

  const posting = await Posting.create({
    nominationdate,
    confirmationdate,
    confirmed,
    nominated,
    yeaVote,
    nayVote,
    chief,
    status,
    court,
    judge,
  })

  res.status(200).json(posting)
})

// Delete Posting
// ROUTE DELETE api/GOALS
// ACCESS Public

const deletePosting = asyncHandler(async (req, res) => {
  const posting = await Posting.findById(req.params.id)

  if (!posting) {
  res.status(400)
  throw new Error('Posting not found')
}

  await posting.remove()


  res.status(200).json({id: req.params.id})
})

module.exports = {
  getPostings,
  updatePosting,
  createPosting,
  deletePosting
}
