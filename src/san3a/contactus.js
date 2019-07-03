import React, { Component } from 'react';
class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
           <div id="contact" className="section wb">
  <div className="container">
    <div className="section-title row text-center">
      <div className="col-md-8 col-md-offset-2">
        <h3>Contact Us</h3>
        <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
      </div>
      {/* end col */}
    </div>
    {/* end title */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="contant-info">
          <ul className="item-display-block">
            <li>
              <div className="info-shape accent-color background fs-23">
                <div className="icon"><i className="fa fa-home" /></div>
              </div>
              <div className="info-content">
                <h6 className="uppercase"> Address:</h6>
                <p> 1010 Berkler avenue, Brooklyn New York City, NY 10018 US</p>
              </div>
            </li>
            <li>
              <div className="info-shape accent-color background fs-23">
                <div className="icon"><i className="fa fa-volume-control-phone" /></div>
              </div>
              <div className="info-content">
                <h6 className="uppercase"> Phone No:</h6>
                <p> +212 386 5575<br />+212 386 5575</p>
              </div>
            </li>
            <li>
              <div className="info-shape accent-color background fs-23">
                <div className="icon"><i className="fa fa-envelope-o" /></div>
              </div>
              <div className="info-content">
                <h6 className="uppercase"> Email Address:</h6>
                <p>Demo@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-8">
        <div className="contact_form">
          <div id="message" />
          <form id="contactform" className="row" action="contact.php" name="contactform" method="post">
            <fieldset className="row-fluid">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input type="text" name="first_name" id="first_name" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Last Name" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Website" />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label className="sr-only">Select Department</label>
                <select name="select_service" id="select_service" className="selectpicker form-control" data-style="btn-white">
                  <option value={12}>Select Service</option>
                  <option value="Building Service">Building Service</option>
                  <option value="Tover Design">Tover Design</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <textarea className="form-control" name="comments" id="comments" rows={6} placeholder="Give us more details.." defaultValue={""} />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <button type="submit" value="SEND" id="submit" className="btn btn-light btn-radius btn-brd grd1 btn-block">Get a Quote</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      {/* end col */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</div>
{/* end section */}

        </div> );
    }
}
 
export default Contactus;