const { requiresAuth } = require('express-openid-connect');
const express = require('express')
const router = express.Router();

//routes
router.use("/recipe", require("./recipe"))

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


// root routes
router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Cookbook API Auth0 ',
      isAuthenticated: req.oidc.isAuthenticated()
    });
  });
  
  router.get('/profile', requiresAuth(), function (req, res, next) {
    res.render('profile', {
      userProfile: JSON.stringify(req.oidc.user, null, 2),
      title: 'Profile page'
    });
  });
  

module.exports = router