import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import DashBoard from './pages/DashBoard/DashBoard';
import Stations from './pages/Stations/Stations';
import Journeys from './pages/Journeys/Journeys';
import Header from './components/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveStyles, theme } from './theme/theme';
import { Box } from '@mui/material';

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:8080/v1/graphql',
  });
};

const App = () => {
  const client = createApolloClient();
  const rootStyles = responsiveStyles(theme)[0].root;

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Box sx={rootStyles}>
          <ThemeProvider theme={theme}>
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
