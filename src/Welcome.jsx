import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to our App!</h1>
      <p>We're glad you're here.</p>
      <button className="btn-primary">Get Started</button>
      <p>Already have an account? <a href="/login">Login</a></p>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
}

export default Welcome;



