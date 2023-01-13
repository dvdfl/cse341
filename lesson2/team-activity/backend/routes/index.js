#!javascript
const express = require('express')
const router = express.Router()
//require index controller
const indexCtrl = require("../controllers/index")

//resolving route with controller method 
router.get('/', indexCtrl.showWelcome)

module.exports = router;