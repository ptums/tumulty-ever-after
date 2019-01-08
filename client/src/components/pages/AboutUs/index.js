import React from "react";
import createHistory from "history/createBrowserHistory";
import LoveStoryVideo from "../../LoveStoryVideo/"
import PhotoGallery from "../../PhotoGallery/"
import "./index.css";

const history = createHistory();


const AboutUs = () => (
  <div className="AboutUs container">
    <div className="row">
     <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="card mt-4">
          <div className="card-body text-center">
            <h1 class="card-title text-center">About Us -
              <span className="link-text" onClick={() => history.goBack()}>back</span>
            </h1><hr/>
            <p className="card-text">We met in the fall of 2013 and have been laughing together ever since.</p>
            <p>Here is our love story!</p>
            <LoveStoryVideo />
            <p className="mt-2 mb-4">Snapshots through the years!</p>
            <PhotoGallery />
          </div>
        </div>
     </div>
    </div>
  </div>

);

export default AboutUs;