import React from "react";
import createHistory from "history/createBrowserHistory";
import "./index.css";

const history = createHistory();


const Transportation = () => (
  <div className="Transportation container">
    <div className="row">
     <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="card">
          <div className="card-body text-center">
            <h1 class="card-title text-center">Transportation -
              <span className="link-text" onClick={() => history.goBack()}>back</span>
            </h1><hr/>
            <p className="card-text">St. Cecilia's Catholic Church</p>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe title="st. cecilias" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=10%20Co%20Rd%20681%2C%20Monmouth%20Junction%2C%20NJ%2008852&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
            </div>
            <p className="card-text">The Palace In Somerset</p>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe title="the palace" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=333%20Davidson%20Ave%2C%20Somerset%2C%20NJ%2008873&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  </div>

);

export default Transportation;