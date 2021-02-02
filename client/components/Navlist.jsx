import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icontext: {
    variant: 'caption',
    justifyContent: 'center',
    flexGrow: 1,
  },
}));

export const Navlist = (props) => {
  const classes = useStyles();
  return (
    <List>
      <ListItem button component={Link} to="/search-users" onClick={props.drawer}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Find Users" />
      </ListItem>

      <ListItem button component={Link} to="/update-profile" onClick={props.drawer}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Update Profile" />
      </ListItem>

      <ListItem button component={Link} to="/forgot-password" onClick={props.drawer}>
        <ListItemIcon>
          <VpnKeyIcon />
        </ListItemIcon>
        <ListItemText primary="Reset Password" />
      </ListItem>
    </List>
  );
};
