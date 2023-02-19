const express = require('express')
const router = express.Router()
//require index controller
const controller = require("../controllers/recipe")
const { verifyToken } = require("../middleware/auth")
//validation
const { validateRequest, recipeValidation, recipeRouteValidation } = require("../middleware/validations/recipe")

//resolving route with controller method 
router.get('/', controller.getAll)
router.get('/:recipeId', recipeRouteValidation, validateRequest, controller.getById)
router.post('/', verifyToken, recipeValidation, validateRequest, controller.createRecipe)
router.put('/:recipeId', verifyToken, [recipeRouteValidation,recipeValidation], validateRequest, controller.updateRecipe)
router.delete('/:recipeId', verifyToken, recipeRouteValidation, validateRequest, controller.deleteById)


module.exports = router