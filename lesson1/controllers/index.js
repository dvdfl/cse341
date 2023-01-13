#!javascript
const showName = function (req, res, next){
    // sending response content
    res.send("David F");
}

module.exports = { showName };