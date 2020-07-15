import React, { Component } from "react";

class NewForm extends Component {

  render = () => {
    return <div className="new-component-form">
      <form>
        <h2>Create a New Component</h2>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <input type="image" placeholder="image" />
        <input type="submit" value="Create New Component"/>
      </form>
    </div>
  }
}

export default NewForm;
