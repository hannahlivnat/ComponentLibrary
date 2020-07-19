import React, { Component } from "react";

class Tags extends Component {
    render = () => {
        const { tags, changefilter } = this.props
        return (
            <div className="tags">
                <ul>
                    {tags.map((tag, index) => {
                        return (
                            <li key={index} onClick={changefilter} className="chips chips-lg">
                                <p>{tag[0]}</p>
                            </li>
                        );
                    })}
                    <li onClick={changefilter}> <p> All </p> </li>
                </ul>
            </div>
        );
    };
}

export default Tags