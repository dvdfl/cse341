#!javascript
const mongoDb = require("../db/mongoDb")

const getAll = async function (req, res, next){
    // console.log(dbContext);

    const dbClient = await mongoDb.createConnection();
    
    try{
  
        // Test - Listing Databases
        /*databasesList = await dbClient.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    
        // Test - Sample data query
        let collection = dbClient.db("sample_airbnb").collection("listingsAndReviews");
        let sample = await collection.findOne();
        console.log(`sample id: ${sample._id}, name: ${sample.name}`);*/

        let collection = dbClient.db("cse341").collection("professionals");
        //console.log(`[${new Date()}] request data`);
        let resultset = await collection.findOne();
        //console.log(`[${new Date()}] returning data`);
        res.json(resultset);
        return;
    }
    catch(ex){
        console.log(ex);
    }
    finally{
        await dbClient.close();
    }

    // sending response content
    res.send("error");
}

module.exports = { getAll };