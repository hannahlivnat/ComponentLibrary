import React, { Component } from "react";

class Tags extends Component {
    render = () => {
        const { tags, changefilter } = this.props
        return (
            <div className="tags">
                <ul>
                    {tags.map((tag, index) => {
                        return (
                            <li key={index} onClick={changefilter}>
                                {tag[0]}
                            </li>
                        );
                    })}
                    <li onClick={changefilter}>All</li>
                </ul>
            </div>
        );
    };
}

export default Tags