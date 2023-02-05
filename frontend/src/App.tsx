import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import DashBoard from './components/DashBoard/DashBoard';
import Stations from './components/Stations/Stations';
import Journeys from './components/Journeys/Journeys';
import Header from './components/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveStyles, theme } from './theme/theme';
import { Box } from '@mui/material';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache(),
  });
};

const App = () => {
  const client = createApolloClient();
	const rootStyles = responsiveStyles(theme)[0].root;

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
				<Box sx={rootStyles}>
        <ThemeProvider theme={theme} >
          <Header />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/stations" element={<Stations />} />
            <Route path="/journeys" element={<Journeys />} />
          </Routes>
        </ThemeProvider>
				</Box>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
