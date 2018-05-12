import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


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
  <BootstrapTable data={ props.data.guests } height="150" scrollTop="Bottom">
    <TableHeaderColumn dataField="name" isKey>Name</TableHeaderColumn>
    <TableHeaderColumn dataField="guest">Guest</TableHeaderColumn>
    <TableHeaderColumn dataField="contact">Contact</TableHeaderColumn>
  </BootstrapTable>
));

export default GuestList;
