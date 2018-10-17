var path = require("path"),
    con = require(path.join(__dirname, "connection")),
    orm = {
        selectAll: function (callback) {
            con.query("SELECT * FROM burgers", function (err, result) {
                if (err) throw err;
                if (callback) {
                    callback(result);
                }
            });
        },
        insertOne: function (name, devoured, callback) {
            con.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [name, devoured], function (err, result) {
                if (err) throw err;
                if (callback) {
                    callback(result);
                }
            });
        },
        updateOne: function (id, devoured, callback) {
            con.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devoured, id], function (err, result) {
                if (err) throw err;
                if (callback) {
                    callback(result);
                }
            });
        }
    };
module.exports = orm;