import React, { useState } from 'react';
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { ErrorMessage } from 'formik';
import { Form } from '../components/Form';
import { useAPI } from '../api/api';

const useStyles = makeStyles((t) => ({
  paper: {
    marginTop: t.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export function SearchUsers() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const api = useAPI();

  const List = () => users.map((item) => <h1>{item.email}</h1>);

  const handleName = (value) => {
    setName(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);

      api.get(`users/?username=${name}`).then((resp) => {
        setUsers(resp.data);
      });
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <Container className={classes.paper}>
      <Form
        header="Search Users"
        fields={[
          {
            name: 'searchusers',
            label: 'searchusers',
            type: 'text',
            id: 'searchusers',
            autoComplete: 'searchusers',
            onChange: handleName,
          },
        ]}
        buttons={[
          {
            text: 'Search',
            onClick: handleSearch,
          },
        ]}
      >
        <GroupIcon />
      </Form>
      <List />
    </Container>
  );
}
