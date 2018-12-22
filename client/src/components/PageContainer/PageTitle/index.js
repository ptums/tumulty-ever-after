import React from "react";
import { createBrowserHistory } from "history";
import FaHome from "react-icons/lib/fa/home";
import "./index.css";

// create browser history
const history = createBrowserHistory();

const PageTitle = (props) => {
 const { title } = props;

 return (
   <div>
     <h3 className="text-center">
       {title} - <FaHome onClick={() => history.goBack() }/>
     </h3><hr/>
   </div>
 );
};

export default PageTitle;