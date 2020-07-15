import React, { Component } from "react";
import Card from './card';
import Tags from './tags';


class DisplayComponents extends Component{
  render = () => {
    const { components } = this.props;
    return <div className="displaycomponents">
      <Tags />
      <div class="card-group">
      {components.map((component, index) => {
        return <Card component={component} index={index}/>
      })}
      </div>
    
    </div>;
  }
}

export default DisplayComponents