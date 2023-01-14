const { MongoClient } = require("mongodb");
require('dotenv').config();

let _client;

const openDbConnection = async function () {
    // if connection has been initialized return it
    if(_client) return _client;

    _client = new MongoClient(process.env.MONGO_URI);
    await _client.connect();
    return _client;
}

module.exports = { openDbConnection };