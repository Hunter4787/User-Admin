import React, { Component } from 'react';
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
                                <h2 className="widget-title"><span>ABOUT US</span></h2>
                                <div className="textwidget">
                                    <a className="navbar-brand" href="index-building.html"><img src="images/logo-icon.png" alt="image" /><span>Constructed</span></a>
                                    <p>Aenean suscipit eget mi act fermentum phasellus vulputate turpis tincidunt. Aenean suscipit eget. Aenean suscipit eget mi act fermentum phasellus vulputate turpis tincidunt. Aenean suscipit ege  Aenean suscipit eget mi act fermentum phasellus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget_links">
                                <h2 className="widget-title"><span>COMPANY LINKS</span></h2>
                                <ul className="wprt-links clearfix col2">
                                    <li><a data-scroll href="#home">Home</a></li>
                                    <li><a data-scroll href="#about">About Us</a></li>
                                    <li><a data-scroll href="#services">Services</a></li>
                                    <li><a data-scroll href="#projects">Our Work</a></li>
                                    <li><a data-scroll href="#testimonials">Testimonials</a></li>
                                    <li><a data-scroll href="#price">Price</a></li>
                                    <li><a data-scroll href="#contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget_information">
                                <h2 className="widget-title"><span>CONTACT INFO</span></h2>
                                <ul>
                                    <li className="address clearfix">
                                        <span className="hl">Address:</span>
                                        <span className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    </li>
                                    <li className="phone clearfix">
                                        <span className="hl">Phone:</span>
                                        <span className="text">+56 (0) 012 345 6789</span>
                                    </li>
                                    <li className="email clearfix">
                                        <span className="hl">E-mail:</span>
                                        <span className="text">business@support.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget_socials">
                                <div className="socials">
                                    <a target="_blank" href="#"><i className="fa fa-twitter" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-facebook" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-google-plus" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-pinterest" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-dribbble" /></a>
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
                                    <div id="copyright">All Rights Reserved. Company Name © 2018</div>
                                    {/* /#copyright */}
                                </div>
                                {/* /.bottom-bar-content */}
                                <div className="bottom-bar-menu pull-right">
                                    <ul className="bottom-nav">
                                        <li><a href="#/">HISTORY</a></li>
                                        <li><a href="#/">FAQ</a></li>
                                        <li><a href="#/">EVENTS</a></li>
                                    </ul>
                                </div>
                                {/* /.bottom-bar-menu */}
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