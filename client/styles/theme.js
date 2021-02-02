import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f7aaa',
    },
    background: {
      default: '#111111',
      paper: '#212121',
    },
    secondary: {
      main: '#f50004',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontFamily: 'Roboto',
    },
    h2: {
      fontFamily: 'Roboto',
    },
    h3: {
      fontFamily: 'Roboto',
    },
    h4: {
      fontFamily: 'Roboto',
    },
    h6: {
      fontFamily: 'Roboto',
    },
    h5: {
      fontFamily: 'Roboto',
    },
    subtitle1: {
      fontFamily: 'Roboto',
    },
    subtitle2: {
      fontFamily: 'Roboto',
    },
    button: {
      fontFamily: 'Roboto',
      fontWeight: 900,
    },
    overline: {
      fontFamily: 'Roboto',
    },
  },
});
