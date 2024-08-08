const express = require('express')
const router = express.Router()
const { loginUser , currentUser , registerUser  } = require('../controllers/userController')


router.get('/current', currentUser)

router.post('/register', registerUser )

router.post('/login', loginUser )

module.exports = router
