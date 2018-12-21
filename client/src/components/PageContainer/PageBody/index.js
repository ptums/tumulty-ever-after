import React from "react";

import extractValue from "../utility.js";
import "./index.css";

const PageBody = (props) => {
 const { data, currentUrl } = props;

 return (
   <div dangerouslySetInnerHTML={{__html: extractValue(data, "content", currentUrl)}}/>
 );
};

export default PageBody;