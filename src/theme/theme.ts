import { createTheme, styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import { TableCell, TableCellProps, TableRow } from '@mui/material';

declare module '@mui/material/styles' {
  type DefaultTheme = Theme;
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#14213d',
      light: '#3c4564',
      dark: '#000017',
    },
    secondary: {
      main: '#fca211',
      dark: '#be7000',
      contrastText: '#000000',
      light: '#f0c64a',
    },
    background: {
      default: '#E5E5E5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
  },
  breakpoints: {
    values: {
      xs: 500, // phone
      sm: 750, // tablets
      md: 900, // small laptop
      lg: 1350, // desktop
      xl: 1536, // large screens
    },
  },
  spacing: [0, '3rem', '5vw', '10vh'],
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fca211',
      dark: '#be7000',
      contrastText: '#000000',
      light: '#f0c64a',
    },
    secondary: {
      main: '#14213d',
      light: '#3c4564',
      dark: '#000017',
    },
    background: {
      default: '#14213d',
      paper: '#14213d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 500, // phone
      sm: 850, // tablets
      md: 900, // small laptop
      lg: 1350, // desktop
      xl: 1536, // large screens
    },
  },
  spacing: [0, '3rem', '5vw', '10vh'],
});

export const pageHeader = createTheme({
  palette: {
    primary: {
      main: '#fca211',
      dark: '#be7000',
      contrastText: '#000000',
      light: '#f0c64a',
    },
    secondary: {
      main: '#14213d',
      light: '#3c4564',
      dark: '#000017',
    },
    background: {
      default: '#14213d',
      paper: '#14213d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 500, // phone
      sm: 850, // tablets
      md: 1100, // small laptop
      lg: 1350, // desktop
      xl: 1536, // large screens
    },
  },
  spacing: [0, '3rem', '5vw', '10vh'],
});

export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: prop => prop !== 'width',
})<TableCellProps>(({ width }) => ({
  [theme.breakpoints.down(1100)]: {
    padding: '.5rem',
  },
  ...(width && {
    maxWidth: `${width}%`,
  }),
}));

export const DashboardTableRow = styled(TableRow)(() => ({
  backgroundColor: '#14213d',
  padding: '2rem 2rem .5rem 2rem',
  boxSizing: 'border-box',
  borderRadius: '.5rem .5rem 0 0',
  borderBottom: 'solid .5rem #fca211',
}));
