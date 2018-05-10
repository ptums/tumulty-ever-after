import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const ADD_GUEST = gql`
mutation addGuest($name: String, $guest: String, $contact: String) {
    addGuest(name: $name, guest: $guest, contact: $contact) {
      name,
      guest,
      contact
    }
  }
`;

const GUEST_LIST = gql`
query {
  guests {
    name,
    guest,
    contact
  }
}
`;

const AddGuest = () => {
  let name;
  let guest;
  let contact;
  return (
    <Mutation
      mutation={ADD_GUEST}
      update={(cache, { data: addGuest }) => {
        try {
         const { guests } = cache.readQuery({ query: GUEST_LIST });
         cache.writeQuery({ query: GUEST_LIST, data: { guests: guests.concat([addGuest]) }})
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
              addGuest({ variables: { name: name.value, guest: guest.value, contact: contact.value } });
              e.target.reset();
          }}
            id="addGuestForm"
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Name"
                ref={(node) => { name = node; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="guest">Guest:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Guest Name"
                id="guest"
                ref={(node) => { guest = node; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact:</label>
              <textarea
                className="form-control"
                type="text"
                id="contact"
                placeholder="Email and/or best contact & address"
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
