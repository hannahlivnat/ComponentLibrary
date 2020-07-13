import React, { Component } from "react";
import Login from './login'
import Signup from './signup'

class NoUserPresentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "login",
        };
    }

    changeDisplay = () => {
        this.state.display === "login"
            ? this.setState({ display: "signup" })
            : this.setState({ display: "login" });
    };

    render() {
        return (
            <div className="nouser-section">
                <header className="row pt-4">
                    <h4 className="col-12">TheLibrary</h4>
                </header>
                <div className="main-nouser-section row pt-5">
                    <div className="col-md-6 splash-section">
                        <h2>Stop Rewriting Code</h2>
                        <h2>File it in The Library</h2>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        {this.state.display === "login" ? (
                            <Login changedisplay={this.changeDisplay} />
                        ) : (
                            <Signup changedisplay={this.changeDisplay} />
                        )}
                    </div>
                </div>
                <div className="bottom-banner">
                    <ul className="row">
                        <li className="col-md-4 justify-content-center">
                            <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-code-square" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path fillRule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                            </svg>
                            <p className="text-center">Write Code</p>
                        </li>
                        <li className="col-md-4 justify-content-center">
                            <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-archive" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M2 5v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V5h1v7.5c0 1.345-1.021 2.5-2.357 2.5H3.357C2.021 15 1 13.845 1 12.5V5h1z" />
                                <path fillRule="evenodd" d="M5.5 7.5A.5.5 0 0 1 6 7h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM15 2H1v2h14V2zM1 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z" />
                            </svg>
                            <p className="text-center">Create Snippets</p>
                        </li>
                        <li className="col-md-4 justify-content-center">
                            <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-share" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.724 3.947l-7 3.5-.448-.894 7-3.5.448.894zm-.448 9l-7-3.5.448-.894 7 3.5-.448.894z" />
                                <path fillRule="evenodd" d="M13.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                            <p className="text-center">Save and Share</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default NoUserPresentPage
