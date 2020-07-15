import React, { Component } from "react";

class NewForm extends Component {
  
    createComponent = (event) => {
        event.preventDefault();
        //change public to boolean value
        let isPublic = true;
        (this.public.value === "public") ?
        isPublic = true
        : 
        isPublic = false

        //change tags to array
        let tagsArray = this.tags.value.split(',');

        this.setState(
            {
                newComponent: {
                    image: this.image.value,
                    title: this.title.value,
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
            }
        );
    };

    render = () => {
        return (
            <div className="new-component-form">
                <form onSubmit={this.createComponent}>
                    <h2>Create a New Component</h2>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            ref={(input) => (this.title = input)}
                            aria-label="Title"
                        />
                    </div>
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
                        <textarea
                            placeholder="Code for Component"
                            ref={(input) => (this.code_block = input)}
                        ></textarea>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Image SRC"
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
            </div>
        );
    };
}

export default NewForm;
