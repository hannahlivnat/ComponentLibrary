import React, { Component } from "react";

class Tags extends Component {
    render = () => {
        const { tags, changefilter, changetofalse } = this.props
        return (
            <div className="tags">
                <ul>
                    {tags.map((tag, index) => {
                        return (
                            <li key={index} onClick={changefilter}>
                                <p>{tag[0]}</p>
                            </li>
                        );
                    })}
                    <li> <p onClick={changetofalse}> ALL </p> </li>
                </ul>
            </div>
        );
    };
}

export default Tags