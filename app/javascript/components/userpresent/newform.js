import React, { Component } from "react";
import axios from "axios";

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
                  language: this.language.value,
                  public: isPublic,
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
  
  render = () => {
      return (
          <div className="new-component-form">
              <form onSubmit={this.createComponent} ref={el => this.newform = el}>

                    <div className="form-header">
                        <h4>Create Component</h4>
                    </div>

                  <div className="form-group">
                      <label htmlFor="description" >Description</label>
                      <input
                          type="text"
                          id="description"
                          className="form-control col-sm-9"
                          ref={(input) => (this.description = input)}
                          aria-label="Description"
                      />
                  </div>

                  <div className="form-group">
                      <label htmlFor="language" >Language</label>
                      <input
                          type="text"
                          className="form-control col-sm-9"
                          id="language"
                          ref={(input) => (this.language = input)}
                          aria-label="language"
                      />
                  </div>

                  <div className="form-group">
                      <label htmlFor="tags" >Tags </label>

                      <input
                          type="text"
                          className="form-control col-sm-9"
                          id="tags"
                          placeholder="Please place a comma between each tag"
                          ref={(input) => (this.tags = input)}
                          aria-label="tag"
                      />
                  </div>

                  <div className="form-group">
                      <label htmlFor="code"> Code   </label>
                      
                      <textarea className="form-control col-sm-9"
                          placeholder="Press enter between each line of code" id="code"
                          ref={(input) => (this.code_block = input)}
                      ></textarea>
                  </div>

                  <div className="form-group ">
                      <label htmlFor="image"> Image </label>

                      <input
                          type="text"
                          className="form-control col-sm-9"
                          id="image"
                          placeholder="Image SRC "
                          ref={(input) => (this.image = input)}
                          aria-label="image src"
                      />
                  </div>

                  <div>
                    <select
                        ref={(select) => (this.public = select)}
                        name="public"
                        className="form-control"
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                  </div>

                <button type="submit" className="btn btn-primary">
                    Create Component
                </button>
            
            </form>
          </div>
      );
  };
}

export default NewForm;
