#!javascript
const showName = function (req, res, next){
    // sending response content
    res.send("David Flores.");
}

module.exports = { showName };