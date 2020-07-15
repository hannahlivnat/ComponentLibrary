import React, { Component } from 'react'
import Nav from './nav'
import DisplayComponents from './displaycomponents'
import Tags from '../userpresent/tags'
import UserProfile from '../userpresent/userprofile'

class UserPresentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "home"
    }
  }
  
  render = () => {

    return (
      <div className="userpresent">
        <Nav />
        <div className="user-main-section">
            {(this.state.display === "home") ?
            <DisplayComponents components={this.props.components} /> : <UserProfile />
            }
        </div>
      </div>
    );
  }
}

export default UserPresentPage