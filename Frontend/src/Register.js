import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  // State variables to track form inputs and messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const register = async () => {
    try {
      // Send user details to backend
      await axios.post('/api/auth/register', { username, password, role });
      setMessage('Registration successful! You can now login.');
    } catch (err) {
      setMessage('Registration failed!');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <button onClick={register}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;
