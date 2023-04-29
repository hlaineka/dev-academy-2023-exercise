import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface DefaultTheme extends Theme {}
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
      sm: 850, // tablets
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

export const responsiveStyles = (theme: Theme) => [
  {
    root: {
      [theme.breakpoints.down(500)]: {},
      [theme.breakpoints.down(850)]: {},
      [theme.breakpoints.down(1100)]: {},
      [theme.breakpoints.down(1350)]: {},
      [theme.breakpoints.down(1536)]: {},
    },
    pageHeader: {
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
    },
    contentView: {
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
    },
    tableCell: {
      [theme.breakpoints.down(500)]: {},
      [theme.breakpoints.down(1100)]: {
				padding: '.5rem'
      },
			[theme.breakpoints.down(850)]: {
			},
      [theme.breakpoints.up(1100)]: {},
      [theme.breakpoints.up(1350)]: {},
    },
		tableRow: {
      [theme.breakpoints.down(500)]: {},
			[theme.breakpoints.down(850)]: {
			},
			[theme.breakpoints.down(1100)]: {
      },
      [theme.breakpoints.up(1100)]: {},
      [theme.breakpoints.up(1350)]: {},
    },
		table: {
			[theme.breakpoints.down(500)]: {},
			[theme.breakpoints.down(850)]: {
			},
			[theme.breakpoints.down(1100)]: {

      },
      [theme.breakpoints.up(1100)]: {},
      [theme.breakpoints.up(1350)]: {},
		},
    singleStation: {
      [theme.breakpoints.down(500)]: {},
      [theme.breakpoints.down(850)]: {},
      [theme.breakpoints.down(1100)]: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '80vh',
        bgcolor: 'background.paper',
        border: '2px solid primary.dark',
        boxShadow: 24,
        p: 4,
        padding: '3rem',
      },
      [theme.breakpoints.up(1100)]: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '80vh',
        bgcolor: 'background.paper',
        border: '2px solid primary.dark',
        boxShadow: 24,
        p: 4,
        padding: '3rem',
      },
      [theme.breakpoints.up(1350)]: {},
    },
  },
];
