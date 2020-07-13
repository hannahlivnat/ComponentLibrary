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
                  <label for="firstname-signup">First Name</label>
                  <input
                      type="text"
                      className="form-control"
                      id="firstname-signup"
                  />
              </div>
              <div className="form-group">
                  <label for="lastname-signup">Last Name</label>
                  <input
                      type="text"
                      className="form-control"
                      id="lastname-signup"
                  />
              </div>
              <div className="form-group">
                  <label for="image-signup">Image</label>
                  <input
                      type="text"
                      className="form-control"
                      id="image-signup"
                  />
              </div>
              <div className="form-group">
                  <label for="username-signup">Username</label>
                  <input
                      type="text"
                      className="form-control"
                      id="username-signup"
                  />
              </div>
              <div className="form-group ">
                  <label for="password-signup">Password</label>

                  <input
                      type="text"
                      className="form-control"
                      id="password-signup"
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