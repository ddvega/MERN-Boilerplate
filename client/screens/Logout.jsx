import React, { useState, useEffect } from 'react';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useAuth } from '../contexts/AuthContext';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.green,
  },
}));

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
      <Avatar className={classes.avatar}>
        <AssignmentTurnedInIcon />
      </Avatar>
      <Typography component="h1" variant="h5"></Typography>
      {error && <Alert variant="danger">{error}</Alert>}

      <Button variant="contained" onClick={handleLogout}>
        Log Out
      </Button>
    </Container>
  );
}
