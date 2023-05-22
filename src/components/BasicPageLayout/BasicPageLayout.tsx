import React from 'react';
import { ThemeProvider, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { darkTheme, theme } from '../../theme/theme';

type BasicPageLayoutProps = {
  children: React.ReactNode;
  pageName?: string;
};

const HeaderBox = styled(Box)(() => ({
  backgroundColor: '#E5E5E5',
  left: 0,
  minHeight: '100vh',
  position: 'absolute',
  top: 0,
  width: '100vw',
  zIndex: -1,
}));

const StyledPageHeader = styled(Paper)(() => ({
  [theme.breakpoints.down(500)]: {
    width: '100vw',
  },
  [theme.breakpoints.down(850)]: {},
  [theme.breakpoints.down(1100)]: {
    width: '100vw',
    margin: 'auto',
    marginTop: '10vh',
    padding: '2rem 2rem 1rem 2rem',
    boxSizing: 'border-box',
    borderRadius: '.5rem .5rem 0 0',
    borderBottom: 'solid 1rem #fca211',
  },
  [theme.breakpoints.up(1100)]: {
    width: '80vw',
    margin: 'auto',
    marginTop: '10vh',
    padding: '3rem 3rem 2rem 3rem',
    boxSizing: 'border-box',
    borderRadius: '.5rem .5rem 0 0',
    borderBottom: 'solid 1rem #fca211',
  },
  [theme.breakpoints.up(1350)]: {},
}));

const StyledPageContent = styled(Paper)(() => ({
  [theme.breakpoints.down(500)]: {
    width: '100vw',
  },
  [theme.breakpoints.down(850)]: {},
  [theme.breakpoints.down(1100)]: {
    width: '100vw',
    margin: 0,
    padding: '2rem 0',
  },
  [theme.breakpoints.up(1100)]: {
    width: '80vw',
    minHeight: '80vh',
    margin: 'auto',
    padding: '3rem',
    boxSizing: 'border-box',
  },
  [theme.breakpoints.up(1350)]: {},
}));

const BasicPageLayout: React.FC<BasicPageLayoutProps> = ({
  children,
  pageName = 'Not found',
}) => {
  return (
    <HeaderBox data-testid={pageName}>
      <ThemeProvider theme={darkTheme}>
        <StyledPageHeader elevation={3}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, fontSize: '2rem' }}
          >
            {pageName}
          </Typography>
        </StyledPageHeader>
      </ThemeProvider>
      <StyledPageContent>{children}</StyledPageContent>
    </HeaderBox>
  );
};

export default BasicPageLayout;
