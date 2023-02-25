const express = require('express')
const router = express.Router()
const controller = require("../controllers/unit-of-measure")
const { requiresAuth } = require('express-openid-connect');
//validation
const { validateRequest, unitOfMeasureValidation, unitOfMeasureRouteValidation } = require("../middleware/validations/unit-of-measure")

//resolving route with controller method 
router.get('/', controller.getAll)
router.get('/:unitId', unitOfMeasureRouteValidation, validateRequest, controller.getById)
router.post('/', requiresAuth(), unitOfMeasureValidation, validateRequest, controller.createUnitOfMeasure)
router.put('/:unitId', requiresAuth(), [unitOfMeasureRouteValidation,unitOfMeasureValidation], validateRequest, controller.updateUnitofMeasure)
router.delete('/:unitId', requiresAuth(), unitOfMeasureRouteValidation, validateRequest, controller.deleteById)


module.exports = router;