const express = require('express')
const userApiController = require('../controllers/api/user.controller')

const router = express.Router()

router.get('/', userApiController.index)
router.get('/:id', userApiController.showById)
router.patch('/:id', userApiController.updateById)
router.delete('/:id', userApiController.softDeleteById)

module.exports = router
