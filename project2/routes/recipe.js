const express = require('express')
const router = express.Router()
//require index controller
const controller = require("../controllers/recipe")
//validation
const { validateRequest, recipeValidation, recipeRouteValidation } = require("../middleware/validations/recipe")

//resolving route with controller method 
router.get('/', controller.getAll)
router.get('/:recipeId',recipeRouteValidation, validateRequest, controller.getById)
router.post('/', recipeValidation, validateRequest, controller.createRecipe)
router.put('/:recipeId', [recipeRouteValidation,recipeValidation], validateRequest, controller.updateRecipe)
router.delete('/:recipeId', recipeRouteValidation, validateRequest, controller.deleteById)


module.exports = router