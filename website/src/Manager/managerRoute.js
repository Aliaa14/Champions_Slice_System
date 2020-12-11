import React, { Component } from 'react';
import { Redirect, Route} from 'react-router-dom';
import ManagerHome from 'website\src\Manager\ManagerHome\managerHome.js';

// Routing to Manager page
class Manager_Route extends Component{
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <Route exact path={this.props.match.path} render={()=>{return <Redirect to="/manager/home"/>;}} />
                <Route exact path={`${this.props.match.path}/home`} component={ManagerHome} />
            </div>
        );
    } 
}
export default Manager_Route;