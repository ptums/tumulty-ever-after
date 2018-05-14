'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var _require = require('apollo-server-express'),
    graphqlExpress = _require.graphqlExpress,
    graphiqlExpress = _require.graphiqlExpress;

var _require2 = require('./schema'),
    schema = _require2.schema;

// Initialize the app


var app = express();
var port = process.env.PORT || 3001;

// Enable CORS
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
// The GraphQL endpoint
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema: schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// serve up react app under home route
app.get('/', function (req, res) {
  app.use(express.static(__dirname + '../client/build/'));
  res.sendFile(__dirname + '../client/build/index.html');
});
// Start the server
app.listen(port, function () {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});