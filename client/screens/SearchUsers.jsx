import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import GroupIcon from '@material-ui/icons/Group';
import { useStyles } from '../components/useStyles';
import { Form } from '../components/Form';
import axios from 'axios';

export default function SearchUsers() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

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
      currentUser.getIdToken(true).then((idToken) => {
        axios
          .get(`/api/users`, {
            headers: {
              Authorization: 'Bearer ' + idToken,
            },
            params: {
              _id:'',
              username: name,
            },
          })
          .then((resp) => {
            setUsers(resp.data);
          });
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
