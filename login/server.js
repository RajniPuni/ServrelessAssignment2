const express = require('express');
const app = express();
var mysql = require('mysql');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var con = mysql.createConnection({
    host: "146.148.67.173",
    user: "serverlessdb2",
    password: "Swim_787",
    database: "assignment2"
  });


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.post('/', function(request, response){
    username = request.body.name;
    password = request.body.email;
    con.connect(function(err) {
            
        console.log("Connected!");
        var sqlinsert = "INSERT INTO userstate (username, online, logintime, logouttime) VALUES ('"+username+"',1, sysdate(), sysdate())";
        con.query(sqlinsert, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

        var sql = "SELECT * FROM users where username='"+username+"' and password='"+password+"'";
        con.query(sql, function (err, result, fields) {
            if (result.length > 0) {
                console.log(result[0].username);
                console.log(result[0].password);
                return response.send({ "message": "user logged in" });
            }
            else{
                return response.send({ "message": "user not logged in" });
            }      
        });
    });
    
});

var server = app.listen(4003, function () {
    console.log('Node server is running..');
});
