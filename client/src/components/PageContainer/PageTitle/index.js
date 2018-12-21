import React from "react";
import { Link } from "react-router-dom";
import FaHome from "react-icons/lib/fa/home";
import extractValue from "../utility.js";
import "./index.css";

const PageTitle = (props) => {
 const { data, currentUrl } = props;

 return (
   <h3>{extractValue(data, "title", currentUrl)} - <Link to="/"><FaHome/></Link></h3>
 );
};

export default PageTitle;