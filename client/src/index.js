import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "video-react/dist/video-react.css";
import "react-image-gallery/styles/css/image-gallery.css";
import App from "./components/App/";
import Create from "./components/Create/";
// pages 
import Events from "./components/pages/Events";
import AboutUs from "./components/pages/AboutUs";
import Accomodations from "./components/pages/Accomodations";
import Registry from "./components/pages/Registry";
import RSVP from "./components/pages/RSVP";
import Transportation from "./components/pages/Transportation";

// Create a link to graphql server
const httpLink = createHttpLink({ uri: "http://localhost:3001/graphql", credentials: "same-origin" });

// Create a token for authentication
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Concat data from graphql server to header 
const link = authLink.concat(httpLink);

// Create a variable to bind to the DOM
const client = new ApolloClient({
  link,
 cache: new InMemoryCache(),
});

// Create routes, bind client to Apollo
// Wrap Apollo client around routes and components 
ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/create" component={Create} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/events" component={Events} />
        <Route path="/rsvp" component={RSVP} />
        <Route path="/accomodations" component={Accomodations} />
        <Route path="/registry" component={Registry} />
        <Route path="/transportation" component={Transportation} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root"),
);

