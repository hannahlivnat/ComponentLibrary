import React, { Component } from "react";

class Tags extends Component {
    constructor(props) {
        super(props);
      this.state = {
        top_tags: {}
      }
    }

    categorizeTags = () => {
      const highest_tags = Object.keys(this.props.tags)

      console.log(highest_tags);
    }

    render = () => {
        this.categorizeTags();
        return <div className="tags"></div>;
    };
}

export default Tags