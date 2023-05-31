var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/Rockets';

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
    
        console.log( "DB created");
    
    
    db.close();
});

//{ useNewUrlParser: true }