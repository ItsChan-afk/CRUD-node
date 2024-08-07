const express = require('express')
const router = express.Router()
const {getInformations , createInformation , getInformation , updateInformation , deleteInformation} = require('../controllers/userInformationController')

router.get('/' , getInformations)

router.post('/' , createInformation)

router.get('/:id' , getInformation)

router.put('/:id' , updateInformation)

router.delete('/:id' , deleteInformation)

module.exports = router