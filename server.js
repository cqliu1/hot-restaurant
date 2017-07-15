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

// =============================================================
// ROUTES
// =============================================================

// basic route to home page (index.html) (GET)

// route to view tables (tables.html) (GET)

// route to make a reservation (reserve.html) (GET)

// =============================================================
// API
// =============================================================

// api route to view tables (GET)

// api route to make new reservation (POST)

// api route to view waitlist (GET)