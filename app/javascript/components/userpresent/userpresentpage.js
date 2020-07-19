import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DisplayComponents from './displaycomponents'
import UserProfile from '../userpresent/userprofile'
import NewForm from '../userpresent/newform'

class UserPresentPage extends Component {
    state = {
        filter: "false",
    };

    changeFilter = (event) => {
        event.preventDefault();
        let new_value = "";
        new_value = event.target.innerHTML.toUpperCase();
        console.log(new_value);
        this.setState({ filter: new_value });
    };

    changeFilterToFalse = () => {
        this.setState({filter: "false"})
    }

    changeFilterSearchBar = (event) => {
        event.preventDefault();
        let new_value = "";
        if (event.keyCode == 13) {
            event.target.value === ""
                ? (new_value = "false")
                : (new_value = event.target.value.toUpperCase());
            this.setState({ filter: new_value }, () => {console.log(this.state.filter);});
        }

    }

    render = () => {
        const {
            components,
            newcomponent,
            newformmessage,
            currentuser,
            update,
            destroy,
            tags,
            logout
        } = this.props;
        return (
            <React.Fragment>
                <Router>
                    <div className="userpresent">
                        <header>
                        <nav className="nav">
                            <li className="nav-link">
                                <Link to="/">
                                    <svg
                                        width="2em"
                                        height="2em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-house-door"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <div className="nav-link">
                                <input type="text" onKeyDown={this.changeFilterSearchBar}/>
                            </div>
                            <li className="nav-link">
                                <Link to="/newcomponent">
                                    <svg
                                        width="2em"
                                        height="2em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-plus-square"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/userprofile">
                                    <svg
                                        width="2em"
                                        height="2em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-person"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li className="nav-link" onClick={logout}>Log Out</li>
                        </nav>
                        </header>
                        <React.Fragment>
                            <Switch>
                                <div className="user-main-section">
                                    <Route path="/" exact>
                                        <React.Fragment>
                                            <DisplayComponents
                                                components={components}
                                                tags={tags}
                                                filter={this.state.filter}
                                                changeFilter={this.changeFilter}
                                                changeToFalse = {this.changeFilterToFalse}
                                            />
                                        </React.Fragment>
                                    </Route>
                                    <Route path="/newcomponent" exact>
                                        <React.Fragment>
                                            <NewForm
                                                newcomponent={newcomponent}
                                                newformmessage={newformmessage}
                                            />
                                        </React.Fragment>
                                    </Route>
                                    <Route path="/userprofile" exact>
                                        <React.Fragment>
                                            <UserProfile
                                                components={components}
                                                currentuser={currentuser}
                                                update={update}
                                                destroy={destroy}
                                            />
                                        </React.Fragment>
                                    </Route>
                                </div>
                            </Switch>
                        </React.Fragment>
                    </div>
                </Router>
            </React.Fragment>
        );
    };
}

export default UserPresentPage