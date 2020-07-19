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
  
  render = () => {
      const { newformmessage } = this.props; 
      return (
          <div className="new-component-form row">
              <form onSubmit={this.createComponent} ref={el => this.newform = el} className="col-sm-12">

                    <div className="row pt-5 pb-5 justify-content-sm-center form-header">
                        <h4 className="col-sm-8">Create Component</h4>
                    </div>

                  <div className="form-group row pt-8 pb-2">
                      <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                      <input
                          type="text"
                          id="description"
                          className="form-control col-sm-9"
                          ref={(input) => (this.description = input)}
                          aria-label="Description"
                      />
                  </div>

                  <div className="form-group row mb-2">
                      <label htmlFor="language" className="col-sm-2 col-form-label">Language</label>
                      <input
                          type="text"
                          className="form-control col-sm-9"
                          id="language"
                          ref={(input) => (this.language = input)}
                          aria-label="language"
                      />
                  </div>

                  <div className="form-group row mb-2">
                      <label htmlFor="tags" className="col-sm-2 col-form-label">Tags </label>

                      <input
                          type="text"
                          className="form-control col-sm-9"
                          id="tags"
                          placeholder="Please place a comma between each tag"
                          ref={(input) => (this.tags = input)}
                          aria-label="tag"
                      />
                  </div>

                  <div className="form-group row mb-2">
                      <label htmlFor="code" className="col-sm-2 col-form-label"> Code   </label>
                      
                      <textarea className="form-control col-sm-9"
                          placeholder="Press enter between each line of code" id="code"
                          ref={(input) => (this.code_block = input)}
                      ></textarea>
                  </div>

                  <div className="form-group row mb-2">
                      <label htmlFor="image" className="col-sm-2 col-form-label"> Image </label>

                      <input
                          type="text"
                          className="form-control col-sm-9"
                          id="image"
                          placeholder="Image SRC "
                          ref={(input) => (this.image = input)}
                          aria-label="image src"
                      />
                  </div>

                  <div className="form-group mb-2 row justify-content-sm-center">
                    <select
                        ref={(select) => (this.public = select)}
                        name="public"
                        className="form-control col-sm-10"
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                  </div>

              <div className="row justify-content-sm-center mt-10">
                <button type="submit" className="btn btn-primary col-sm-3">
                    Create Component
                </button>
              </div>              
            </form>
            <div className="newform-messages"> {newformmessage} </div>
          </div>
      );
  };
}

export default NewForm;
