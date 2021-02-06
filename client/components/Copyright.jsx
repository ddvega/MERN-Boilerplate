import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export const Copyright = (props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" to="/">
        {props.appName}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
