#!javascript
const showWelcome = function (req, res, next){
    // sending response content
    res.send("Working!");
}

module.exports = { showWelcome };