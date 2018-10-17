var mysql = require("mysql");
var con;
if (process.env.JAWSDB_URL) {
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    con = mysql.createConnection({
        host: "localhost",
        port: 3307,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}
con.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + con.threadId);
});
module.exports = con;