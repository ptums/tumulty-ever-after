import React from "react";
import { Link } from "react-router-dom"
import FaHome from "react-icons/lib/fa/home";
import "../index.css";
import "./index.css";

const AboutUs = () => (
  <div className="AboutUs container">
   <div className="row">
     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 body-content">
	  <div className="card">
	   <h3 className="text-center mt-3">About Us - <Link to="/" className="home-icons"><FaHome/></Link></h3>
	   <hr/>
	  </div>
	</div>
   </div>
  </div>
);

export default AboutUs;