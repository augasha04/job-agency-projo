import React, { useState } from 'react';
import "./LogIn.css";

const LoginForm = () => {
  const [jobtittle, setJobTittle] = useState('');
  const [fullname, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleJobTittleChange = (event) => {
    setJobTittle(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (jobtittle === '') {
      alert('Please enter your application job tittle.');
      return;
    }

    if (fullname === '') {
        alert('Please enter your Full Name.');
        return;
      }

    if (password === '') {
      alert('Please enter your password.');
      return;
    }

    if (email === '') {
        alert('Please enter your email')
        return;
    }

    if (location === '') {
        alert('Please enter your location')
        return;
    }

    // Add your login verification logic here
    // For example, you can make an API call to authenticate the user

    // Reset the form
    setJobTittle('');
    setFullName('');
    setPassword('');
    setEmail('');
    setLocation('');
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="job tittle">Job Tittle:</label>
        <input
          type="text"
          id="username"
          value={jobtittle}
          onChange={handleJobTittleChange}
        /><br /><br />

        <label htmlFor="fullname">Fullname:</label>
        <input
          type="fullname"
          id="fullname"
          value={fullname}
          onChange={handleFullNameChange}
        /><br /><br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        /><br /><br />

        <label htmlFor="location">Location:</label>
        <input
          type="location"
          id="location"
          value={location}
          onChange={handleLocationChange}
        /><br /><br />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
