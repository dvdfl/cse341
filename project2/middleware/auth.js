module.exports = {
    verifyToken : function (req, res, next){
        const bearerHeader = req.headers['authorization'];

        if (bearerHeader) {
          const bearer = bearerHeader.split(' ');
          const bearerToken = bearer[1];
          req.token = bearerToken;
          if(req.token == "MG9haW94OGJtc0JLXhIY")
          {
              next();
              return;
          }
        }
        // Forbidden
        res.sendStatus(403);
    }
}