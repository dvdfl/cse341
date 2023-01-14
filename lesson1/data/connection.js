const { MongoClient } = require("mongodb");
require('dotenv').config();

const _client = new MongoClient(process.env.MONGO_CS);

const openDbConnection = async function () {
    await _client.connect();
    return _client;
}

module.exports = { openDbConnection };