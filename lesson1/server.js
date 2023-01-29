#!javascript
var express = require('express'),
    app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
    .use('/', require('./routes'))
    //.use("/contacts", require("./routes/contacts"))

app.listen(port);
