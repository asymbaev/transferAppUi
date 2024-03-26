// App.js
import React, { useState } from 'react';
import UserInputForm from './components/UserInputForm';
import MatchingUsersDisplay from './components/MatchingUsersDisplay';

function App() {
  const [matchingUsers, setMatchingUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="App">
      <h1>Welcome to your money transfer app</h1>
      <p>Enter an amount to find matching users:</p>
      <UserInputForm setMatchingUsers={setMatchingUsers} setErrorMessage={setErrorMessage} />
      <hr />
      {errorMessage && <p>{errorMessage}</p>}
      <MatchingUsersDisplay matchingUsers={matchingUsers} />
    </div>
  );
}

export default App;
