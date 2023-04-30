import React from 'react';
import AppBar from '@mui/material/AppBar';
import Navigation from './Navigation/Navigation';
import Typography from '@mui/material/Typography';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        alignItems: 'center',
        diplay: 'flex',
        flexDirection: 'row',
        height: '5rem',
        padding: '1rem 0',
      }}
    >
      <Navigation />
      <Typography
        variant="h1"
        component="div"
        sx={{ flexGrow: 1, fontSize: '2rem' }}
      >
        Helsinki city bike app
      </Typography>
      <LanguageSelect />
    </AppBar>
  );
};
export default Header;
