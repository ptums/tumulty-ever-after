import React, { Component } from 'react';
import cookie from 'react-cookies';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square-o';
import { authUser } from '../utils/authUser';
import { unAuthUser } from '../utils/unAuthUser';
import AddGuest from './AddGuest';
import GuestList from './private/GuestList';
import LoginModal from './LoginModal';
import LoveStoryVideo from './LoveStoryVideo';
import PhotoGallery from './PhotoGallery';
import rpFeatured from '../media/original.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      sessionId: null,
    };
    this.closeModal = this.closeModal.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
    this.unAuthenticateUser = this.unAuthenticateUser.bind(this);
  }
  componentDidMount() {
    if (document.cookie) {
      this.setCookie();
    }
  }
  setCookie() {
    let catId = document.cookie.split(';');
    catId = catId[0].split('=').pop();
    this.setState({ sessionId: catId });
  }
  authenticateUser() {
    authUser().then(data => data[0]).then((results) => {
      if (typeof results !== 'undefined') {
        const { sessionId } = results;
        this.setState({ sessionId }, () => cookie.save('sessionId', this.state.sessionId, { path: '/' }));
        this.closeModal();
      } else {
        this.closeModal();
      }
    });
  }
  unAuthenticateUser(id) {
    unAuthUser(id).then(() => {
      cookie.remove('sessionId', { path: '/' });
      this.setState({ sessionId: null });
    });
  }
  openModal() {
    this.setState({ visible: true });
  }
  closeModal() {
    this.setState({ visible: false });
  }
  render() {
    const { sessionId } = this.state;

    if (!sessionId) {
      return (
        <div className="App container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-xs-12 body-content">
              <div className="card">
                <img className="card-image-top img-fluid mb-1" src={rpFeatured} alt="rachel peter header" />
                <FaPlusSquareO onClick={() => this.openModal()} />
                <h1 className="text-center mt-5 mb-2">Our Love Story!</h1>
                <LoginModal
                  visible={this.state.visible}
                  closeModal={this.closeModal}
                  authenticateUser={this.authenticateUser}
                />
                <LoveStoryVideo />
                <PhotoGallery />
                <h2 className="text-center mt-5 mb-1">Save The Date!</h2>
                <AddGuest />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="App container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-xs-12 body-content">
            <h1 className="float-left">GUEST LIST</h1>
            <div className="float-right">
              <input type="button" className="btn btn-info mr-1" value="Download"/>
              <input type="button" className="btn btn-danger" value="Sign Out" onClick={() => this.unAuthenticateUser(sessionId)} />
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-xs-12 body-content">
            <GuestList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
