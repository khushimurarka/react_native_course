import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or authentication function here
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    // For demonstration purposes, assume registration is successful
    // In a real-world scenario, you would handle errors and registration logic here
    setError(null);
    // Redirect to login page or dashboard
    window.location.href = '/login';
  };

  const handlePasswordMatch = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError(null);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </label>
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;