import React, { Component } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

class Card extends Component {
  state = {
    carddisplay: 'card'
  }

 
  changeCardDisplay = () => {
    this.state.carddisplay === 'card' ?
    this.setState({carddisplay: 'code'}) :
    this.setState({carddisplay: 'card'})
  }
 

  render = () => {
    const { component, index, display, changecomponent } = this.props  
    return (
        <div key={index} className="card">
            {this.state.carddisplay === "card" ? (
                <div>
                    <img
                        onClick={this.changeCardDisplay}
                        className="card-img-top img-responsive"
                        src={component.image}
                    />
                    <div className="card-body image-card-body">
                        {display === "user" ? (
                            <div className="cardtop">
                                <button
                                    id={component.id}
                                    onClick={changecomponent}
                                >
                                    {" "}
                                    Edit{" "}
                                </button>
                                {component.public ? (
                                    <p className="public">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-unlock-fill"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M8.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                                            />
                                        </svg>
                                    </p>
                                ) : (
                                    <p className="public">
                                        {" "}
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-lock-fill"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
                                            <path
                                               fillRule="evenodd"
                                                d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                                            />
                                        </svg>
                                    </p>
                                )}
                            </div>
                        ) : null}
                        <p className="card-text">{component.description}</p>

                        <div className="card-footer">
                            {component.tags.map((tag, index) => {
                                return <p key={index}>{tag}</p>;
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="card-header">
                        <p onClick={this.changeCardDisplay} className="back-button">Back</p>

                        <p className="card-text">{component.description}</p>
                    </div>
                    <div className="card-body">
                        <CopyBlock
                            text={component.code_block}
                            language={component.language}
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