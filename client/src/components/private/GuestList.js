import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import DownloadGuestList from './DownloadGuestList';


const GUEST_LIST = gql`
query {
  guests {
    name,
    guest,
    contact
  }
}
`;

const GuestList = graphql(GUEST_LIST)((props) => {
  const { data, unAuthenticateUser, sessionId } = props;
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-xs-12 body-content">
        <h1 className="float-left">GUEST LIST</h1>
        <div className="float-right">
          <DownloadGuestList guests={data.guests} />
          <input type="button" className="btn btn-danger" value="Sign Out" onClick={() => unAuthenticateUser(sessionId)} />
        </div>
      </div>
      <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-xs-12 body-content">
        <BootstrapTable data={data.guests} height="150" scrollTop="Bottom">
          <TableHeaderColumn dataField="name" isKey>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="guest">Guest</TableHeaderColumn>
          <TableHeaderColumn dataField="contact">Contact</TableHeaderColumn>
        </BootstrapTable>
      </div>
    </div>
  );
});

export default GuestList;
