import React, { Component } from 'react';
import { Redirect, Route} from 'react-router-dom';
import ChefHome from 'website\src\Chef\ChefHome\chefHome.js';

// Routing to Chef page
class ChefRoutes extends Component{
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <Route exact path={this.props.match.path} render={()=>{return <Redirect to="/chef/home" />;}} />
                <Route exact path={`${this.props.match.path}/home`} component={ChefHome} />
            </div>
        );
    }
}
export default ChefRoutes;