import React from 'react';
import {
  Avatar,
  Container,
  Typography,
  Grid,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '../components/Button'

const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
    // backgroundColor:'#242424'
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export function Form(props, { children }) {
  const classes = styles();
  return (
    <div style={{width:"80%", maxWidth:"350px"}}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Avatar className={classes.avatar}>{children}</Avatar>
        </Grid>
        <Grid item>
          <Typography style={{color:'#fff'}}variant="h5">{props.header}</Typography>
        </Grid>
      </Grid>

      {props.fields.map((field, index) => (
        <Grid item xs={12} key={index}>
          <TextField
            style={{backgroundColor:'#fff'}}
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name={field.name}
            label={field.label}
            type={field.type}
            id={field.id}
            autoComplete={field.autoComplete}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
          />
        </Grid>
      ))}

      {props.buttons.map((button, index) => (
        <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--medium'
        onClick={button.onClick}
        key={index}
        disabled={button.loading}
      >
        {button.text}
      </Button>
 
      ))}
    </div>
  );
}
