// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// parse burger application
app.use(bodyParser.json());

// Set Handlebars for the burger app
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imports application routes
const routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
});