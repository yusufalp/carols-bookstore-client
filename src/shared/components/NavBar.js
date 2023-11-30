import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();

  console.log("u", user);
  const handleLogout = () => {
    fetch(`http://localhost:8080/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode === 200) {
          setUser({});
          localStorage.removeItem("user");
          navigate("/");
        } else {
          throw new Error(response.error);
        }
      })
      .catch((error) => {
        console.log("errLogout", error);
        navigate("/admin");
      });
  };

  return (
    <nav>
      <ul className="nav-links">
        <div>
          <img
            src="/images/CodeSquad-Comics-logo.png"
            alt="codesquad comics logo"
          />
        </div>
        <div>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          {user.username ? (
            <React.Fragment>
              <li>
                <a href="/admin">Admin</a>
              </li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </React.Fragment>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
