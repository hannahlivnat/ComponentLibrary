import React, { Component } from "react";
import Card from './card';
import Tags from './tags';


class DisplayComponents extends Component{
  state = { display: "card" }
  
  changeCardDisplay = () => {
    (this.state.display === "card") ? 
      this.setState({ display: "code" })
      :
      this.setState({display: "card"})
  }
  
  render = () => {
    const { components } = this.props;
    return <div className="displaycomponents">
      <Tags />
      <div className="card-group">
      {components.map((component, index) => {
        return <Card component={component} key={index} display={this.state.display} changedisplay={this.changeCardDisplay}/>
      })}
      </div>
    
    </div>;
  }
}

export default DisplayComponents