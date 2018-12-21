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

// Start the server
app.listen(port, function () {
  console.log(" Server running on: " + port);
});