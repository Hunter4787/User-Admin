import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Admin from './admin'
import SignIn from './signin';
import SignUp from './signup';
import User from './Useraccount';
import Home from './home'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
        <Route exact path="/connexion" component={SignIn}></Route>
        <Route exact path="/inscription" component={SignUp}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/user" component={User}></Route>
        </div> );
    }
}
 
export default Routes;