import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((t) => ({
  paper: {
    marginTop: t.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
export function Dashboard() {
  const classes = useStyles();
  return (
    <Container className={classes.paper}>
      <h1>Dashboard here</h1>
    </Container>
  );
}
