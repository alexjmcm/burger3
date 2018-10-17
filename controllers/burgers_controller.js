var path = require("path");

var burger = require(path.join("..", "models", "burger"));

module.exports = router = function (appMod) {
    appMod.get("/", function (req, res) {
        burger.updateMenu(function (result) {
            res.render("index", { burgers: result });
        });
    });
    appMod.get("*", function (req, res) {
        res.redirect("/");
    });
    appMod.post("/api/burgers/add", function (req, res) {
        burger.addNew(req.body.burger);
    });
    appMod.post("/api/burgers/remove", function (req, res) {
        burger.munch(req.body.id);
    });
}