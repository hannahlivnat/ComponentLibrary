import React, { Component } from "react";
import Card from './card';
import Tags from './tags';


class DisplayComponents extends Component{
    constructor(props) {
        super(props);

        this.state = {
          display: "card"
        }
    }  
  changeCardDisplay = () => {
    (this.state.display === "card") ? 
      this.setState({ display: "code" })
      :
      this.setState({display: "card"})
  }
  
  render = () => {
    const { components, tags } = this.props;
    return <div className="displaycomponents">
      <Tags tags={tags}/>
      <div className="card-columns">
      {components.map((component, index) => {
        const isPublic = component.public;
        return (
        <React.Fragment key={index}>
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

export default DisplayComponents;