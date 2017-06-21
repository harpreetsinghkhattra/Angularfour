var client = require('mongodb').MongoClient;

//URL FOR MONGODB
const url = 'mongodb://127.0.0.1:27017/junctionUI';

/*
* JUNTIONUI DATABASE CONNECTION
 */
function connection(cb){
    client.connect(url, function(err, db){
        cb(err, db);
    })
}

module.exports.login = function(req, cb){
    connection(function(err, db){
        if(err) throw err;
        if(db){
            var collection = db.collection('users');
            collection.find({username : req.username}).toArray(function(err, data){
                if(err) throw err;
                if(data && data.length !== 0){
                    //password login bit latter
                    cb(data);
                }else{
                    cb([]);
                }
            })
        }
    })
}

module.exports.registeration = function(req){
    connection(function(err, db){
        if(err) throw err;
        if(db){
            var collection = db.collection('users');
            collection.find({username : req.username}).toArray(function(err, data){
                if(err) throw err;
                if(data && data.length !== 0){
                    //password login bit latter
                }
            })
        }
    })
}