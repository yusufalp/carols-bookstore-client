import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  if (user.username) {
    navigate('/admin');
  }

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      password: e.target.password.value,
      strategy: e.target.strategy.value,
    };

    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.statusCode === 201) {
          setUser(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate('/admin');
        } else {
          throw new Error(response.error.message);
        }
      })
      .catch(error => {
        console.log("errSignup", error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <React.Fragment>
      <h1>Signup</h1>
      <form onSubmit={handleSignupFormSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <input type="hidden" id="strategy" name="strategy" value="local" />
        <button type="submit">Sign up</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </React.Fragment>
  );
};

export default Signup;