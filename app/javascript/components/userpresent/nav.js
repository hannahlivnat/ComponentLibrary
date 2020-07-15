import React, { Component } from "react";

class Nav extends Component {
  render = () => {
    return (
    <nav className="nav">
        <p className="nav-link">Home Image</p>
        <div className="nav-link">search component</div>
        <p className="nav-link">+</p>
        <p className="nav-link">Account</p>
    </nav>
    );
  }
}

export default Nav