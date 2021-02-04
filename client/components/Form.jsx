import React from 'react';
import { Avatar, Container, Typography, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '../components/Button';
import { InputBox } from '../components/InputBox';



export function Form(props, { children }) {

  return (
    <div >
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
        <Grid item xs={12} key={index}>
          <InputBox
            className="input"
            required="true"
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
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
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
