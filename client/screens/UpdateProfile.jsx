import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Form } from '../components/Form';

export function UpdateProfile() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setconfPassword] = useState('');
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleEmail = (value) => {
    setEmail(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };
  const handleConfPassword = (value) => {
    setconfPassword(value);
  };

  // eslint-disable-next-line consistent-return
  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confPassword) {
      return setError('Passwords do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (password) {
      promises.push(updatePassword(password));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/');
      })
      .catch(() => {
        setError('Failed to update account');
      })
      .finally(() => {
        setLoading(false);
      });
    return false;
  }

  return (
    <Form
      header="Update Profile"
      fields={[
        {
          name: 'email',
          label: 'email',
          type: 'email',
          id: 'email',
          autoComplete: 'email',
          onChange: handleEmail,
        },
        {
          name: 'password',
          label: 'password',
          type: 'password',
          id: 'password',
          autoComplete: 'password',
          onChange: handlePassword,
        },
        {
          name: 'confpassword',
          label: 'confirm password',
          type: 'password',
          id: 'confpassword',
          autoComplete: 'confpassword',
          onChange: handleConfPassword,
        },
      ]}
      buttons={[
        {
          text: 'Submit',
          onClick: handleSubmit,
        },
      ]}
    >
      <PersonIcon />
    </Form>
  );
}
