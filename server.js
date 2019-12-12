// // Dependencies
// // =============================================================
// var express = require("express");
// var path = require("path");
// //var db = require("./db/db.json");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = 8000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });

//   // app.get("/reserve", function(req, res) {
//   //   res.sendFile(path.join(__dirname, "./public/reservation.html"));
//   // });

//   app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
//   });

//   app.get("/api/notes", function(req, res) {
//     return res.json(notes);
//   });

//   // app.get("/api/waitlist", function(req, res) {
//   //   return res.json(waitlist);
//   // });

//   app.post("/api/clear", function(req,res) {
//       notes = [];
//       //waitlist = [];
//   })

//   app.post("/api/notes", function(req, res) {
//     var note = req.body
//     notes.push(note)
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     // var newReservation = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newReservation
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(note);
  
//     // notes.push(newReservation);
  
//     res.json(note);
//   });

//   // app.post("/api/waitlist", function(req, res) {
//   //   // req.body hosts is equal to the JSON post sent from the user
//   //   // This works because of our body parsing middleware
//   //   var newReservation = req.body;
  
//   //   // Using a RegEx Pattern to remove spaces from newReservation
//   //   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   //   newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
//   //   console.log(newReservation);
  
//   //   waitlist.push(newReservation);
  
//   //   res.json(newReservation);
//   // });

//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  



////////////////////////////////////////
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var fs = require("fs");
var cors = require('cors');


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
app.use(cors());
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// With every response that we send to the client, include that public
app.use(express.static("public"))

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Code to


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});