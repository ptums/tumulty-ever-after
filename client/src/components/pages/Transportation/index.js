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
            <p className="card-text mt-5">The Palace in Somerset to St. Cecilia's Catholic Church in Dayton</p>
            <div className="map">
               <iframe title="palace to cecilias" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d194272.29363683285!2d-74.66814528313718!3d40.46410071914607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89c3c0edee58b629%3A0x12d832518de3e124!2s333+Davidson+Ave%2C+Somerset%2C+NJ+08873!3m2!1d40.5308709!2d-74.53405219999999!4m5!1s0x89c3dcb61717bb99%3A0x70bd0ab83a9e2ef7!2s10+Co+Rd+681%2C+Monmouth+Junction%2C+NJ+08852!3m2!1d40.3877313!2d-74.52202179999999!5e0!3m2!1sen!2sus!4v1546904861807" width="600" height="450" frameborder="0" allowfullscreen></iframe>
            </div>
            <p className="card-text mt-5">The Palace In Somerset to The Fairfield Inn & Suites Somerset by Marriott</p>
            <div className="map">
              <iframe title="palace to hotel" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3032.5011022220106!2d-74.53419923533302!3d40.53051700663653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89c3c0ecf528afc1%3A0x83196278b1aae4e3!2s315+Davidson+Ave%2C+Somerset%2C+NJ+08873!3m2!1d40.531732!2d-74.5303074!4m5!1s0x89c3c0edee58b629%3A0x12d832518de3e124!2s333+Davidson+Ave%2C+Somerset%2C+NJ+08873!3m2!1d40.5308709!2d-74.53405219999999!5e0!3m2!1sen!2sus!4v1546905298637" width="600" height="450" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
     </div>
    </div>
  </div>

);

export default Transportation;