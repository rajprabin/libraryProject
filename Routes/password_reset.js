const authorize = require('../Middlewares/authorize')
const Async = require('../Middlewares/Async')
const validator = require('../Middlewares/Validations/password-reset')

const ResetController = require('../Controllers/password_reset')
const resetController= new ResetController()


const express  = require('express')
const router = express.Router()


router.post('/',authorize,Async(resetController.password_reset))

router.post('/:id/:token',[authorize,validator],Async(resetController.reset_password))

router.get('/:id/:token',authorize,Async(resetController.getPassword))

module.exports = router