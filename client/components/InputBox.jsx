import React from 'react';
import './InputBox.css';

export const InputBox = ({ value, key, placeholder, className, onChange, label, n, type, required }) => {
  return (
    <input
      className={className}
      key={key}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      label={label}
      name={n}
      type={type}
      required={required}
    />
  );
};

{
  /* <TextField
            style={{ backgroundColor: '#fff' }}
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
          /> */
}
