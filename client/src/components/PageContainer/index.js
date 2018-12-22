import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import PageTitle from "./PageTitle/";
import PageBody from "./PageBody";
import "./index.css";

const currentUrl = window.location.pathname.toString();
const ABOUT_US = gql`
query {
  page(link: "${currentUrl}") {
    link,
    title,
    content
  }
}
`;

const PageContainer = graphql(ABOUT_US)((props) => {
   const { data } = props;
  return (
	  <div className="PageContainer container">
	   <div className="row">
	     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 body-content">
		  <div className="card">
      {
        (data.page !== undefined) ? (
         <div>
          <PageTitle title={data.page[0].title}/>
          <PageBody content={data.page[0].content}/>
         </div>
        ) : ""
      }
		  </div>
		</div>
	   </div>
	  </div>
  );
});

export default PageContainer;