import React, { useState } from 'react';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Container, Box, Typography, CssBaseline } from '@material-ui/core';
// import { SetUserName } from '../components/SetUserName';
import { useAPI } from '../api/api';
import Cards from '../components/Cards';
import {Button} from '../components/Button'

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

const setUserName = () => {
  const api = useAPI();
  try {
    api.get(`users/?_id=${currentUser.uid}`).then((resp) => {
      localStorage.setItem('username', resp.data.username);
    });
  } catch (error) {
    console.log('user not logged in');
  }
};

export default function Dashboard() {
  const classes = useStyles();
  const [error, setError] = useState('');
  setUserName();

  return (
    <>
    <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
    <Cards />
    </>
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
