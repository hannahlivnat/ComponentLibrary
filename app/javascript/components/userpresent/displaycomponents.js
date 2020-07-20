import React, { Component } from "react";
import Card from './card';
import Tags from './tags';


class DisplayComponents extends Component{
  state = {
    display: "card",
  }
 
  //// FUNCTION TO FLIP CARD
  //changeCardDisplay = () => {
  //  (this.state.display === "card") ? 
  //    this.setState({ display: "code" })
  //    :
  //    this.setState({display: "card"})
  //}
  
  render = () => {
    const { components, tags, filter, changeFilter, changeToFalse } = this.props;
    return <div className="displaycomponents">
      <Tags tags={tags} changefilter={changeFilter} changetofalse = {changeToFalse}/>
      <div className="card-columns">

      {components.map((component, index) => {
        const isPublic = component.public
        //const filter = this.state.filter;
        return (
            <React.Fragment key={index}>
                {isPublic ? (
                    <React.Fragment>
                        {(filter === "false") ?
                        <Card
                            component={component}
                            key={index}
                            display={this.state.display}
                            //changedisplay={this.changeCardDisplay}
                        />
                        : (component.tags.includes(filter)) ?
                        <Card
                            component={component}
                            key={index}
                            display={this.state.display}
                            //changedisplay={this.changeCardDisplay}
                        /> : null}
                    </React.Fragment>
                ) : null}
            </React.Fragment>
        )
        })} 
      </div>
    
    </div>
  }
}

export default DisplayComponents;