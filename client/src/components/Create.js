import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const ADD_USER = gql`
mutation addUser($username: String, $password: String) {
    addUser(username: $username, password: $password) {
      username,
      password
    }
  }
`;

const USER_LIST = gql`
query {
  users {
    username,
    password
  }
}
`;

const AddUser = () => {
  let username;
  let password;
  return (
    <Mutation
      mutation={ADD_USER}
      update={(cache, { data: addUser }) => {
        try {
         const { users } = cache.readQuery({ query: USER_LIST });
         cache.writeQuery({ query: ADD_USER, data: { users: users.concat([addUser]) } });
        } catch (e) {
          return false;
        }
      }}
    >
      {(addUser => (
        <div className="AddGuest d-flex justify-content-center align-items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addUser({ variables: { username: username.value, password: password.value } });
              e.target.reset();
          }}
            id="addGuestForm"
          >
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                className="form-control"
                type="text"
                id="username"
                placeholder="Enter username"
                ref={(node) => { username = node; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter password"
                id="password"
                ref={(node) => { password = node; }}
              />
            </div>
            <button type="submit" className="btn btn-forest">Submit</button>
          </form>
        </div>
    ))}
    </Mutation>
  );
};

export default AddUser;
