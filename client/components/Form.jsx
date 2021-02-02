import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Typography,
  Grid,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
    backgroundColor:'#242424'
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
          <Typography variant="h5">{props.header}</Typography>
        </Grid>
      </Grid>

      {props.fields.map((field, index) => (
        <Grid item xs={12} key={index}>
          <TextField
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
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          key={index}
          className={classes.submit}
          disabled={button.loading}
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
}
