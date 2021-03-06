import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import "./index.css";

// add a guest mutation query
const ADD_GUEST = gql`
mutation addGuest($name: String, $email: String, $contact: String) {
    addGuest(name: $name, email: $email, contact: $contact) {
      name,
      email,
      contact
    }
  }
`;

// results query for guest list
const GUEST_LIST = gql`
query {
  guests {
    name,
    email,
    contact
  }
}
`;

const AddGuest = () => {
  let name;
  let email;
  let contact;
  // Mutation component to execute add guest 
  // to database
  return (
    <Mutation
      mutation={ADD_GUEST}
      update={(cache, { data: addGuest }) => {
        try {
         const { guests } = cache.readQuery({ query: GUEST_LIST });
         cache.writeQuery({ query: GUEST_LIST, data: { guests: guests.concat([addGuest]) } });
        } catch (e) {
          return false;
        }
      }}
    >
      {(addGuest => (
        <div className="AddGuest d-flex justify-content-center align-items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addGuest({ variables: { name: name.value, email: email.value, contact: contact.value } });
              e.target.reset();
          }}
            id="addGuestForm"
          >
            <div className="form-group">
              <label htmlFor="name">Name(s):</label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Enter your name & the names in your party"
                ref={(node) => { name = node; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your e-mail address"
                id="email"
                ref={(node) => { email = node; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact:</label>
              <textarea
                className="form-control"
                type="text"
                id="contact"
                placeholder="Enter your mailing address"
                ref={(node) => { contact = node; }}
               />
            </div>
            <button type="submit" className="btn btn-forest">Submit</button>
          </form>
        </div>
    ))}
    </Mutation>
  );
};

export default AddGuest;
