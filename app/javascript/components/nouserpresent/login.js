import React, { Component } from "react";

class Login extends Component {

  createLoggedInUser = (event) => {
    event.preventDefault();
    let username = this.user_name.value.trim()
    let password = this.password.value.trim()

    this.setState({
      loggingInUser: {
        user_name: username,
        password: password
      }
    }, () => {
        this.props.authenticateuser(this.state.loggingInUser)})
  }

  render = () => {
      const { changedisplay, errormessage } = this.props;
      return (
          <form className="px-4" onSubmit={this.createLoggedInUser}>
              <div className="row">
                  <h4 className="col-sm-8">Login</h4>
                  <a className="col-sm-4 text-left" onClick={changedisplay}>
                      Register?
                  </a>
              </div>

              <div className="form-group">
                  <label htmlFor="username-login">Username</label>
                  <input
                      type="text"
                      className="form-control"
                      autoComplete="username"
                      id="username-login"
                      ref={(input) => (this.user_name = input)}
                      required
                  />
              </div>
              <div className="form-group ">
                  <label htmlFor="password-login">Password</label>

                  <input
                      type="password"
                      className="form-control"
                      autoComplete="current-password"
                      id="password-login"
                      ref={(input) => (this.password = input)}
                      required
                  />
              </div>
              <div className="row justify-content-sm-center">
                  <button type="submit" className="btn btn-primary col-sm-4">
                      Login
                  </button>
              </div>
              <p>{errormessage}</p>
          </form>
      );
  };
}

export default Login