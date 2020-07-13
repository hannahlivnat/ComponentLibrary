import React, { Component } from "react";
import UserPresentPage from "../components/userpresent/userpresentpage";
import NoUserPresentPage from "../components/nouserpresent/nouserpage";

class App extends Component {
  constructor() {
      super()
      this.state = {
        currentUser: {},
        display: "userpresent",
      };
    }

    render = () => {
      return (this.state.display === "userpresent") ? 
          <UserPresentPage />
        : 
          <NoUserPresentPage />
    };
}

export default App;
