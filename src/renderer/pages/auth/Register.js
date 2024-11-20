import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstName && lastName && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/api/v1/auth/signup', {
          firstName,
          lastName,
          email,
          password,
          password2:confirmPassword
        });
        console.log(response.data);

        if (response.data && response.data.msg === 'success') {
          alert('Registration successful! You can now sign in.');
          navigate('/auth/sign-in'); // Redirect to sign-in page after successful registration
        } else {
          alert('Unexpected response from server. Please try again.');
        }
      } catch (error) {
        if (error.response) {
          alert(`Registration failed: ${error.response.data.msg || 'Unknown error'}`);
        } else if (error.request) {
          alert('No response from server. Please try again later.');
        } else {
          alert('Error in registration process. Please try again.');
        }
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>

      <div className="auth-link">
        <p>Already have an account? <span onClick={() => navigate('/auth/sign-in')} style={{ cursor: 'pointer', color: '#8ac6d1' }}>Sign in here</span></p>
      </div>
    </div>
  );
};

export default Register;
