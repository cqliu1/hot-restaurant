// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =============================================================
// DATA
// =============================================================

// reservations (constructor?)
// - name
// - phone number
// - email
// - unique ID

// tables
// - array of reservations?

// waitlist
// - array of reservations?

const Reservation = function(name,phone,email,id) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.id = id;
}

const tables = [];

const waitlist = [];

// =============================================================
// ROUTES
// =============================================================

// basic route to home page (home.html) (GET)
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// route to view tables (tables.html) (GET)
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// route to make a reservation (reserve.html) (GET)
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// =============================================================
// API
// =============================================================

// api route to view tables (GET)
app.get("/api/tables", function(req, res) {
  res.json(tables);
});
// api route to make new reservation (POST)

app.post("/api/new", function(req, res) {
  var newRes = req.body;
  // newRes.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase(); dont need i think

  console.log(newRes);
  if (tables.length < 5){
  	tables.push(newRes);
  	res.json(true);
  } else{
  	waitlist.push(newRes);
  	res.json(false);
  }
  

  //res.json(newRes);
});
// api route to view waitlist (GET)
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});



// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);

});