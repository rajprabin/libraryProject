const authorization = require('../Middlewares/authorize')
const Async = require('../Middlewares/Async')
const validator = require('../Middlewares/Validations/book')

const BookController = require('../Controllers/book')
const bookController = new BookController()

const express = require('express')
const router = express()

router.post('/',[authorization,validator.create],Async(bookController.postBook))

router.get('/:bookname',authorization,Async(bookController.getBook))

router.get('/getAllBook',authorization,Async(bookController.getAllBook))

router.put('/:id',authorization,Async(bookController.updateBook))

router.delete('/:id',authorization,Async(bookController.deleteBook))


module.exports = router