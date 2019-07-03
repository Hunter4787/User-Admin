import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            
            <header className="header header_style_01">
                <nav className="megamenu navbar navbar-default" data-spy="affix">
                    <div className="top-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-hidden">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-hidden">
                                        <div className="gem-contacts-item gem-contacts-phone">
                                            <a className="phone-icon" href="#" target="_blank" title="phone"><i className="fa fa-phone" aria-hidden="true" />+216 00-000-000</a>
                                        </div>
                                    </div>
                                    <div className="top-area-block top-area-socials socials-colored-hover">
                                        <div className="socials inline-inside">
                                            <a className="socials-item" href="#" target="_blank" title="facebook"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                            <a className="socials-item" href="#" target="_blank" title="twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            <a className="socials-item" href="#" target="_blank" title="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                            <a className="socials-item" href="#" target="_blank" title="youtube"><i className="fa fa-youtube" aria-hidden="true" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="index.html"><img id="logo" src="images/logo.png" alt="image" /><span>Sanعa</span></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/" data-scroll >Acceuil</Link></li>
                                <li><Link to="/a-propos" data-scroll >À propos</Link></li>
                                <li><Link to="/inscription" data-scroll >Inscription</Link></li>
                                <li><Link to="/connexion" data-scroll >Se connecter</Link></li>  
                                <li><Link to="/contact" data-scroll >Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </div>);
    }
}

export default Header;



