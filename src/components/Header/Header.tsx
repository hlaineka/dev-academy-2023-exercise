import React from 'react';
import AppBar from '@mui/material/AppBar';
import Navigation from './Navigation/Navigation';
import Typography from '@mui/material/Typography';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

const Header = () => {
  return (
    <AppBar position="static" sx={{ flexDirection: 'row', padding: '1rem 0', height: '5rem', diplay: 'flex', alignItems: 'center' }}>
      <Navigation />
      <Typography
        variant="h1"
        component="div"
        sx={{ flexGrow: 1, fontSize: '2rem' }}
      >
        Helsinki city bike app
      </Typography>
			<LanguageSelect/>
    </AppBar>
  );
};
export default Header;
