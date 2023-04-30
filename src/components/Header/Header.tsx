import React from 'react';
import AppBar from '@mui/material/AppBar';
import Navigation from './Navigation/Navigation';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '5rem',
        padding: '1rem 0',
				justifyContent: 'space-between'
      }}
			data-testid="header"
    >
      <Navigation />
      <LanguageSelect />
    </AppBar>
  );
};
export default Header;
