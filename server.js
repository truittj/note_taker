// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sever static content for the app from the "public" directory in the app
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on: http://localhost:" + PORT);
});
