import React, { Component } from "react";
import { CopyBlock, dracula } from "react-code-blocks";


class DisplayOneComponent extends Component{
  state = {display: 'component'}

  changeDisplay = (event) => {
    event.preventDefault();

    console.log(event.target.value);
    this.setState({display: event.target.value})
  }
 
  render = () => {
    const { component } = this.props;
    return (
        <React.Fragment>
            {(this.state.display === 'component') ?
            <div className="display-one-component">
                <div className="codeBlock">
                    <img
                        className="display-component-image"
                        src={component.image}
                    />
                    <CopyBlock
                        text={component.code_block}
                        language="JavaScript"
                        theme={dracula}
                    />
                </div>
                <div className="display-one-details">
                  <h2>{component.title}</h2>
                  <p>{component.description}</p>
                </div>
                <div className="edit-component">
                  <button>Delete</button>
                  <button value="editform" onClick={this.changeDisplay}>Edit</button>
                </div>
              </div>
            :
            <form>
                <h2>Edit Form</h2>
                <button value="component" onClick={this.changeDisplay}>Go Back</button>
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
                        className="form-control"
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

                <input type="submit" value="Edit Component" />
            </form>}
        </React.Fragment>
    );
  }
}

export default DisplayOneComponent;
