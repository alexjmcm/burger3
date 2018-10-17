var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, "controllers", "burgers_controller"))(app);

var PORT = process.env.PORT || 8082;

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});