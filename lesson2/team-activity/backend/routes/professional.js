#!javascript
const express = require('express')
const router = express.Router()
//require professional controller
const preofessionalCtrl = require("../controllers/professional")

router.get('/', preofessionalCtrl.getAll)

module.exports = router;