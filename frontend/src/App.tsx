import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import MockPage from './components/MockPage';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { GetAllStationsQuery } from './generated/graphql';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache(),
  });
};

const App = () => {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<MockPage />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
