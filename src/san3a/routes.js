import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SignIn from './signin';
import SignUp from './signup';
import Home from './home';
import Aboutus from './aboutus';
import Footer from './footer';
import Header from './header';
import User from './Useraccount';
import Contactus from './contactus';
import Space from './space';



class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/a-propos" render={() => <div><Space/><Header/><Aboutus style={{margin:"100px"}}/><Footer /></div>}></Route>
            <Route exact path="/connexion" render={() => <div><Header/><SignIn /><Footer /></div>}></Route>
            <Route exact path="/inscription" render={() => <div><Header/><SignUp  /><Footer /></div>}></Route>
            <Route exact path="/contact" render={() => <div><Space/><Header/><Contactus /><Footer /></div>}></Route>
            <Route exact path="/utilisateur" component={User}></Route>
        </div>);
    }
}

export default Routes;