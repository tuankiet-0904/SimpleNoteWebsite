const express = require('express')
const uploadHelpers = require('../helpers/uploaders')
const uploadControllers = require('../controllers/upload')

const router = express.Router()

router.post(
    '/avatar/user/:id',
    uploadHelpers.userAvatarUploader,
    uploadControllers.userAvatarController,
)

module.exports = router
