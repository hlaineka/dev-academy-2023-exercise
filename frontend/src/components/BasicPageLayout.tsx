import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type BasicPageLayoutProps = {
  children: React.ReactNode;
	pageName: String;
};

const BasicPageLayout: React.FC<BasicPageLayoutProps> = ({ children, pageName }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#E5E5E5", width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: -1
      }}
    >
      <Paper elevation={3}  sx={{
        width: "80vw", height: "80vh", margin: "auto", marginTop: "10vh", padding: "3rem", boxSizing: "border-box"
      }}>
       <Typography
        variant="h2"
        component="div"
        sx={{ flexGrow: 1, fontSize: '2rem' }}
      >
        {pageName}
				{children}
      </Typography>
      </Paper>
    </Box>
  );
};

export default BasicPageLayout;