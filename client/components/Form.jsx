import React from 'react';
import { Avatar, Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
    backgroundColor: theme.palette.primary.green,
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.green,
  },
}));

export function Form(props, { children }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Avatar>{children}</Avatar>
        </Grid>
        <Grid item>
          <Typography style={{ color: '#fff' }} variant="h5">
            {props.header}
          </Typography>
        </Grid>
      </Grid>

      {props.fields.map((field, index) => (
        <Grid item key={index}>
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="dense"
            required
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
          variant="outlined"
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
