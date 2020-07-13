import React, { Component } from 'react'
import Nav from './nav'
import DisplayComponent from './displaycomponents'
import Tags from '../userpresent/tags'

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
        {/*(this.state.display === "home") ? 
        <DisplayComponent /> */}
      </div>
    );
  }
}

export default UserPresentPage