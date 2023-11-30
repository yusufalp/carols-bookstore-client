import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          <strong>VISIT US</strong>
        </p>
        <address>
          CodeSquad Comics
          <br />
          123 Dorchester Avenue
          <br />
          Boston, MA 02124
        </address>
      </div>

      <div>
        <p>
          <strong>LINKS</strong>
        </p>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </div>
      </div>

      <div>
        <p>
          <strong>FOLLOW US</strong>
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <div>
        <p>
          <strong>A PRODUCT OF</strong>
        </p>
        <a
          href="http://codesquad.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/CodeSquad-Logo.png" alt="CodeSquad logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
