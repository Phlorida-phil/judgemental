const express = require('express')
const router = express.Router()
const {getJudges, updateJudge, createJudge, deleteJudge, getjudgePosts  } = require('../controllers/judgeController')

router.route('/').get(getJudges).post(createJudge)
router.route('/:id').delete(deleteJudge).put(updateJudge)
router.route('/:id/posts').get(getjudgePosts)



module.exports = router
