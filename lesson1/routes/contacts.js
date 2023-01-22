#!javascript

const express = require('express')
const router = express.Router()
//require index controller
const controller = require("../controllers/contacts")

//resolving route with controller method 
router.get('/', controller.getAll)
router.get('/:contactId', controller.getById)
router.post('/', controller.createContact)
router.put('/:contactId', controller.updateContact)
router.delete('/:contactId', controller.deleteById)

module.exports = router