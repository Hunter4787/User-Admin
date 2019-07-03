import React, { Component } from 'react';

class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div id="cont_us">
           <div id="contact" className="section wb">
  <div className="container">
    <div className="section-title row text-center">
      <div className="col-md-8 col-md-offset-2">
        <h3>Contact</h3>
        <p className="lead">Contactez-nous, si vous avez des questions ou des réclamations.</p>
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
                <h6 className="uppercase"> Adresse:</h6>
                <p> 15 Rue la republique Tunis,Tunisie.</p>
              </div>
            </li>
            <li>
              <div className="info-shape accent-color background fs-23">
                <div className="icon"><i className="fa fa-volume-control-phone" /></div>
              </div>
              <div className="info-content">
                <h6 className="uppercase"> Téléphone:</h6>
                <p> +216 00 000 000<br /></p>
              </div>
            </li>
            <li>
              <div className="info-shape accent-color background fs-23">
                <div className="icon"><i className="fa fa-envelope-o" /></div>
              </div>
              <div className="info-content">
                <h6 className="uppercase">  Adresse-Email:</h6>
                <p>SANعA@gmail.com</p>
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
                <input type="text" name="first_name" id="first_name" className="form-control" placeholder="Prénom" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Nom" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input type="email" name="email" id="email" className="form-control" placeholder="Votre E-mail" />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <select name="select_service" id="select_service" className="selectpicker form-control" data-style="btn-white" >
                <option value={12}>Sélectionnez le sujet correspondant à votre message</option>
                  <option value="Une réclamation">Une réclamation</option>
                  <option value="Un problème technique">Un problème technique</option>
                  <option value="L’utilisation du site">L’utilisation du site</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <textarea className="form-control" name="comments" id="comments" rows={6} placeholder="Saississez votre message.." defaultValue={""} />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <button type="submit" value="SEND" id="submit" className="btn btn-light btn-radius btn-brd grd1 btn-block">Envoyez</button>
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
