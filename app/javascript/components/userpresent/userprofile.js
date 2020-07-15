import React, { Component } from "react";
import DisplayOneComponent from "./displayonecomponent";
import Tags from './tags';
import Card from './card';

class UserProfile extends Component {
    state = {
        display: "all-components",
        carddisplay: "card",
        component: {}
    }
    
    changeDisplay = () => {
        (this.state.display === 'all-components') ?
        this.setState({ carddisplay: 'displayone' })
            :
        this.setState({carddisplay: 'all-components'})            
    }
    
    changeComponentToDisplay = (componententered) => {
        this.setState = ({
            component: componententered
        })
    }
    
    
    render = () => {
    //take user-components as props
    const { components, currentuser } = this.props;
    console.log(currentuser.id);
    return (
        <React.Fragment>
            {this.state.display === "all-components" ? (
                <div className="user-profile">
                    <div className="card-group">
                        {components.map((component, index) => {
                            console.log(component.user_id);
                            return (
                            //change this to current user after login set up
                            (component.user_id == 1) ?
                                <Card
                                    component={component}
                                    index={index}
                                    display={this.state.carddisplay}
                                    changedisplay={this.changeDisplay}
                                />
                             : null )
                        })}
                    </div>
                </div>
                )
                :   (
                <div className="user-profile">
                <DisplayOneComponent
                    changecomponent={this.changeComponentToDisplay}
                />
                <Tags />
                </div>
            )}
        </React.Fragment>
    )}
};


export default UserProfile;