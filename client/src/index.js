import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import './index.css';
import App from './components/App';
import Create from './components/Create';
import ScheduleEvents from './components/pages/ScheduleEvents';
import RSVP from './components/pages/RSVP';
import AboutUs from './components/pages/AboutUs';
import Accomodations from './components/pages/Accomodations';
import Registry from './components/pages/Registry';
import Transportation from './components/pages/Transportation';

const httpLink = createHttpLink({ uri: 'http://www.tumultyeverafter.com/graphql', credentials: 'same-origin' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/schedule-events" component={ScheduleEvents} />
        <Route exact path="/rsvp" component={RSVP} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/accomodations" component={Accomodations} />
        <Route exact path="/registry" component={Registry} />
        <Route exact path="/transportation" component={Transportation} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);

