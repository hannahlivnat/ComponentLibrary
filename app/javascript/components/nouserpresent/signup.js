import React, { Component } from "react";

class Signup extends React.Component {

  createUserObject = (event) => {
    event.preventDefault();
    let username = this.user_name.value.trim()
    let password = this.password.value.trim()
    let password_confirmation = this.password_confirmation.value.trim()
    let firstname = this.first_name.value.trim()
    let lastname = this.last_name.value.trim()

    this.setState({
        newUser: {
            first_name: firstname,
            last_name: lastname,
            user_name: username,
            password: password,
            password_confirmation: password_confirmation
        }
    }, ( ) => {this.props.signup(this.state.newUser)})
}

  render = () => {
      const { changedisplay, errormessage } = this.props;
      return (
          <form className="px-4" onSubmit={this.createUserObject}>
              <div className="row">
                  <h4 className="col-sm-8">Register</h4>
                  <a className="col-sm-4 text-left" onClick={changedisplay}>
                      Login?
                  </a>
              </div>
              <div className="form-group">
                  <label htmlFor="firstname-signup">First Name</label>
                  <input
                      type="text"
                      className="form-control"
                      ref={(input) => (this.first_name = input)}
                      id="firstname-signup"
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="lastname-signup">Last Name</label>
                  <input
                      type="text"
                      className="form-control"
                      ref={(input) => (this.last_name = input)}
                      id="lastname-signup"
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="username-signup">Username</label>
                  <input
                      type="text"
                      className="form-control"
                      ref={(input) => (this.user_name = input)}
                      id="username-signup"
                      autoComplete="username"
                      required
                  />
              </div>
              <div className="form-group ">
                  <label htmlFor="password-signup">Password</label>

                  <input
                      type="password"
                      className="form-control"
                      ref={(input) => (this.password = input)}
                      id="password-signup"
                      autoComplete="new-password"
                      required
                  />
              </div>
              <div className="form-group ">
                  <label htmlFor="password-signup">Confirm Password</label>

                  <input
                      type="password"
                      className="form-control"
                      ref={(input) => (this.password_confirmation = input)}
                      id="password-signup-confirmation"
                      autoComplete="new-password"
                      required
                  />
              </div>
              <div className="row justify-content-sm-center">
                  <button type="submit" className="btn btn-primary col-sm-6">
                      sign up
                  </button>
              </div>
              <p>{errormessage}</p>
          </form>
      );
  };
}

export default Signup