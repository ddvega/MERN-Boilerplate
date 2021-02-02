import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import GroupIcon from '@material-ui/icons/Group';
import { useStyles } from '../components/useStyles';
import { Form } from '../components/Form';
import { useAPI } from '../api/api';
import axios from 'axios';

export default function SearchUsers() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser, token } = useAuth();
  const api = useAPI();

  const List = () => {
    return users.map((item) => <h1>{item.email}</h1>);
  };

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

    } catch (error) {
      setError('Failed search');
    }
    setLoading(false);
  };

  return (
    <>
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
    </>
  );
}
