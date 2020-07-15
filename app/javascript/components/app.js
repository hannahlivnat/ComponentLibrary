import React, { Component } from "react";
import UserPresentPage from "../components/userpresent/userpresentpage";
import NoUserPresentPage from "../components/nouserpresent/nouserpage";
import Footer from "../components/footer";
import axios from 'axios';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        current_user: {},
        display: "userpresent",
        components: [],
        user_components: []
      };
  }
  
  getComponents = () => {
    const url = '/component'
    axios.get(url).then(
      (response) => {
        console.log(response.data);
        this.setState({
          components: response.data
        }, () => {
          console.log('State.Components is', this.state.components);
        })
      }
    )
  }
    
  loadUserComponents = () => {
    this.setState({
      user_components: [...this.state.current_user.components]
    })
  }

  componentDidMount() {
    this.getComponents();
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
