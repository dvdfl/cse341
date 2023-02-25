const { auth } = require('express-openid-connect');

module.exports = {
    addOAuthConfig : function (env){
        const port = env.PORT || 3300;
        
        // OAuth configuration
        const config = {
            authRequired: false,
            auth0Logout: true
        };
        
        if (!config.baseURL && !env.BASE_URL && env.PORT && env.NODE_ENV !== 'production') {
            config.baseURL = `http://localhost:${port}`;
        }
        return auth(config)
    },
    addOAuthMiddleware: function (req, res, next) {
        res.locals.user = req.oidc.user;
        next();
      }
}