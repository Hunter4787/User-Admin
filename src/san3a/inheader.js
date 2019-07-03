import React, { Component } from 'react';
import Searchbar from './searchbar'
class InHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <div id="home" className="parallax first-section" data-stellar-background-ratio="0.4" style={{ backgroundImage: 'url("uploads/building/slide-img1.png")' }}>
                <div className="container">
                    <div>
                        <div>
                            <h1 className="high_title" lang="ar"><span lang="fr"> SANعA.tn </span> كون مطمان وادخل</h1>
                            <h1 className="high_title" lang="ar"> تلقى صنايعي فنان و ماتخرج كان وإنت زاهي و فرحان </h1>
                        </div>

                    </div>

                    <Searchbar />
                </div>
            </div>

        </div>);
    }
}

export default InHeader;


