// UserInputForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from './apiConfig';

function UserInputForm({ setMatchingUsers, setErrorMessage }) {
  const [enteredAmount, setEnteredAmount] = useState('');

  const fetchMatchingUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/list`);
      const allUsers = response.data;
      const matchingUsers = allUsers.filter(user => user.enteredAmount === parseFloat(enteredAmount));
      setMatchingUsers(matchingUsers);
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      setMatchingUsers([]); // Clear matching users in case of error
      if (error.response) {
        // Request was made and server responded with a status code
        setErrorMessage(`Error: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage('Error: No response received from server.');
      } else {
        // Something happened in setting up the request that triggered an error
        setErrorMessage('Error: Request failed.');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!enteredAmount.trim()) {
      setErrorMessage('Please enter a valid amount.');
      return;
    }
    fetchMatchingUsers();
    setEnteredAmount(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Amount:
        <input
          type="number"
          value={enteredAmount}
          onChange={(e) => setEnteredAmount(e.target.value)}
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default UserInputForm;
