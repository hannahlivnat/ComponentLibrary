import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
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
        let new_value = "";
        if (event.keyCode == 13) {
            event.target.value === ""
                ? (new_value = "false")
                : (new_value = event.target.value.toUpperCase());
            this.setState({ filter: new_value }, () => {console.log(this.state.filter);});
        }

    }

    handleDestroy = (event) => {
        this.props.destroy(event);  
        document.querySelector('#home-link').click();
    }

    openCard = () => {
        document.querySelector('.popup').style.display = "block";
    }

    closeCard = () => {
        document.querySelector('.popup').style.display = "none";
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
            logout, 
            createlike, 
            increaselike 
        } = this.props;
        return (
            <React.Fragment>
                <Router>
                    <div className="userpresent">
                        <div className="popup">
                            <a onClick={this.closeCard}>X</a>
                            <p>You Already Have This Card!</p>
                        </div>
                        <header>
                        <nav className="nav row">
                            <li className="nav-link col-6" >
                                <Link to="/">
                                 <h4 id="home-link">TheLibrary</h4>
                                </Link>
                            </li>
                            <li className="nav-link col-2">
                                <Link to="/newcomponent">
                                    NEW
                                </Link>
                            </li>
                            <li className="nav-link col-2" >
                                <Link to="/userprofile" id="user-profile">
                                    PROFILE
                                </Link>
                            </li>
                            <li className="nav-link col-2" onClick={logout}>LOGOUT</li>
                        </nav>
                        <div className="search-section">
                            <input type="text" onKeyDown={this.changeFilterSearchBar} placeholder="Search for a Tag" />
                        </div>
                        </header>
                        <React.Fragment>
                            <Switch>
                                <div className="user-main-section">
                                    <Route path="/" exact>
                                        <React.Fragment>
                                            <DisplayComponents
                                                components={components}
                                                newcomponent = {newcomponent}
                                                currentuser={currentuser}
                                                tags={tags}
                                                filter={this.state.filter}
                                                changeFilter={this.changeFilter}
                                                changeToFalse = {this.changeFilterToFalse}
                                                opencard = {this.openCard}
                                                createlike = {createlike}
                                                increaselike = {increaselike}
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
                                                destroy={this.handleDestroy}
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