import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import lightGreen from '@material-ui/core/colors/lightGreen';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6bcccb',
    },
    secondary: {
      main: '#ffd0ad',

    },
  },
  typography: {
    useNextVariants: true,
  },
  mixins: {
    toolbar:{
      minHeight: 56,
    },
  },
   overrides: {
    MuiToolbar:{
    dense: {
        minHeight: 36,
    },
    }, 
    MuiTab:{
      root:{
        minHeight: 36,
      },
    },
    MuiButtonBase:{
      root:{
        minHeight: 36,
      }
    }
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;