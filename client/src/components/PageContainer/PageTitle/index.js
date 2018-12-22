import React from "react";
import { createBrowserHistory } from "history";
import FaHome from "react-icons/lib/fa/home";
import "./index.css";

const history = createBrowserHistory();

// Get the current location.
const location = history.location;

const returnHome = () => {
  console.log(location);
};

const PageTitle = (props) => {
 const { title } = props;

 return (
   <div><h3 className="text-center">{title} - <FaHome onClick={() => returnHome()}/></h3><hr/></div>
 );
};

export default PageTitle;