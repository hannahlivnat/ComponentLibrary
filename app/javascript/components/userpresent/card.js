import React, { Component } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

class Card extends Component {
  
  
  render = () => {
    const { component, index, changedisplay, display } = this.props  
    return (
        <div key={index} className="card">
            {display === "card" ? (
            <div>
                <img onClick={changedisplay} className="card-img-top" src={component.image} />
                <div className="card-body">
                    <h5 className="card-title">{component.title}</h5>
                    <p className="card-text">{component.description}</p>

                    <div className="card-footer">
                        <ul>        
                            {component.tags.map((tag, index) => {
                                return <li key={index}>{tag}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            ) : (
            <div>
                <div className="card-header">{component.title} <p onClick={changedisplay}>Back</p></div>
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
