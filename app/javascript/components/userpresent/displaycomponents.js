import React, { Component } from "react";
import Card from './card';
import Tags from './tags';


class DisplayComponents extends Component{
  constructor(props) {
      super(props);

      this.state = {
        display: "card",
        filter: "false"
      }
  }  

  changeFilter = (event) => {
    event.preventDefault;
    let new_value = "";
    event.target.innerHTML === "All" ?
      new_value = "false" :
      new_value = event.target.innerHTML;
    console.log(new_value);
    this.setState({filter: new_value})
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
      <Tags tags={tags} changefilter={this.changeFilter}/>
      <div className="card-columns">
      {components.map((component, index) => {
        const isPublic = component.public;
        return (
            <React.Fragment key={index}>
                {isPublic ? (
                    <React.Fragment>
                        {(this.state.filter === "false") ?
                        <Card
                            component={component}
                            key={index}
                            display={this.state.display}
                            changedisplay={this.changeCardDisplay}
                        />
                        : (component.tags.includes(this.state.filter)) ?
                        <Card
                            component={component}
                            key={index}
                            display={this.state.display}
                            changedisplay={this.changeCardDisplay}
                        /> : null}
                    </React.Fragment>
                ) : null}
            </React.Fragment>
        );
        })}; 
      </div>
    
    </div>;
  }
}

export default DisplayComponents;