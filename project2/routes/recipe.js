const express = require('express')
const router = express.Router()
//require index controller
const controller = require("../controllers/recipe")

//resolving route with controller method 
router.get('/', controller.getAll)
router.get('/:recipeId', controller.getById)
router.post('/', controller.createRecipe)
//  router.put('/:contactId', controller.updateContact)
//  router.delete('/:contactId', controller.deleteById)


module.exports = router