import React, { useState } from 'react';
import GroupIcon from '@material-ui/icons/Group';
import { Form } from '../components/Form';
import { useAPI } from '../api/api';

export default function SearchUsers() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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
