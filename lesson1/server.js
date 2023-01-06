#!javascript
var express = require('express'),
    app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))
app.listen(port);

// app.get('/', function(req, res) {
//     res.send('David Flores')
// })
