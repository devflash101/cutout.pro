import React from 'react';
import './auth.css';

const Register = () => {
  return (
    <form className="auth-form">
      <h2>Register</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
