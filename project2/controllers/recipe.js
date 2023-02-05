const dbConn =require('../db/conn')
const ObjectId = require("mongodb").ObjectId;

//console.log("obtaining connection...");

const _db = dbConn.getDb()
const _collection = _db.db("cookbook").collection("recipies");

getAll = async function(req, res, next) { 
    // console.log("getting all documents")
    const allDocs = await _collection.find().toArray();
    // console.log(`${allDocs.length} documents returned.`);
    res.json(allDocs)
    //res.json([]);
}

getById = async function(req, res, next) { 
    const query = { _id : new ObjectId(req.params.recipeId) };
    const doc = await _collection.findOne(query);
    res.json(doc)
}

createRecipe = async function(req, res, next) {
    await openDatabase();

    //console.log("querying by Id");
    //console.log(req.body);
    const newRecipe = req.body;
    const result = await _collection.insertOne(newRecipe);
    //console.log(result)
    //console.log(`Document returned with _id: ${result.insertedId}`);

    // returning status and result
    res.status(201);
    res.json({ id: result.insertedId });
}

module.exports = { getAll, getById, createRecipe }