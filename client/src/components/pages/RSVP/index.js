import React from "react";
import createHistory from "history/createBrowserHistory";
import "./index.css";

const history = createHistory();


const RSVP = () => (
  <div className="RSVP container">
    <div className="row">
     <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="card">
          <div className="card-body text-center">
            <h1 class="card-title text-center">RSVP -
              <span className="link-text" onClick={() => history.goBack()}>back</span>
            </h1><hr/>
            <p className="card-text">We’re so excited to celebrate with you! Let us know if you can make it:</p>
            <iframe src="https://peterandrachel.anrsvp.com/#home" className="rsvp-iframe" title="rsvp"></iframe>
          </div>
        </div>
     </div>
    </div>
  </div>

);

export default RSVP;