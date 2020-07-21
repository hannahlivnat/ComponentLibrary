import React, { Component } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import axios from 'axios';

class Card extends Component {
    state = {
        carddisplay: 'card',
        like: [],
        likecount: 0
    }

    changeCardDisplay = () => {
        this.state.carddisplay === 'card' ?
        this.setState({carddisplay: 'code'}) :
        this.setState({carddisplay: 'card'})
    }

    // SHOW
    getLike = (componentid) => {
        axios.get(`/like/${componentid}`).then((response) => {
            const like = response.data;
            //console.log(like);
            this.setState({
                like: like,
                likecount: like.count
            })
        }, (error) => {
            this.setState({like : 0})
        })
    }

    componentDidMount() {
        this.getLike(this.props.component.id);
    }

    // INCREASE LIKE BUTTON
    increaseLike = () => {
        const likecount = parseInt(this.state.likecount) + 1
        if (likecount > 1) {
            //console.log("Like Count Over 1", this.state.likecount, likecount, this.state.like.id);
            this.props.increaselike(likecount, this.state.like.id)
        } else {
            //console.log("Like Count Below 1", this.state.likecount, likecount, this.props.component.id);
            this.props.createlike(likecount, this.props.component.id)
        }
        setTimeout(() => {
            this.getLike(this.props.component.id);   
        }, 200);
    }

    // COPY COMPONENT
    copyComponent = (component) => {
        if(component.user_id === this.props.currentuser.id) {
            this.props.opencard();
        } else {
            this.setState({
                copiedComponent: {
                    image: component.image,
                    description: component.description,
                    code_block: component.code_block,
                    language: component.language,
                    public: component.public,
                    tags: component.tags
                }
            }, () => {
                this.props.newcomponent(this.state.copiedComponent);
            })
        } 
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
                        <div className="likeButton">
                            <svg onClick={this.increaseLike} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-suit-heart" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                            </svg>
                            <p>{this.state.likecount}</p>
                        </div>
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
                        <div className="button-section">
                        <p onClick={this.changeCardDisplay} className="back-button">Back</p>
                        <p onClick={() => this.copyComponent(component)} className="copy-button">Copy</p>
                        </div>
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