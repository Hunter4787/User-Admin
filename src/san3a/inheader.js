import React, { Component } from 'react';
class InHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <div id="home" className="parallax first-section" data-stellar-background-ratio="0.4" style={{ backgroundImage: 'url("uploads/building/slide-img1.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-md-offset-2 text-center">
                            <div className="big-tagline">
                                <img className="border-line-img" src="uploads/building/sep-line-white.png" alt />
                                <h2><span className="yellow">Construction</span></h2>
                                <img style={{ marginBottom: 40 }} className="border-line-img" src="uploads/building/sep-line-white.png" alt />
                                <p className="lead">With Landigoo responsive landing page template, you can showcase your awesome building &amp; construction services!</p>
                                <a data-scroll href="#services" className="btn btn-light btn-radius btn-brd">View all Services</a>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </div>
            {/*  end section  */}
        </div>);
    }
}

export default InHeader;

