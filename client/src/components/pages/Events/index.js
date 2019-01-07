import React from "react";
import createHistory from "history/createBrowserHistory";
import Church from "../../../media/pages/StCecilias.jpg";
import Palace from "../../../media/pages/ThePalace.jpg";
import "./index.css";

const history = createHistory();


const Events = () => (
  <div className="Events container">
    <div className="row">
     <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="card">
          <div className="card-body text-center">
            <h1 class="card-title text-center">Events -
              <span className="link-text" onClick={() => history.goBack()}>back</span>
            </h1><hr/>
            <p className="card-text"><strong>Saturday, 30 March</strong></p>
            <p className="card-text">Wedding Ceremony</p>
            <img src={Church} alt="St. Cecilias Church" />
            <p className="card-text mt-2"><strong>2:00PM</strong><br/><a href="http://www.stceciliaparish.net/" target="_blank" rel="noopener noreferrer">St. Cecilia's Catholic Church</a><br/>10 Co Rd 681, Monmouth Junction, NJ 08852</p>
            <p className="card-text mt-4">Wedding Reception</p>
            <img src={Palace} alt="The Palace" className="image-half-size"/>
            <p className="card-text mt-2"><strong>6:00PM</strong><br/><a href="https://palacesomersetpark.com/" target="_blank" rel="noopener noreferrer">The Palace at Somerset Park</a><br/>333 Davidson Ave, Somerset, NJ 08873<br/>
              <small><i>Black Tie Optional</i></small>
            </p>
          </div>
        </div>
     </div>
    </div>
  </div>

);

export default Events;