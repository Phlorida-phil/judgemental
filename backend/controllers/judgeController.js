const asyncHandler = require('express-async-handler')
const Judge = require('../models/judgeModel')
const Posting = require('../models/postingModel')

// GET JUDGES
// ROUTE GET api/GOALS
// ACCESS Public

const getJudges = asyncHandler(async (req, res) => {
  const judges = await Judge.find({ include: Posting })

  res.status(200).json(judges)
})

// Update JUDGES
// ROUTE PUT api/judges/id
// ACCESS Public

const updateJudge = asyncHandler(async (req, res) => {
  const judge = await Judge.findById(req.params.id)

  if (!judge) {
    res.status(400)
    throw new Error('Judge not found')
  }

  const updatedJudge = await Judge.findByIdAndUpdate(req.params.id, req.body, {new: true},)

  res.status(200).json(updatedJudge)
})

// Create JUDGES
// ROUTE POST api/judges
// ACCESS Public

const createJudge = asyncHandler(async (req, res) => {
  const {name, dob, active} = req.body

  if(!name || !dob || !active){
    res.status(400)
    throw new error('please enter required fields')
  }

  const judge = await Judge.create({
    name,
    dob,
    active
  })

  res.status(200).json(judge)
})

// Delete JUDGE
// ROUTE DELETE api/judges/:id
// ACCESS Public

const deleteJudge = asyncHandler(async (req, res) => {
  const judge = await Judge.findById(req.params.id)

  if (!judge) {
  res.status(400)
  throw new Error('Judge not found')
}

  await judge.remove()


  res.status(200).json({id: req.params.id})
})

// GET JUDGES POSTINGS
// ROUTE GET api/judges/:id/Postings
// ACCESS Public

const getjudgePosts = asyncHandler(async (req, res) => {
  const postings = await Posting.find({judge: req.params.id})

  res.status(200).json(postings)
})

module.exports = {
  getJudges,
  updateJudge,
  createJudge,
  deleteJudge,
  getjudgePosts
}
