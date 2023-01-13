#!javascript
const { MongoClient } = require('mongodb');
//loading .env data
require('dotenv').config();


//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_SERVER}/?retryWrites=true&w=majority`;

/***
 * Creates Mongo Connection
 * @return MongoClient
 */
const createConnection = async function () {
    try {
        //Checking if connection has been created
        
        
        //initializing connection
        const _client = new MongoClient(uri);

        await _client.connect();
        return _client;
    }
    catch(ex){
        console.log(ex);
    }
}

const closeConnection = async function(){
    await _client.close();
}

module.exports = { createConnection, closeConnection }