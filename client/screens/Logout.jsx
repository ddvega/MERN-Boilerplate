import React, { useState } from 'react';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Container, Typography } from '@material-ui/core';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.green,
  },
}));

// export function Logout() {
export const Logout = () => {
  const classes = useStyles();
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      logout();
      history.push('/login');
    } catch (err) {
      setError('Failed to log out');
    }
    return 0;
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
};
