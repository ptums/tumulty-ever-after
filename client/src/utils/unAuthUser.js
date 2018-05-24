import { createApolloFetch } from 'apollo-fetch';

const uri = 'http://www.tumultyeverafter.com/graphql';
const apolloFetch = createApolloFetch({ uri });

const query = `
  mutation unAuthUser($_id: String) {
    unAuthUser(_id: $_id) {
      _id
    }
  }
`;

export const unAuthUser = (id) => {
  const variables = { _id: JSON.stringify(id) };
  return apolloFetch({ query, variables }).then(results => results);
};
