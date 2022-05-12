const authorization = require('../Middlewares/authorize')
const Async = require('../Middlewares/Async')
const validator = require('../Middlewares/Validations/library')

const LibraryController = require('../Controllers/library')
const libraryController = new LibraryController()

const express = require('express');
const router = express.Router();

router.post('/',[authorization,validator],Async(libraryController.postBook))

router.get('/getAllBook',authorization,libraryController.getAllBook)

router.get('/:id',authorization,libraryController.showBook)

router.put('/:id',authorization,libraryController.updateBook)

router.delete('/:id',authorization,libraryController.deleteBook)

module.exports=router