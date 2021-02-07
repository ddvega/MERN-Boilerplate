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
    fontSize: 14,
    padding: '8px 12px 8px 8px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0.3),
  },
}));

export const CustomSelect = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(props.menu[0]);

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
            props.onChange(e.target.value);
            handleChange(e.target.value);
          }}
          input={<DropDownInput />}
        >
          {props.menu.map((field, index) => (
            <MenuItem value={field} key={index}>{field}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
