const express = require('express')
const { registerController, loginController, logoutController } = require('../controllers/authController')

//routerobjext
const router = express.Router()

//routes
router.post('/register', registerController)
router.post('/login', loginController)
router.post('/logout', logoutController)

module.exports = router;