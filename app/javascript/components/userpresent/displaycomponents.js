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
        const isPublic = component.public;
        return (
        <React.Fragment>
            {isPublic ? (
                <Card
                    component={component}
                    key={index}
                    display={this.state.display}
                    changedisplay={this.changeCardDisplay}
                />
            ) : null}
        </React.Fragment>
        );
        })}
      </div>
    
    </div>;
  }
}

export default DisplayComponents