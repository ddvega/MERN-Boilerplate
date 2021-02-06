import React from 'react';
import { Container, Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { PrivateRoute } from './components/PrivateRoute';
import { Dashboard } from './screens/Dashboard';
import { Login } from './screens/Login';
import { SignUp } from './screens/Signup';
import { ForgotPassword } from './screens/ForgotPassword';
import { UpdateProfile } from './screens/UpdateProfile';
import { SearchUsers } from './screens/SearchUsers';
import { Navbar } from './components/Navbar';
import { Logout } from './screens/Logout';
import { theme } from './styles/theme';
import { Copyright } from './components/Copyright';

const styles = makeStyles((t) => ({
  paper: {
    marginTop: t.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const appName = 'AppName';

export const Router = () => {
  const classes = styles();
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar appName={appName} />
          <Container className={classes.paper}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/search-users" component={SearchUsers} />
              <PrivateRoute path="/logout" component={Logout} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
            <Box mt={5}>
              <Copyright appName={appName} />
            </Box>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
