import React from "react";
import "./index.css";

const PageBody = (props) => {
 const { content} = props;
 return (
   <div dangerouslySetInnerHTML={{__html:content}}/>
 );
};

export default PageBody;