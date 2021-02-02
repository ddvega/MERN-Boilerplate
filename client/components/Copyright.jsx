import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Button component={Link} color="primary" href="/">
        appnamehere
      </Button>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
