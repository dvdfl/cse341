const { addOAuthConfig, addOAuthMiddleware } = require('./middleware/oAuth')
const { handleError } = require('./middleware/error-handling')
const path = require('path');
const express = require('express')
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3300;

// Static pages
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//OAuth - configuration
app.use(addOAuthConfig(process.env));
// OAuth Middleware to make the `user` object available for all views
app.use(addOAuthMiddleware);

// adding routes
app.use(express.json())
    .use('/', require('./routes'))

// Handling Errors
app.use(handleError);

app.listen(port,() => console.log(`Server is running on port ${port}`));
