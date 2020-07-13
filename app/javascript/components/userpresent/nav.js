import React, { Component } from "react";

class Nav extends Component {
  render = () => {
    return (
    <nav>
        <p>Home Image</p>
        <div>search component</div>
        <div className="button-section">
            <button className="btn">+</button>
            <button className="btn">Account</button>
        </div>
    </nav>
    );
  }
}

export default Nav