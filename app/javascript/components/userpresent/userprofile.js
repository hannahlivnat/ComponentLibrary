import React, { Component } from "react";

class UserProfile extends Component {
    state = {
        display: "all-components"
    }
    render = () => {
        //take user-components as props
        return <div className="user-profile">
        {/* if all-components, display all user components. If one-component, display the ComponentView page
        for specific component with edit and delete routes 
        - Reuse tags component
        - Reuse card component with added function that takes user to edit page instead of toggling code
        */}
        </div>;
    };
}

export default UserProfile;