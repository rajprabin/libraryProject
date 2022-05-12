const Async = require('../Middlewares/Async')
const validator = require('../Middlewares/Validations/user')
const authorization = require('../Middlewares/authorize')

const UserController = require('../Controllers/user')
const userController = new UserController()

const express=require('express')
const router = express.Router()

router.post('/',validator,Async(userController.registerUser))

router.get('/',authorization,Async(userController.getAllUser))

router.get('/:id',authorization,Async(userController.getUser))

router.put('/:id',authorization,Async(userController.updateUser))

router.delete('/:id',authorization,Async(userController.deleteUser))




module.exports = router
