import React, { Component } from "react";
import UserPresentPage from "../components/userpresent/userpresentpage";
import NoUserPresentPage from "../components/nouserpresent/nouserpage";
import Footer from "../components/footer";
import axios from 'axios';

//App 
class App extends React.PureComponent {
    state = {
        current_user: {},
        display: "nouserpresent",
        components: [],
        likes: [],
        tags: {},
        top_tags: [],
        usererror: null
    };

    // USER ROUTES ==================================================
    // USER SIGNUP
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

    // LOGIN
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
                    }
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // LOGOUT
    logout = () => {
        this.setState({
            current_user: {},
            display: "nouserpresent"
        });
    }

    //COMPONENT ROUTES =============================================
    //INDEX
    getComponents = () => {
        const url = "/component";
        axios.get(url).then((response) => {
            this.setState({
                components: response.data,
            });
        });
    };

    // TAGS
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

    // NEW
    newComponent = (body) => {
        //console.log("new component route connected!");
        axios
            .post("/component/", {
                image: body.image,
                description: body.description,
                code_block: body.code_block,
                language: body.language,
                tags: body.tags,
                public: body.public,
                user_id: this.state.current_user.id,
            })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    components: response.data,
                });
                document.querySelector('#home-link').click();

            });
    };

    // UPDATE
    updateComponent = (body, id) => {
        axios
            .put("/component/" + id, {
                image: body.image,
                title: body.title,
                description: body.description,
                code_block: body.code_block,
                language: body.language,
                tags: body.tags,
                public: body.public,
            })
            .then((response) => {
                this.setState({
                    components: response.data,
                });
                document.querySelector('#home-link').click();

            });
    };

    // DELETE
    deleteComponent = (event) => {
        event.preventDefault();
        const id = parseInt(event.target.getAttribute("id"));
        axios.delete("/component/" + id).then((response) => {
            this.setState(
                {
                    components: response.data,
                }
            );
            document.querySelector('#home-link').click();

        });
    };

    // LIKE ROUTES =============================================
 
    // NEW 
    createLike = (likecount, componentid) => {
        event.preventDefault();
        axios.post(`/like/${componentid}`, {
            count: likecount,
        }).then((response) => {
            this.setState({ likes: response.data })
        })
    }

    // UPDATE
    increaseLike = (likecount, id) => {
        event.preventDefault();
        axios.put(`/like/${id}`, {
            count: likecount
        }).then((response) => {
            this.setState({ likes: response.data })
        })
    }

    // CHANGE STATE
    changeDisplay = (str) => {
        this.setState({ display: str });
    };

    componentDidMount() {
        this.getComponents();
        this.getTags();
    }

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
                            createlike={this.createLike}
                            increaselike={this.increaseLike}
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
