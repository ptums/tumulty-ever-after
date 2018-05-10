import React from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const AUTH_USER = gql`
mutation authUser($username: String, $password: String ) {
    authUser(username: $username, password: $password) {
      username,
      password
    }
  }
`;

const LoginModal = (props) => {
  const { visible, closeModal, authenticateUser } = props;
  let username;
  let password;
  return (
    <Mutation mutation={AUTH_USER}>
      {(authUser => (
        <Modal
          visible={visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => closeModal()}
        >
          <form
            onSubmit={(e) => {
            e.preventDefault();
            authUser({ variables: { username: username.value, password: password.value } })
            .then(() => authenticateUser());
            e.target.reset();
          }}
            id="ModalLoginForm"
          >
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Username"
                ref={(node) => { username = node; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                ref={(node) => { password = node; }}
              />
            </div>
            <button type="submit"className="btn btn-forest">Login</button>
          </form>
        </Modal>
      ))}
    </Mutation>
  );
};

LoginModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  authenticateUser: PropTypes.func.isRequired,
};

export default LoginModal;
