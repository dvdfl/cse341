#!javascript

const express = require('express')
const router = express.Router()
//require index controller
const controller = require("../controllers/contacts")

//resolving route with controller method 
router.get('/', controller.getAll)
router.get('/:userId', controller.getById)

module.exports = router