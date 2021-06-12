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
            res.write(' <body> <div>Online users:</div><div>'+ onlineu+'</div><br/></body><form method="post" action="/"><input type="hidden" name="name"><input type="submit" value="Logout"></form>');
            res.write('</html>');
        }
    });
    
    //res.sendFile(__dirname + '/onlineusers.html');
});

app.post('/', function(request, response){
    username = request.body.name;
    con.connect(function(err) {
            
        console.log("Connected!");
        var sqlupdate = "UPDATE userstate SET logouttime=sysdate() where username='"+username+"'";
        con.query(sqlupdate, function (err, result) {
            if (err) throw err;
            console.log("1 record updated");
        });
        return response.send({ "message": "user logged out" });
    });
    
});


var server = app.listen(4002, function () {
    console.log('Node server is running..');
});
