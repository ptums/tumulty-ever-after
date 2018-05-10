'use strict';

var _schema = require('./schema');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var _require = require('apollo-server-express'),
    graphqlExpress = _require.graphqlExpress,
    graphiqlExpress = _require.graphiqlExpress;

// Initialize the app
var app = express();

// Enable CORS
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
// The GraphQL endpoint
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema: _schema.schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3001, function () {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});