import React, { Component } from "react";
import cookie from "react-cookies";
import FaPlusSquareO from "react-icons/lib/fa/plus-square-o";
import { authUser } from "../../utils/authUser/";
import { unAuthUser } from "../../utils/unAuthUser/";
import GuestList from "../private/GuestList/";
import LoginModal from "../LoginModal/";
import SelectionGrid from "../SelectionGrid/";
import rpFeatured from "../../media/original-family.png";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      sessionId: null,
    };

    // bind all methods to DOM
    this.closeModal = this.closeModal.bind(this);
    this.authenticateUser = this.authenticateUser.bind(this);
    this.unAuthenticateUser = this.unAuthenticateUser.bind(this);
  }
  componentDidMount() {
    if (document.cookie) {
      this.setCookie();
    }
  }
  // set user cookie to state as a session id 
  setCookie() {
    let catId = document.cookie.split(";");
    catId = catId[0].split("=").pop();
    this.setState({ sessionId: catId });
  }
  // set session id to state and save it as a cookie
  authenticateUser() {
    authUser().then(data => data[0]).then((results) => {
      if (typeof results !== "undefined") {
        const { sessionId } = results;
        this.setState({ sessionId }, () => cookie.save("sessionId", this.state.sessionId, { path: "/" }));
        this.closeModal();
      } else {
        this.closeModal();
      }
    });
  }
  // remove the session id 
  unAuthenticateUser(id) {
    unAuthUser(id).then(() => {
      cookie.remove("sessionId", { path: "/" });
      this.setState({ sessionId: null });
    });
  }
  // open modal by setting visible state to true 
  openModal() {
    this.setState({ visible: true });
  }
  // close modal by setting visible state to false 
  closeModal() {
    this.setState({ visible: false });
  }
  render() {
    const { sessionId } = this.state;

    if (!sessionId) {
      return (
        <div className="App container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 body-content">
              <FaPlusSquareO onClick={() => this.openModal()} />
              <div className="card">
                <img className="card-image-top img-fluid mb-1" src={rpFeatured} alt="rachel peter header" />
                <h1 className="text-center mt-3">Our Wedding!</h1>
                <h3 className="text-center mt-2 final-fold-message"><small>Celebrate love, laughter, and happily ever after!</small></h3>
                {/*<h3 className="text-center final-fold-message"><small>Save the date because Peter and Rachel are getting married</small></h3>
                <h4 className="text-center final-fold-message"><strong>03/30/2019 Dayton, NJ</strong></h4>*/}

                {/*<h5 className="text-center mt-3 final-fold-message">~ Formal Invitation to Follow ~</h5>
                <h1 className="text-center mt-4">Our Love Story</h1>
                <LoveStoryVideo />*/}
                <span className="mt-5"/>
                <SelectionGrid />
                <h1 className="text-center mt-6">Contact Us</h1>

                <p className="text-center card-text final-fold-message mb-5">The best part of getting married is getting the opportunity to celebrate with our loved ones. Thank you all for the continuous support and love. We can’t wait to party it up with you March 30th 2019! Please feel free to contact us at <a href="mailto:tumultyeverafter@gmail.com">tumultyeverafter@gmail.com</a> with any questions you may have! </p>
              </div>
            </div>
          </div>
          <LoginModal
            visible={this.state.visible}
            closeModal={this.closeModal}
            authenticateUser={this.authenticateUser}
          />
        </div>
      );
    }
    return (
      <div className="App container">
        <GuestList unAuthenticateUser={this.unAuthenticateUser} sessionId={sessionId}/>
      </div>
    );
  }
}

export default App;
