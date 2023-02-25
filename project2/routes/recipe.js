const express = require('express')
const router = express.Router()
const controller = require("../controllers/recipe")
//const { verifyToken } = require("../middleware/auth")
const { requiresAuth } = require('express-openid-connect');
//validation
const { validateRequest, recipeValidation, recipeRouteValidation } = require("../middleware/validations/recipe")

//resolving route with controller method 
router.get('/', controller.getAll)
router.get('/:recipeId', recipeRouteValidation, validateRequest, controller.getById)
router.post('/', requiresAuth(), recipeValidation, validateRequest, controller.createRecipe)
router.put('/:recipeId', requiresAuth(), [recipeRouteValidation,recipeValidation], validateRequest, controller.updateRecipe)
router.delete('/:recipeId', requiresAuth(), recipeRouteValidation, validateRequest, controller.deleteById)


module.exports = router