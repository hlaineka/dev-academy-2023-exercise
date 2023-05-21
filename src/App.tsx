import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import DashBoardPage from './pages/DashBoardPage';
import StationsPage from './pages/StationsPage';
import JourneysPage from './pages/JourneysPage';
import Header from './components/Header';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { Box } from '@mui/material';

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:8080/v1/graphql',
  });
};

const App = () => {
  const client = createApolloClient();

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Box>
          <ThemeProvider theme={theme}>
            <Header />
            <Routes>
              <Route path="/" element={<DashBoardPage />} />
              <Route path="/stations" element={<StationsPage />} />
              <Route path="/journeys" element={<JourneysPage />} />
            </Routes>
          </ThemeProvider>
        </Box>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
