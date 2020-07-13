import React, { Component } from "react";

class Login extends Component {
  render = () => {
      const { changedisplay } = this.props;
      return (
          <form className="px-4">
            <div className="row">
                <h4 className="col-sm-8">Login</h4>
                <a className="col-sm-4 text-left" onClick={changedisplay}>
                    Register?
                </a>
            </div>

            <div className="form-group">
              <label for="username-login">Username</label>
              <input
                  type="text"
                  className="form-control"
                  id="username-login"
              />
            </div>
            <div className="form-group ">
              <label for="password-login">Password</label>

              <input
                  type="text"
                  className="form-control"
                  id="password-login"
              />
            </div>
            <div className="row justify-content-sm-center">
                <button type="submit" className="btn btn-primary col-sm-6">
                    Login
                </button>
            </div>
          </form>
      );
  };
}

export default Login