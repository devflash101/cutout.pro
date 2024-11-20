import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const response = await axios.post('http://localhost:5000/api/v1/auth/signin', {
          email: email,
          password: password
        });
        // alert(response.data);
        console.log(response.data);

        if (response.data && response.data.token) {
          // Store the token in localStorage
          localStorage.setItem('token', response.data.token);

          // Decode the token to get user info (optional)
          const userInfo = JSON.parse(atob(response.data.token.split('.')[1]));
          localStorage.setItem('user', JSON.stringify(userInfo.user));

          // Redirect to the main page on successful login
          navigate('/main-page');
        } else {
          // If response doesn't contain a token, it's an unexpected response
          alert('Unexpected response from server. Please try again.');
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.data.msg === "Password is incorrect") {
            alert('Incorrect password. Please try again.');
          } else if (error.response.data.msg === "User not found") {
            alert('User not found. Please check your email.');
          } else {
            alert(`Login failed: ${error.response.data.msg || 'Unknown error'}`);
          }
        } else if (error.request) {
          // The request was made but no response was received
          alert('No response from server. Please try again later.');
        } else {
          // Something happened in setting up the request that triggered an Error
          alert('Error in login process. Please try again.');
        }
      }
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
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
        <button type="submit">Login</button>
      </form>

      <div className="auth-link">
        <p>Don't have an account? <span onClick={() => navigate('/auth/register')} style={{ cursor: 'pointer', color: '#8ac6d1' }}>Register here</span></p>
      </div>
    </div>
  );
};

export default SignIn;
