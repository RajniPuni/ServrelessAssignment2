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
    res.sendFile(__dirname + '/register.html');
});

app.post('/', function(request, response){
    username = request.body.name;
    password = request.body.email;
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (username, password) VALUES ('"+username+"', '"+password+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
    return response.send({ "message": "user inserted" });
});

var server = app.listen(5001, function () {
    console.log('Node server is running..');
});