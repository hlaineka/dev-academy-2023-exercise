import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../theme/theme';

type BasicPageLayoutProps = {
  children: React.ReactNode;
  pageName: String;
};

const BasicPageLayout: React.FC<BasicPageLayoutProps> = ({
  children,
  pageName,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#E5E5E5',
        width: '100vw',
        minHeight: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Paper
          elevation={3}
          sx={{
            width: '80vw',
            margin: 'auto',
            marginTop: '10vh',
            padding: '3rem',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, fontSize: '2rem' }}
          >
            {pageName}
          </Typography>
        </Paper>
      </ThemeProvider>
      <Paper
        elevation={3}
        sx={{
          width: '80vw',
          minHeight: '80vh',
          margin: 'auto',
          marginTop: '3vh',
          padding: '3rem',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default BasicPageLayout;
