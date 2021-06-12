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
    var sql = "SELECT username FROM userstate where online=1 group by username";
    var onlineu = ""
    con.query(sql, function (err, result, fields) {
        if (result.length > 0) {
            console.log(result[0].username);
            onlineu = result[0].username;
            res.write('<html>');
            res.write('<head> <title>Online users:</title> </head>');
            res.write(' <body> <div>Online users:</div><div>'+ onlineu+'</div></body>');
            res.write('</html>');
        }
    });
    
    //res.sendFile(__dirname + '/onlineusers.html');
});

var server = app.listen(4002, function () {
    console.log('Node server is running..');
});
