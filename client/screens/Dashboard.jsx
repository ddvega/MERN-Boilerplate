import React, { useState } from 'react';
import Cards from '../components/Cards';
import { Button } from '../components/Button';


export default function Dashboard() {
  const [error, setError] = useState('');

  return (
    <>
      <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" onClick={console.log('hey')}>
        WATCH TRAILER <i className="far fa-play-circle" />
      </Button>
      <Cards />
    </>
  );
}
