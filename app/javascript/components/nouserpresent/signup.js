import React, { Component } from "react";

class Signup extends React.Component {
  render = () => {
      const { changedisplay } = this.props;
      return (
          <form className="px-4">
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
                      id="firstname-signup" required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="lastname-signup">Last Name</label>
                  <input
                      type="text"
                      className="form-control"
                      id="lastname-signup" required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="image-signup">Image</label>
                  <input
                      type="text"
                      className="form-control"
                      id="image-signup" required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="username-signup">Username</label>
                  <input
                      type="text"
                      className="form-control"
                      id="username-signup" required
                  />
              </div>
              <div className="form-group ">
                  <label htmlFor="password-signup">Password</label>

                  <input
                      type="password"
                      className="form-control"
                      id="password-signup" required
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

export default Signup