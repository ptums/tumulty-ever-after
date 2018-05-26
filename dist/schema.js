'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = require('graphql-tools'),
    makeExecutableSchema = _require.makeExecutableSchema;

var randomToken = require('random-token');
var Guests = require('../models/Guests');
var Users = require('../models/Users');

// The GraphQL schema in string form
var typeDefs = '\n  type Query { guests: [Guest], users: [Users] }\n  type Mutation { addGuest(name: String, email: String, contact: String): Guest, authUser(username: String, password: String) : Users, unAuthUser(_id: String) : Users, addUser(username: String, password: String): Users }\n  type Guest { _id: String, name: String, email: String, contact: String }\n  type Users { _id: String, username: String, password: String, loginAttempts: String!, lockUntil: String!, authed: String!, sessionId:String! }\n  schema { query: Query, mutation: Mutation }\n';

// The resolvers
var resolvers = {
  Query: {
    guests: function guests() {
      return Guests.find({}, function (err, data) {
        return data;
      });
    },
    users: function users() {
      return Users.find({}, function (err, data) {
        return data;
      });
    }
  },
  Mutation: {
    addGuest: async function addGuest(root, args) {
      console.log(args);
      var res = await Guests.create(args);
      return Guests.findOne({ _id: res._id });
    },
    addUser: async function addUser(root, args) {
      var res = await Users.create(args);
      return Users.findOne({ _id: res._id });
    },
    authUser: async function authUser(root, args) {
      await Users.getAuthenticated(args.username, args.password, function (err, user, reason) {
        if (err) throw err;
        if (user) {
          Users.update({ username: user.username }, { authed: true, sessionId: randomToken(16) }, function (data) {
            return data;
          });
        }

        var reasons = Users.failedLogin;

        switch (reason) {
          case reasons.NOT_FOUND:
            return false;
          case reasons.PASSWORD_INCORRECT:
            return false;
          case reasons.MAX_ATTEMPTS:
            return false;
          default:
            return false;
        }
      });
    },
    unAuthUser: async function unAuthUser(root, args) {
      var argId = await JSON.parse(args._id);
      return Users.update({ sessionId: argId }, { authed: false, sessionId: 0 }, function (data) {
        return data;
      });
    }
  }
};

// Put together a schema
var schema = exports.schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});