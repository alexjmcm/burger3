var path = require("path"),
    orm = require(path.join(__dirname, "..", "config", "orm"));
var burger = {
    updateMenu: function (callback) {
        resultArray = [];
        orm.selectAll(function (result) {
            uneaten = [];
            result.forEach(function (burger) {
                if (!(Boolean(burger.devoured))) {
                    uneaten.push(burger);
                }
            });
            if (callback) {
                callback(uneaten);
            }
        });
    },
    addNew: function (burger) {
        orm.insertOne(burger, false);
    },
    munch: function (id, callback) {
        orm.updateOne(id, true);
    }
}
module.exports = burger;
