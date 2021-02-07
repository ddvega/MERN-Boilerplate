import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icontext: {
    variant: 'caption',
    justifyContent: 'center',
    flexGrow: 1,
  },
}));

const drawerItems = [
  { route: '/signup', class: 'fas fa-user-plus', text: 'Sign Up' },
  { route: '/login', class: 'fas fa-sign-in-alt', text: 'Log In' },
  { route: '/forgot-password', class: 'fas fa-unlock-alt', text: 'Reset Password' },
  { route: '/search-users', class: 'fas fa-binoculars', text: 'Search Users' },
  { route: '/update-profile', class: 'fas fa-file-alt', text: 'Update Profile' },
];

export const Navlist = (props) => {
  const classes = useStyles();
  return (
    <List className="drawer-items">
      {drawerItems.map((field, index) => (
        <ListItem button component={Link} to={field.route} onClick={props.drawer} key={index}>
          <ListItemIcon>
            <i className={field.class} />
          </ListItemIcon>
          <ListItemText primary={field.text} />
        </ListItem>
      ))}
    </List>
  );
};
