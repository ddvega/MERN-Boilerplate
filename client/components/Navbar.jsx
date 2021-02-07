import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';

import { CustomSelect } from './CustomSelect';
import { Navlist } from './Navlist';
import { useStyles } from '../styles/navbarStyles';
import { Link } from 'react-router-dom';

export const Navbar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dVal, setDVal] = useState('lists');

  const handleDropDownVal = (value) => {
    console.log(value);
    setDVal(value);
  };

  // handle opening and closing of app drawer
  const drawerOpen = () => {
    setOpen(true);
  };

  const drawerClose = () => {
    setOpen(false);
  };

  const menuItems = ['lists', 'movies', 'actors'];

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <i
              style={{ color: '#663399', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '.5rem' }}
              className="fab fa-battle-net fa-3x"
            />
          </Link>
          <Typography className={classes.title} variant="h4" noWrap>
            {props.appName}
          </Typography>

          {/* pass function as prop to set dVal in a callback */}
          <CustomSelect onChange={handleDropDownVal} menu={menuItems} />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={drawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <i className="fas fa-bars fa-lg" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        styles={{ background: 'linear-gradient(90deg, #222629 0%, #222629 100%);' }}
        anchor="right"
        variant="temporary"
        classes={{
          paper: clsx('navbar', classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={drawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        <Navlist drawer={drawerClose} />
      </Drawer>
    </>
  );
};
