import React from 'react';
import AppBar from '@mui/material/AppBar';
import Navigation from './Navigation/Navigation';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static" sx={{flexDirection: "row", padding: "1rem 0", backgroundColor: "#14213D"}}>
      <Navigation />
      <Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: "2rem" }}>
        Helsinki city bike app
      </Typography>
    </AppBar>
  );
};
export default Header;
