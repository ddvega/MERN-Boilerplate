import React, { useState, useEffect } from 'react';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useAuth } from '../contexts/AuthContext';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import {Copyright} from '../components/Copyright';
import { useStyles } from '../components/useStyles';

import {
  Avatar,
  Button,
  Container,
  Box,
  Typography,
  CssBaseline,
} from '@material-ui/core';

export default function Logout() {
  const classes = useStyles();
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentTurnedInIcon />
        </Avatar>
        <Typography component="h1" variant="h5"></Typography>
        {error && <Alert variant="danger">{error}</Alert>}

        <Button variant="contained" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </Container>
  );
}
