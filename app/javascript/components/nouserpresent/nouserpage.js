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
                    <h4 className="col-11 offset-1">TheLibrary</h4>
                </header>
                <div className="main-nouser-section row pt-5">
                    <div className="col-md-6 justify-content-center">
                        <h2>Stop Rewriting</h2>
                        <h2>Start Filing it in The Library</h2>
                        <p>A meaningful paragraph here</p>
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
                            <img />
                            <p className="text-center">Write Code</p>
                        </li>
                        <li className="col-md-4 justify-content-center">
                            <img />
                            <p className="text-center">Create Snippet</p>
                        </li>
                        <li className="col-md-4 justify-content-center">
                            <img />
                            <p className="text-center">Save Copy Share</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default NoUserPresentPage
