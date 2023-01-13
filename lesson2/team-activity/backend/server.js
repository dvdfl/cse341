#!javascript
var express = require('express'),
    app = express();

const dotenv  = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3200;

app
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes/index'))
    .use('/professional', require('./routes/professional'))
app.listen(port);