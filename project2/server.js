const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3300;

app.use(express.json())
    .use('/', require('./routes'))
// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Handling Errors
app.use((err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(port,() => console.log(`Server is running on port ${port}`));
