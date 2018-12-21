import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import PageTitle from "./PageTitle/";
import PageBody from "./PageBody";
import "./index.css";

const ABOUT_US = gql`
query {
  pages {
    link,
    title,
    content
  }
}
`;

const PageContainer = graphql(ABOUT_US)((props) => {
   const { data } = props;
   const currentUrl = window.location.pathname.replace("/","");
 
  return (
	  <div className="PageContainer container">
	   <div className="row">
	     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 body-content">
		  <div className="card">
		   {
        (data.pages) ? (
          <div>
            <PageTitle currentUrl={currentUrl} data={data.pages} />
            <PageBody currentUrl={currentUrl} data={data.pages} />
          </div>
        ) : (
          <span className='error-message'>Sorry, something went wrong!</span>
        )
       }
		  </div>
		</div>
	   </div>
	  </div>
  );
});

export default PageContainer;