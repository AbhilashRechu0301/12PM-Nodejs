var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url,{ useNewUrlParser: true }, function (err, db) {
 
  if (err) {
    console.log(err);
    return;
  }
  //if (db){
  var dbo = db.db("Ott");
  dbo.collection("products").insertOne(
    {
      "pid": 107,
      "name": "product 7",
      "description": "description 8",
      "imageUrl": "fghvjb",
      "price": 1900,
      "quantity": 3,
      "seller": "RetailNetfgchj",
    },
    function (err, res) {
     // if (err) throw err;
    //  console.log("1 document inserted");
     // db.close();
       if (err){
        console.log(err);

      }
       else{
           console.log("document is inserted");
       }

       db.close();
    }
  );
});
