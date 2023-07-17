import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  if (user.username) {
    navigate('/admin');
  }

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    fetch(`http://localhost:5000/login/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => {
        if (response.statusCode === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          setUser(response.data);
          navigate('/admin');
        } else {
          throw new Error(response.error.message);
        }
      })
      .catch(error => {
        console.log("errLogin", error);
        setErrorMessage(error.message);
      });
  };

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={handleLoginFormSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">Log in</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </React.Fragment>
  );
};

export default Login;