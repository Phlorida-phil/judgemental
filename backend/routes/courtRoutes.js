const express = require('express')
const router = express.Router()
const {getCourts, updateCourt, createCourt, deleteCourt, getcourtPosts  } = require('../controllers/courtController')

router.route('/').get(getCourts).post(createCourt)
router.route('/:id').delete(deleteCourt).put(updateCourt)
router.route('/:id/posts').get(getcourtPosts)



module.exports = router
