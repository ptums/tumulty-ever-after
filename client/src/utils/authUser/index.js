import { createApolloFetch } from "apollo-fetch";

const uri = "http://localhost:3001/graphql";
const apolloFetch = createApolloFetch({ uri });

const query = `
 query {
    users {
        authed,
        sessionId,
        _id
    }
 }
`;

export const authUser = () => apolloFetch({ query }).then(result => result.data.users.filter(a => a.authed === "true"));
