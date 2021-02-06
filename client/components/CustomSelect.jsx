import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const DropDownInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    fontSize: 12,
    fontFamily: 'Segoe UI',
    padding: '8px 12px 8px 8px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export function CustomSelect(props) {
  const classes = useStyles();
  const [value, setValue] = useState('lists');

  // sets the value inside of the dropdown menu
  const handleChange = (val) => {
    setValue(val);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          value={value}
          onChange={(e) => {
            props.fields.onChange(e.target.value);
            handleChange(e.target.value);
          }}
          input={<DropDownInput />}
        >
          {props.fields.menu.map((field, index) => (
            <MenuItem value={field}>{field}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
