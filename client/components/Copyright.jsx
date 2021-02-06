import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" to="/">
        FlickJunkies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
