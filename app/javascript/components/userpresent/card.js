import React, { Component } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

class Card extends Component {
  state = {display: "card"}
  
  render = () => {
    const {component, index} = this.props
    return (
        <div key={index} className="card">
            {this.state.display === "card" ? (
            <div>
                <img className="card-img-top" src={component.image} />
                <div className="card-body">
                    <h5 className="card-title">{component.title}</h5>
                    <p className="card-text">{component.description}</p>

                    <div className="card-footer">
                        <ul>
                            <li>{component.tags}</li>
                        </ul>
                    </div>
                </div>
            </div>
            ) : (
            <div>
                <div className="card-header">{component.title}</div>
                <div className="card-body">
                  <p className="card-text">{component.description}</p>
                  <CopyBlock
                      text={component.code_block}
                      language="JavaScript"
                      theme={dracula}
                  />
                </div>
            </div>
            )}
        </div>
    );
  }

}

export default Card;
