import React, { Component } from "react";

class NewForm extends Component {
  //clear form on submit
  clearForm = () => {
    this.newform.reset();
  }
  
  //create object out of form values and send to create component in database
  createComponent = (event) => {
      event.preventDefault();
      //change public to boolean value
      let isPublic = true;
      (this.public.value === "public") ?
      isPublic = true
      : 
      isPublic = false

      //change tags to array
      let tags = this.tags.value.toUpperCase();
      tags = tags.trim();
      let tagsArray = tags.split(',');
      tagsArray = tagsArray.map((tag) => tag.trim());
      this.setState(
          {
              newComponent: {
                  image: this.image.value,
                  description: this.description.value,
                  code_block: this.code_block.value,
                  public: isPublic,
                  language: this.language.value,
                  tags: tagsArray
                  //user: this.state.current_user
              }
          }, () => {
            console.log(this.state.newComponent);
            this.props.newcomponent(this.state.newComponent);
            this.clearForm();
          }
      );
  };

  fileListener = (event) => {
    console.log(event);
  }

  render = () => {
      const { newformmessage } = this.props; 
      return (
          <div className="new-component-form">
              <form onSubmit={this.createComponent} ref={el => this.newform = el}>
                  <h2>Create a New Component</h2>
                  <div className="input-group mb-3">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Description"
                          ref={(input) => (this.description = input)}
                          aria-label="Description"
                      />
                  </div>
                  <div className="input-group mb-3">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="language"
                          ref={(input) => (this.language = input)}
                          aria-label="language"
                      />
                  </div>
                  <div className="input-group mb-3">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Tags: place a comma between each tag"
                          ref={(input) => (this.tags = input)}
                          aria-label="tag"
                      />
                  </div>
                  <div className="input-group mb-3">
                      <textarea className="form-control"
                          placeholder="Code for Component"
                          ref={(input) => (this.code_block = input)}
                      ></textarea>
                  </div>
                  <div className="input-group mb-3">
                      <img src=" http://res.cloudinary.com/huagrzciy/image/upload/sample.jpg" id="img-preview" />

                      <input
                          type="file"
                          className="form-control file-upload"
                          placeholder="Image SRC"
                          onChange = {this.fileListener}
                          ref={(input) => (this.image = input)}
                          aria-label="image src"
                      />
                  </div>
                  <div className="input-group mb-3">
                      <select
                          ref={(select) => (this.public = select)}
                          name="public"
                      >
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                      </select>
                  </div>

                  <input type="submit" value="Create New Component" />
              </form>
              <div className="newform-messages"> {newformmessage} </div>
          </div>
      );
  };
}

export default NewForm;
