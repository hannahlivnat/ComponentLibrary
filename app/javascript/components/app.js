import React, { Component } from "react";
import UserPresentPage from "../components/userpresent/userpresentpage";
import NoUserPresentPage from "../components/nouserpresent/nouserpage";
import Footer from "../components/footer";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: {},
            display: "nouserpresent",
        };
    }

    changeDisplay = (str) => {
      this.setState({ display: str });
    };

    render = () => {
      return (
        <div className="containerdiv">
          <div className="main-section">
              {this.state.display === "userpresent" ? (
                  <UserPresentPage changedisplay={this.changeDisplay} />
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
