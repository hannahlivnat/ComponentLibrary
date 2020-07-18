import React, { Component } from "react";
import UserPresentPage from "../components/userpresent/userpresentpage";
import NoUserPresentPage from "../components/nouserpresent/nouserpage";
import Footer from "../components/footer";
import axios from 'axios';

class App extends React.PureComponent {

    state = {
        current_user: {},
        display: "nouserpresent",
        components: [],
        tags: {},
        top_tags: [],
        usererror: null
    };

    //USER ROUTES
    //signup
    createUser = (body) => {
        axios.post("/user", {
            first_name: body.first_name,
            last_name: body.last_name,
            user_name: body.user_name,
            password: body.password,
            password_confirmation: body.password_confirmation
        }).then((response) => {
            this.setState({
                current_user: response.data,
                display: "userpresent", 
                usererror: ""
            })
        })
        .catch(error => {
            if(error.response) {
                this.setState({usererror: error.response.data.errors[0]})
            }
        })
    }

    //login route
    authenticateUser = (body) => {
        axios
            .post("/user/validate", {
                user_name: body.user_name,
                password_digest: body.password,
            })
            .then((response) => {
                this.setState(
                    {
                        current_user: response.data,
                        display: "userpresent",
                        usererror: "",
                    },
                    () => {
                        console.log(this.state.current_user);
                    }
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //logout user
    logout = () => {
        this.setState({
            current_user: {},
            display: "nouserpresent"
        });
    }

    //COMPONENT ROUTES
    //INDEX
    getComponents = () => {
        const url = "/component";
        axios.get(url).then((response) => {
            this.setState({
                components: response.data,
            });
        });
    };

    //Get tags and count
    getTags = () => {
        axios.get("/component/tags").then((response) => {
            this.setState(
                {
                    tags: response.data,
                },
                () => {
                    this.categorizeTags();
                }
            );
        });
    };

    categorizeTags = () => {
        //Object.entries transforms an object into an array of nested arrays
        const tags = Object.entries(this.state.tags);
        //.sort b - a will sort array from highest to lowest based on each nested array's element at index 1
        const sorted_tags = tags.sort((a, b) => b[1] - a[1]);
        const top_five = sorted_tags.slice(0, 5);
        this.setState ({
          top_tags: top_five
        })
    };

    componentDidMount() {
        this.getComponents();
        this.getTags();
    }

    //NEW
    newComponent = (body) => {
        //console.log("new component route connected!");
        axios
            .post("/component/", {
                image: body.image,
                description: body.description,
                code_block: body.code_block,
                tags: body.tags,
                public: body.public,
                user_id: this.state.current_user.id,
            })
            .then((response) => {
                this.setState({
                    components: response.data,
                });
                //this.changeFormMessage(
                //    "Your component has been filed in the library!"
                //);
            });
    };

    //update component
    updateComponent = (body, id) => {
        axios
            .put("/component/" + id, {
                image: body.image,
                title: body.title,
                description: body.description,
                code_block: body.code_block,
                tags: body.tags,
                public: body.public,
            })
            .then((response) => {
                this.setState({
                    components: response.data,
                });
            });
    };

    //delete component
    deleteComponent = (event) => {
        event.preventDefault();
        const id = parseInt(event.target.getAttribute("id"));
        axios.delete("/component/" + id).then((response) => {
            this.setState(
                {
                    components: response.data,
                },
                () => {
                    window.location.href = "/userprofile";
                }
            );
        });
    };

    changeDisplay = (str) => {
        this.setState({ display: str });
    };

    render = () => {
        return (
            <div className="containerdiv">
                <div className="main-section">
                    {this.state.display === "userpresent" ? (
                        <UserPresentPage
                            changedisplay={this.changeDisplay}
                            components={this.state.components}
                            newcomponent={this.newComponent}
                            newformmessage={this.state.newformmessage}
                            currentuser={this.state.current_user}
                            update={this.updateComponent}
                            destroy={this.deleteComponent}
                            tags={this.state.top_tags}
                            logout={this.logout}
                        />
                    ) : (
                        <NoUserPresentPage 
                            changedisplay={this.changeDisplay} 
                            signup={this.createUser} 
                            authenticateuser={this.authenticateUser} 
                            errormessage={this.state.usererror}
                        />
                    )}
                </div>
                <Footer />
            </div>
        );
    };
}

export default App;
