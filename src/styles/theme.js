import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffbcaf',
      main: '#ff8a80',
      dark: '#c85a54',
      contrastText: '#000000',
    },
    secondary: {
      light: '#4a4e51',
      main: '#222629',
      dark: '#000000',
      contrastText: '#ffffff',
    },
  },
});

export default theme;