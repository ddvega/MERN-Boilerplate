import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useAuth } from '../contexts/AuthContext';
import { Form } from '../components/Form';

const useStyles = makeStyles((t) => ({
  paper: {
    marginTop: t.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginWithGoogle } = useAuth();
  const history = useHistory();

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  // Login using firebase authentication
  async function handleLogin(e) {
    try {
      e.preventDefault();
      const userInfo = await login(email, password);

      console.log(userInfo.user.uid);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  // Login using Google OAuth
  async function handleGoogleLogin(e) {
    try {
      e.preventDefault();
      await loginWithGoogle();
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className={classes.paper}>
      <Form
        header="Log In"
        fields={[
          {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            id: 'email',
            autoComplete: 'email',
            onChange: handleEmailChange,
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            id: 'password',
            autoComplete: 'password',
            onChange: handlePasswordChange,
          },
        ]}
        buttons={[
          {
            text: 'Log In',
            onClick: handleLogin,
          },
          {
            text: 'Google Log in',
            onClick: handleGoogleLogin,
          },
        ]}
      >
        <AccountCircleIcon />
      </Form>
      <Link to="/signup">Need an account? Sign up here</Link>
    </Container>
  );
}
