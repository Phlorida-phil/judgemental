const asyncHandler = require('express-async-handler')
const Court = require('../models/courtModel')
const Posting = require('../models/postingModel')

// GET COURTS
// ROUTE GET api/COURTS
// ACCESS Public

const getCourts = asyncHandler(async (req, res) => {
  const courts = await Court.find()

  res.status(200).json(courts)
})

// Update COURTS
// ROUTE PUT api/COURT/id
// ACCESS Public

const updateCourt = asyncHandler(async (req, res) => {
  const court = await Court.findById(req.params.id)

  if (!Court) {
    res.status(400)
    throw new Error('Court not found')
  }

  const updatedCourt = await Court.findByIdAndUpdate(req.params.id, req.body, {new: true},)

  res.status(200).json(updatedPost)
})

// Create Court
// ROUTE POST api/Courts
// ACCESS Public

const createCourt = asyncHandler(async (req, res) => {
  const {seats, courtName, level} = req.body

  if(!seats || !courtName || !level){
    res.status(400)
    throw new error('please enter required fields')
  }

  const court = await Court.create({
    seats,
    courtName,
    level
  })

  res.status(200).json(court)
})

// Delete Court
// ROUTE DELETE api/POSTS/:id
// ACCESS Public

const deleteCourt = asyncHandler(async (req, res) => {
  const court = await Court.findById(req.params.id)

  if (!court) {
  res.status(400)
  throw new Error('Court not found')
}

  await court.remove()


  res.status(200).json({id: req.params.id})
})

// GET Court POSTINGS
// ROUTE GET api/couts/:id/postings
// ACCESS Public

const getcourtPosts = asyncHandler(async (req, res) => {
  const postings = await Posting.find({court: req.params.id})

  res.status(200).json(postings)
})

module.exports = {
  getCourts,
  updateCourt,
  createCourt,
  deleteCourt,
  getcourtPosts
}
