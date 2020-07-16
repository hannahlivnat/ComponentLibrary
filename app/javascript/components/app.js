import React, { Component } from "react";
import UserPresentPage from "../components/userpresent/userpresentpage";
import NoUserPresentPage from "../components/nouserpresent/nouserpage";
import Footer from "../components/footer";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_user: {
                id: 2,
                first_name: "Daniel",
                last_name: "Livnat",
                image:
                    "https://images.unsplash.com/photo-1590536527363-f11dce09bbe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                user_name: "daniellivnat",
                password_digest:
                    "$2a$12$SHa1dCdzalWvKScZJ7RV8.KcWREMgCN1/7j4qnTzBdYQtbigjg9s.",
                components: [],
            },
            display: "userpresent",
            components: [],
            user_components: [],
            newformmessage: null,
        };
    }

    //NOT WORKING - COME BACK TO THIS
    //changeFormMessage = (message) => {
    //  this.setState({
    //    newformmessage: message
    //  })
    //  setTimeout(this.setState({ newformmessage: "" }), 10000);
    //}

    //COMPONENT ROUTES

    //INDEX
    getComponents = () => {
        const url = "/component";
        axios.get(url).then((response) => {
            console.log(response.data);
            this.setState(
                {
                    components: response.data,
                }
            );
        });
    };

    componentDidMount() {
      this.getComponents();
      this.setState({
        newformmessage: null
      })
    }

  //NEW
  newComponent = (body) => {
    //console.log("new component route connected!");
    axios.post('/component/', {
      image: body.image,
      title: body.title,
      description: body.description,
      code_block: body.code_block,
      tags: body.tags,
      public: body.public,
      user: this.state.current_user
    }).then((response)=> {
      this.setState({
          components: response.data,
      });
      this.changeFormMessage("Your component has been filed in the library!")
    })
  }
  
  
  loadUserComponents = () => {
      this.setState({
          user_components: [...this.state.current_user.components],
      });
  };

  //update component
  updateComponent = (body, id) => {
    axios.put('/component/' + id, {
      image: body.image,
      title: body.title,
      description: body.description,
      code_block: body.code_block,
      tags: body.tags,
      public: body.public
    }).then((response) => {
      this.setState({
        components: response.data
      });
    })
  }

  //delete component
  deleteComponent = (event) => {
    event.preventDefault();
    const id = parseInt(event.target.getAttribute('id'));
    axios.delete('/component/' + id).then((response) => {
      this.setState({
        components: response.data
      }, () => {
        window.location.href = "/userprofile";

      })

    })
  }

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
                      />
                    ) : (
                        <NoUserPresentPage changedisplay={this.changeDisplay} />
                    )}
                </div>
                <Footer />
            </div>
        );
    };
}

export default App;
