import React, { Component } from 'react';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <div id="services" className="parallax section db parallax-off no-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                            <div className="message-box">
                                <h2>Services</h2>
                                <h5>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</h5>
                            </div>
                            {/* end messagebox */}
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="service-inform">
                                        <div className="icon-service">
                                            <img src="images/icon1.png" alt="#" />
                                        </div>
                                        <div className="service-inform-text">
                                            <h3>Service One</h3>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="service-inform">
                                        <div className="icon-service">
                                            <img src="images/icon4.png" alt="#" />
                                        </div>
                                        <div className="service-inform-text">
                                            <h3>Service Two</h3>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 serv" style={{ backgroundColor: '#222' }}>
                            <div className="serv-blog">
                                <img src="images/sr1.png" alt="#" />
                            </div>
                            <div className="serv-blog-cont">
                                <h3>Manufacturing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 serv" style={{ background: '#181818' }}>
                            <div className="serv-blog">
                                <img src="images/sr2.png" alt="#" />
                            </div>
                            <div className="serv-blog-cont">
                                <h3>Fabrication</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 serv" style={{ background: '#222' }}>
                            <div className="serv-blog">
                                <img src="images/sr3.png" alt="#" />
                            </div>
                            <div className="serv-blog-cont">
                                <h3>Construction</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end section */}


        </div>);
    }
}

export default Services;



