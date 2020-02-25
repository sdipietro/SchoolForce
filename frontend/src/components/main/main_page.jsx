import React from "react";
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <header className="login-page-header">
          <div className="login-page-header-left">
            <Link to="/">
              <h1 className="header-logo">SchoolForce</h1>
            </Link>
          </div>
          <div className="main-page-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </header>
        <p>Welcome to SchoolForce</p>
        <footer>Copyright &copy; 2020 SchoolForce</footer>
      </div>
    );
  }
}

export default MainPage;
