import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A7C7E7', // Pastel blue
    },
    secondary: {
      main: '#FADADD', // Pastel pink
    },
    background: {
      default: '#FFF7F1', // Light cream
      paper: '#FAF3E0', // Soft beige
    },
    text: {
      primary: '#5C5C5C', // Dark pastel gray
      secondary: '#A77BCA', // Soft lavender
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    button: {
      textTransform: 'none', // Remove uppercase text
    },
  },
});

export default theme;
