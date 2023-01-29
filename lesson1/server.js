#!javascript
var express = require('express'),
    app = express();
const port = process.env.PORT || 3000;
//CORS
const cors = require('cors')
app.use(cors())

app.use(express.json())
    .use('/', require('./routes'))
    //.use("/contacts", require("./routes/contacts"))

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port);
