const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
    .use('/', require('./routes'))
// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port);