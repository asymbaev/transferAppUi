// // App.js
// import React, { useState } from 'react';
// import UserInputForm from './components/UserInputForm';
// import MatchingUsersDisplay from './components/MatchingUsersDisplay';
// import './App.css'; // Import CSS file for styling

// function App() {
//   const [matchingUsers, setMatchingUsers] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   return (
//     <div className="App">
//       <div className="center-container">
//         <h1>Welcome to My React Application</h1>
//         <p>Enter an amount to find matching users:</p>
//         <UserInputForm setMatchingUsers={setMatchingUsers} setErrorMessage={setErrorMessage} />
//         <hr />
//         {errorMessage && <p>{errorMessage}</p>}
//         <MatchingUsersDisplay matchingUsers={matchingUsers} />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Sign Up</h1>
      </header>
      <main>
        <SignupForm />
      </main>
    </div>
  );
}

export default App;
