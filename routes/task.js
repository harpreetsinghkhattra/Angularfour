var express = require('express');
var route = express.Router();

//route operations
var operation = require('../Operations');

/*
* connection check
 */
route.post('/', function(req, res){
    console.log(req.body);
    res.json({
        code : 1,
        message : 'connection successfully build'
    })
        .status(200)
        .end();
});

route.post('/login', function(req, res){
    operation.login(req.body, function (data){
        if(data && data.length !== 0){
            req.session.username = data.username;
            req.session.password = req.body.password;
            req.session.isLogin = true;
            req.session.save();

            //response
            res.status(200)
                .json({responseData : 1})
                .end();
        }else{
            res.status(401)
                .json({responseData : 0})
                .end();
        }
    });
})


module.exports = route;