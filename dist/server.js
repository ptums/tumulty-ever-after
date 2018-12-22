"use strict";

var _schema = require("./schema");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var _require = require("apollo-server-express"),
    graphqlExpress = _require.graphqlExpress,
    graphiqlExpress = _require.graphiqlExpress;

var Pages = require("../models/Pages");

// Initialize the app
var app = express();
var port = process.env.PORT || 3001;

// Enable CORS
// http://www.tumultyeverafter.com
var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

// Allow CORS between routes
app.use(cors(corsOptions));

// The GraphQL endpoint
app.use("/graphql", cors(), bodyParser.json(), graphqlExpress({ schema: _schema.schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Load static resources for the client
app.use(express.static(path.join(__dirname, "../client/build")));

// Serve up react app under home route
app.get("/", function (req, res) {
  var index = path.join(__dirname, "../client/build", "index.html");
  res.sendFile(index);
});

// Create pages 
function createPages() {
  var pages = [{
    link: "/events",
    title: "Events",
    content: "<p> Events pages content will go here..."
  }, {
    link: "/rsvp",
    title: "RSVP",
    content: "<p> RSVP pages content will go here..."
  }, {
    link: "/about-us",
    title: "About Us",
    content: "<p> About Us pages content will go here..."
  }, {
    link: "/accomodations",
    title: "Accomodations",
    content: "<p>Accomodations pages content will go here..."
  }, {
    link: "/registry",
    title: "Registry",
    content: "<p>Registry pages content will go here..."
  }, {
    link: "/transportation",
    title: "Transportation",
    content: "<p>Transportation pages content will go here..."
  }];
  Pages.create(pages, function (err) {
    console.log("pages created!");
  });
}
// Start the server
app.listen(port, function () {
  createPages();
  console.log(" Server running on: " + port);
});