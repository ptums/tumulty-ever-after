import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GUEST_LIST = gql`
query {
  guests {
    name,
    guest,
    contact
  }
}
`;

const GuestList = graphql(GUEST_LIST)(props => (
  <div>
    { (props.data.guests) ?
        props.data.guests.map(val => (
          <div key={val.name}>
            <p>Name: {val.name}</p>
            <p>Guest: {val.guest}</p>
            <p>Contact: {val.contact}</p>
          </div>
        )) : ''
    }
  </div>
));

export default GuestList;
