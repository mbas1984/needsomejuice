// console.log("testing!!")
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "tetrainstance.cys8akbbtxfw.us-east-1.rds.amazonaws.com",
    user: "tetra",
    password: "seniorproject",
    database: "tetra_database"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM juice", function (err, result) {
        if (err) throw err;
        console.log(result);
      });
  });


 