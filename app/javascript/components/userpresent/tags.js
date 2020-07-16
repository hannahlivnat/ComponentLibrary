import React, { Component } from "react";

class Tags extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const { tags } = this.props
        return <div className="tags">
          {tags.map((tag) => {
            return <li>{tag[0]}</li>
          })}
        </div>;
    };
}

export default Tags