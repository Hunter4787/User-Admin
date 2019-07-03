import React, { Component } from 'react';
class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <div id="about" className="section wb">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="message-box">
          <h2>About Us</h2>
          <h5>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</h5>
        </div>
        {/* end messagebox */}
      </div>
      {/* end col */}
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="message-box">
          <p className="lead">Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
          <a href="#" className="read-more">Read More</a>
        </div>
        {/* end messagebox */}
      </div>
      {/* end col */}
    </div>
    {/* end row */}
    <div className="row text-center about-row">
      <div className="col-md-4 col-sm-12 col-xs-12">
        <div className="row">
          <div className="service-widget">
            <div className="post-media wow fadeIn">
              <a href="uploads/building_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
              <img src="uploads/building_01.jpg" alt className="img-responsive img-rounded" />
            </div>
            <h3>Spacious and Large Garden</h3>
            <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
          </div>
          {/* end service */}
        </div>
      </div>
      <div className="col-md-4 col-sm-12 col-xs-12">
        <div className="row">
          <div className="service-widget">
            <div className="post-media wow fadeIn">
              <a href="uploads/building_02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
              <img src="uploads/building_02.jpg" alt className="img-responsive img-rounded" />
            </div>
            <h3>With its Own Pool</h3>
            <p>Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor. </p>
          </div>
          {/* end service */}
        </div>
      </div>
      <div className="col-md-4 col-sm-12 col-xs-12">
        <div className="row">
          <div className="service-widget">
            <div className="post-media wow fadeIn">
              <a href="uploads/building_03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
              <img src="uploads/building_03.jpg" alt className="img-responsive img-rounded" />
            </div>
            <h3>In Forests- Fresh Clean Air</h3>
            <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis.</p>
          </div>
          {/* end service */}
        </div>
      </div>
    </div>
    {/* end row */}
  </div>
  {/* end container */}
  <div className="sep1" />
</div>
{/* end section */}

        </div>  );
    }
}
 
export default AboutUs ;
