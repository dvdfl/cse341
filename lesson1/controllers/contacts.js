const connection = require("../data/connection");
const ObjectId = require("mongodb").ObjectId;

let client, collection;

const openDatabase = async ()=>{
    client = await connection.openDbConnection()
    collection = client.db("cse341").collection("contacts");
}

const getAll = async function(req, res, next){
    await openDatabase();
    //console.log("querying for all documents in contacts");
    const allDocs = await collection.find().toArray();
    //console.log(`${allDocs.length} documents returned.`);

    res.json(allDocs);
}

const getById = async function(req, res, next){
    await openDatabase();

    //console.log("querying by Id");
    //console.log(req.params);
    const query = { _id : ObjectId(req.params.contactId) };
    const doc = await collection.findOne(query);
    //console.log(`${allDocs.length} documents returned.`);

    res.json(doc);
}


module.exports = { getAll, getById };