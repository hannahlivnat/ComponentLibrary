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
        this.setState({ display: 'displayone' })
            :
        this.setState({display: 'all-components'})            
    }
    

    changeComponentToDisplay = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        const components = this.props.components;
        const selectedComponent = components.find(x => x.id === parseInt(id));
        
        this.setState({
            component: selectedComponent,
            display: 'displayone'
        }, () => {
            console.log(this.state.component);
        })
    }
    
    
    render = () => {
    //take user-components as props
    const { components, currentuser } = this.props;
    return (
        <React.Fragment>
            {this.state.display === "all-components" ? (
                <div className="user-profile">
                    <div className="card-columns">
                        {components.map((component, index) => {
                            console.log(component.user_id);
                            return (
                                //change this to current user after login set up
                                component.user_id == 1 ? (
                                    <Card
                                        component={component}
                                        index={index}
                                        display="user"
                                        changecomponent={
                                            this.changeComponentToDisplay
                                        }
                                    />
                                ) : null
                            );
                        })}
                    </div>
                </div>
                )
                :   (
                <div className="user-profile">
                <DisplayOneComponent component={this.state.component}
                />
                <Tags />
                </div>
            )}
        </React.Fragment>
    )}
};


export default UserProfile;