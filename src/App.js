// App.js
import React, { useState } from 'react';
import UserInputForm from './components/UserInputForm';
import MatchingUsersDisplay from './components/MatchingUsersDisplay';
import './App.css';

function App() {
  const [matchingUsers, setMatchingUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="App">
      <div className='center-container'>
      <h1>Money transfer platform</h1>
      <p>Enter an amount to find matching users:</p>
      <UserInputForm setMatchingUsers={setMatchingUsers} setErrorMessage={setErrorMessage} />
      <hr />
      {errorMessage && <p>{errorMessage}</p>}
      <MatchingUsersDisplay matchingUsers={matchingUsers} />
    </div>
    </div>
  );
}

export default App;
