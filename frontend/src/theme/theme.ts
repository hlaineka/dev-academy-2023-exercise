import { createTheme } from '@mui/material/styles';

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
      secondary: '#ffffff',
		}
  },
});