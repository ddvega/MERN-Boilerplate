import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useAuth } from '../contexts/AuthContext';
import { Form } from '../components/Form';

const useStyles = makeStyles((t) => ({
  paper: {
    marginTop: t.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
export function ForgotPassword() {
  const classes = useStyles();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email);

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your inbox for further instructions');
    } catch (err) {
      setError('Failed to reset password');
    }

    setLoading(false);
    return 0;
  }

  return (
    <Container className={classes.paper}>
    <Form
      header="Password Reset"
      fields={[
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          id: 'email',
          autoComplete: 'email',
          onChange: handleEmailChange,
        },
      ]}
      buttons={[
        {
          text: 'Reset',
          onClick: handleSubmit,
        },
      ]}
    >
      <LockOutlinedIcon />
    </Form>
    </Container>
  );
}
