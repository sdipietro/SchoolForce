import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/main");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-page">
        <header className="login-page-header">
          <div className="login-page-header-left">
            <Link to="/">
              <h1 className="header-logo">SchoolForce</h1>
            </Link>
          </div>
        </header>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="form-title">Log in</div>
            <div className="login-form">
              <div className="form-header-login">
                <a href="#/signup">Sign Up</a>
                <a href="#/login">Log in</a>
              </div>
              <label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                  className="login-input"
                />
              </label>
              <label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                  className="login-input"
                />
              </label>
              <div className="session-error-messages">{this.renderErrors()}</div>
              <input type="submit" value="Log in" className="session-submit"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
