import React, { Component } from "react";
import DisplayOneComponent from "./displayonecomponent";

class UserProfile extends Component {
    state = {
        display: "all-components",
        component: {}
    }
    
    changeCardDisplay = () => {
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
    const { components } = this.props;
    return (
        <div className="user-profile">
            {this.state.display === "all-components" ? (
                <div class="card-group">
                    {components.map((component, index) => {
                        return (
                            <Card
                                component={component}
                                index={index}
                                display={this.state.display}
                                changedisplay={this.changeCardDisplay}
                            />
                        );
                    })}
                </div>
            ) : (
                <DisplayOneComponent changecomponent={this.changeComponentToDisplay}/>
            )}
            <Tags />
        </div>
    );
    }
}

export default UserProfile;