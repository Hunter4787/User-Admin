import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            {/* footer */}
            <footer id="footer">
                <div id="footer-widgets" className="container style-1">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="widget widget_text">
                                <h2 className="widget-title"><span>À propos</span></h2>
                                <div className="textwidget">
                                    <Link to="/" data-scroll ><img src="images/logo.png"style={{ width: '10%' }} alt="image" /><span style={{ fontWeight: 'bold',fontSize:'20px' }}> SANعA </span></Link>
                                    <p><span style={{ fontWeight: 'bold', }}> SANعA </span>,est le plateforme n°1 en Tunisie des métiers manuels entre particuliers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget_links">
                                <h2 className="widget-title"><span>Sanعa</span></h2>
                                <ul className="wprt-links clearfix col2">
                                    <li><Link to="/" data-scroll >Acceuil</Link></li>
                                    <li><Link to="/a-propos" data-scroll >À propos</Link></li>
                                    <li><Link to="/inscription" data-scroll >Inscription</Link></li>
                                    <li><Link to="/connexion" data-scroll >Se connecter</Link></li>
                                    <li><Link to="/contact" data-scroll >Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget_information">
                                <h2 className="widget-title"><span>Rejoignez-nous sur</span></h2>
                                <ul>
                                    <li className="address clearfix">
                                    <span style={{ fontWeight: 'bold' }} >Adresse:<span style={{ marginLeft: '5px', fontWeight: 'normal' }}>15 Rue la republique Tunis,Tunisie.</span></span>
                                    </li>
                                    <li className="phone clearfix">
                                            <span style={{ fontWeight: 'bold' }} >Téléphone:<span style={{ marginLeft: '5px', fontWeight: 'normal' }}>+216 00 000 000</span></span>
                                    </li>
                                    <li className="email clearfix">
                                        <span className="hl">E-mail:</span>
                                        <span className="text">SANعA@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget_socials">
                                <div className="socials">
                                    <a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-youtube" aria-hidden="true" /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom" className="clearfix style-1">
                    <div className="container">
                        <div id="bottom-bar-inner" className="wprt-container">
                            <div className="bottom-bar-inner-wrap">
                                <div className="bottom-bar-content">
                                    <div id="copyright">SANعA © 2019. Tous droits réservés.</div>
                                    {/* /#copyright */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* end footer */}
            <a href="#home" data-scroll className="dmtop global-radius"><i className="fa fa-angle-up" /></a>


        </div>);
    }
}

export default Footer;