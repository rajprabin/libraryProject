const express = require('express')
const router = express()

const authorize =require ('../Middlewares/authorize')
const Async = require('../Middlewares/Async')
const validator = require('../Middlewares/Validations/author')

const AuthorController = require('../Controllers/author')
const authorController = new AuthorController()


router.post('/',[authorize,validator],Async(authorController.postAuthor))

router.get('/:id',authorize,Async(authorController.getAuthor))

router.get('/',authorize,Async(authorController.getAllAuthor))

router.put('/:id',authorize,Async(authorController.updateAuthor))

router.delete('/:id',authorize,Async(authorController.deleteAuthor))

module.exports = router