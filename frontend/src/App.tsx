import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import DashBoard from './components/DashBoard/DashBoard';
import Stations from './components/Stations/Stations';
import Journeys from './components/Journeys/Journeys';
import Navigation from './components/Navigation/Navigation';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache(),
  });
};

const App = () => {
  const client = createApolloClient();

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
				<Navigation/>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/journeys" element={<Journeys />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
