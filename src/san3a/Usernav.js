import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class UserNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <header className="header header_style_01">
                <nav className="megamenu navbar navbar-default affix-top" data-spy="affix">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image" /><span>San3a</span></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><Link to='/'>Acceuil</Link></li>
                                <li><Link to='/inscription'>Tableau de bord</Link></li>
                                <li><a data-scroll href="#contact">Contactez nous</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div id="home" className="parallax first-section" data-stellar-background-ratio="0.4" style={{ backgroundImage: 'url("uploads/building/slide-img1.png")' }}>
            </div>
        </div>);
    }
}

export default UserNav;
