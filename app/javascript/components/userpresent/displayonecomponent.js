import React, { Component } from "react";
import { CopyBlock, dracula } from "react-code-blocks";


class DisplayOneComponent extends Component {
    state = { display: "component" };

    changeDisplay = (event) => {
        event.preventDefault();
        this.setState({ display: event.target.value });
    };

    //clear form on submit
    clearForm = () => {
        this.updateform.reset();
    };

    //create object out of form values and send to update component in database
    createComponent = (event) => {
        event.preventDefault();

        //change public to boolean value
        let isPublic = true;
        this.public.value === "public" ? (isPublic = true) : (isPublic = false);

        //change tags to array
        let tags = this.tags.value.toUpperCase();
        let tagsArray = tags.split(",");
        tagsArray = tagsArray.map(tag => tag.trim());

        this.setState(
            {
                updateComponent: {
                    image: this.image.value,
                    description: this.description.value,
                    code_block: this.code_block.value,
                    language: this.language.value,
                    public: isPublic,
                    tags: tagsArray,
                },
            },
            () => {
                console.log(this.state.updateComponent);
                console.log(this.props.component.id);
                this.props.update(
                    this.state.updateComponent,
                    this.props.component.id
                );
                this.clearForm();
            }
        );
    };

    render = () => {
        const { component, destroy } = this.props;
        return (
            <React.Fragment>
                {this.state.display === "component" ? (
                    <div className="display-one-component">
                        <div  className="display-component-image">
                            <img
                            src={component.image}
                            />
                        </div>

                        <div className="code-block">
                            <CopyBlock
                                text={component.code_block}
                                language="JavaScript"
                                theme={dracula}
                            />
                        </div>
                        <div className="display-one-details">
                            <p>{component.description}</p>
                        </div>
                        <div className="edit-component">
                            <button id={component.id} onClick={destroy} className="btn btn-primary col-sm-4">Delete</button>
                            <button
                                value="editform"
                                onClick={this.changeDisplay}
                                className="btn btn-primary col-sm-4"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ) : (
                    <form
                        onSubmit={this.createComponent}
                        ref={(el) => (this.updateform = el)}
                        className="edit-form"
                    >
                        <div className="justify-content-sm-center form-header">
                            <h4 className="col-sm-8">Edit Form</h4>
                            <button value="component" onClick={this.changeDisplay}>
                                Go Back
                            </button>
                        </div>

                        <div className="form-group row pt-8 pb-2">
                            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                            <input
                                type="text"
                                id="description"
                                className="form-control col-sm-9"
                                placeholder="Description"
                                ref={(input) => (this.description = input)}
                                aria-label="Description"
                                defaultValue={component.description}
                            />
                        </div>
                        <div className="form-group row mb-2">
                            <label htmlFor="language" className="col-sm-2 col-form-label">Language</label>
                            <input
                                type="text"
                                className="form-control col-sm-9"
                                placeholder="language"
                                ref={(input) => (this.language = input)}
                                aria-label="language"
                                defaultValue={component.language}
                            />
                        </div>
                        <div className="form-group row mb-2">
                            <label htmlFor="tags" className="col-sm-2 col-form-label">Tags </label>
                            <input
                                type="text"
                                className="form-control col-sm-9"
                                id="tags"                                placeholder="Tags: place a comma between each tag"
                                ref={(input) => (this.tags = input)}
                                aria-label="tag"
                                defaultValue={component.tags}
                            />
                        </div>
                        <div className="form-group row mb-2">
                           <label htmlFor="code" className="col-sm-2 col-form-label"> Code </label>
                            <textarea
                                className="form-control col-sm-9"
                                id="code"
                                placeholder="Code for Component"
                                ref={(input) => (this.code_block = input)}
                                defaultValue={component.code_block}
                            ></textarea>
                        </div>
                        <div className="form-group row mb-2">
                            <label htmlFor="image" className="col-sm-2 col-form-label"> Image </label>
                            <input
                                type="text"
                                className="form-control col-sm-9"
                                id="image"
                                placeholder="Image SRC"
                                ref={(input) => (this.image = input)}
                                aria-label="image src"
                                defaultValue={component.image}
                            />
                        </div>
                        <div className="form-group row mb-2 row justify-content-sm-center">
                            <select
                                ref={(select) => (this.public = select)}
                                name="public"
                                className="form-control col-sm-8"
                            >
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>

                        <div className="row justify-content-sm-center mt-10">
                            <button type="submit" className="btn btn-primary col-sm-3 submit-btn">
                                Edit Component
                            </button>
                        </div>                      
                    </form>
                )}
            </React.Fragment>
        );
    };
}

export default DisplayOneComponent;
