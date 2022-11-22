const express = require('express')
const router = express.Router()
const {getPostings, updatePosting, createPosting, deletePosting  } = require('../controllers/postController')

router.route('/').get(getPostings).post(createPosting)
router.route('/:id').delete(deletePosting).put(updatePosting)



module.exports = router
