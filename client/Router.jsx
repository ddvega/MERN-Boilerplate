import React from 'react';
import { Container, Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';
import UpdateProfile from './screens/UpdateProfile';
import SearchUsers from './screens/SearchUsers';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Navbar } from './components/Navbar';
import Logout from './screens/Logout';
import { theme } from './styles/theme';
import { Copyright } from './components/Copyright';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const Router = () => {
  const classes = styles();
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <Navbar />
          <Container className={classes.paper}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/search-users" component={SearchUsers} />
              <PrivateRoute path="/logout" component={Logout} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
