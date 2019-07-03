import React, { Component } from 'react';

import UserNav from './Usernav'
import SideNav from './sidenav'
import UserMain from './usermain'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <UserNav />
            <div className='user-main'>
            <SideNav />
            <UserMain />
            </div>
            {/* <Footer /> */}
        </div> );
    }
}
 
export default User;