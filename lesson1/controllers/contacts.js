const connection = require("../data/connection");
const ObjectId = require("mongodb").ObjectId;

let client, collection;

const openDatabase = async ()=>{
    client = await connection.openDbConnection()
    collection = client.db("cse341").collection("contacts");
}

const getAll = async function(req, res, next) {
    await openDatabase();
    //console.log("querying for all documents in contacts");
    const allDocs = await collection.find().toArray();
    //console.log(`${allDocs.length} documents returned.`);

    res.json(allDocs);
};

const getById = async function(req, res, next) {
    await openDatabase();

    //console.log("querying by Id");
    //console.log(req.params);
    const query = { _id : ObjectId(req.params.contactId) };
    const doc = await collection.findOne(query);
    //console.log(`${allDocs.length} documents returned.`);

    res.json(doc);
}

const createContact = async function(req, res, next) {
    await openDatabase();

    //console.log("querying by Id");
    //console.log(req.body);
    const newContact = req.body;
    const result = await collection.insertOne(newContact);
    //console.log(result)
    //console.log(`Document returned with _id: ${result.insertedId}`);

    // returning status and result
    res.status(201);
    res.json({ id: result.insertedId });
}

const updateContact = async function(req, res, next) {
    await openDatabase();

    //console.log("updating by Id");
    //console.log(req.body);
    const query = { _id : ObjectId(req.params.contactId) };
    const contact = req.body;
    const updateDoc= { $set : {} } ;
    for (const prop in contact) {
        if (Object.hasOwnProperty.call(contact, prop)) {
            updateDoc["$set"][prop] = contact[prop];
        }
    }
    //console.log(updateDoc);
    const result = await collection.updateOne(query, updateDoc);
    //console.log(result)
    //console.log(`${result.matchedCount} documents returned.`);
    res.status(204);
}

const deleteById = async function(req, res, next) {
    await openDatabase();

    //console.log("deleting by Id");
    const query = { _id : ObjectId(req.params.contactId) };
    const result = await collection.deleteOne(query);
    //console.log(`${result.deletedCount} documents deleted.`);

    res.status(200);
    res.json({ deletedCount : result.deletedCount });
}

module.exports = { getAll, getById, createContact, updateContact, deleteById };