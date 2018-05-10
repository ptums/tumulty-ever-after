const { makeExecutableSchema } = require('graphql-tools');
const randomToken = require('random-token');
const Guests = require('../models/Guests');
const Users = require('../models/Users');

// The GraphQL schema in string form
const typeDefs = `
  type Query { guests: [Guest], users: [Users] }
  type Mutation { addGuest(name: String, guest: String, contact: String): Guest, authUser(username: String, password: String) : Users, unAuthUser(_id: String) : Users }
  type Guest { _id: String, name: String, guest: String, contact: String }
  type Users { _id: String, username: String, password: String, loginAttempts: String!, lockUntil: String!, authed: String!, sessionId:String! }
  schema { query: Query, mutation: Mutation }
`;

// The resolvers
const resolvers = {
  Query: {
    guests: () => Guests.find({}, (err, data) => data),
    users: () => Users.find({}, (err, data) => data),
  },
  Mutation: {
    addGuest: async (root, args) => {
      const res = await Guests.create(args);
      return Guests.findOne({ _id: res._id });
    },
    authUser: async (root, args) => {
      await Users.getAuthenticated(args.username, args.password, (err, user, reason) => {
        if (err) throw err;
        if (user) {
          Users.update({ username: user.username }, { authed: true, sessionId: randomToken(16) }, (data => data));
        }

        const reasons = Users.failedLogin;

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
    unAuthUser: async (root, args) => {
      const argId = await JSON.parse(args._id);
      return Users.update({ sessionId: argId }, { authed: false, sessionId: 0 }, (data => data));
    },
  },
};

// Put together a schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

