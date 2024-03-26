// MatchingUsersDisplay.jsx
import React from 'react';

function MatchingUsersDisplay({ matchingUsers }) {
  return (
    <div>
      <h2>Matching Users</h2>
      {matchingUsers.length === 0 ? (
        <p>No matching users found.</p>
      ) : (
        <ul>
          {matchingUsers.map((user) => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Entered Amount: {user.enteredAmount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MatchingUsersDisplay;
