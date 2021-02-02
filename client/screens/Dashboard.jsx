import React, { useState } from 'react';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Container, Box, Typography, CssBaseline } from '@material-ui/core';
import { SetUserName } from '../components/SetUserName';
import Cards from '../components/Cards';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [error, setError] = useState('');
  SetUserName();

  return (
    <Cards />
    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <div className={classes.paper}>
    //     <Avatar className={classes.avatar}>
    //       <AssignmentTurnedInIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Welcome to App
    //     </Typography>

    //     <h6>Dashboard goes here</h6>

    //     <p>Use side menu to navigate </p>
    //     {error && <Alert variant="danger">{error}</Alert>}
    //   </div>
    // </Container>
  );
}
