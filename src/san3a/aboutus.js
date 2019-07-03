import React, { Component } from 'react';
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<div>
      <div id="about" className="section wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="message-box">
                <h2>À Propos</h2>
                <h5><span style={{ fontWeight: 'bold' }}>SANعA</span>, est le plateforme n°1 en Tunisie des métiers manuels entre particuliers.</h5>
              </div>
              {/* end messagebox */}
            </div>
            {/* end col */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="message-box">
                <p className="lead">Vous êtes à la recherche d’offres d’emploi pour compléter vos revenus ?
                <br/>Vous avez besoin d’aide pour de petits travaux de bricolage ? Inscrivez-vous sur <span style={{ fontWeight: 'bold' }}>SANعA</span>,
                 le plateforme collaborative pionnière du métiers manuels en Tunisie! 
                 <br/>Sur notre site, vous pouvez publier une annonce de particulier et consulter les cv de nos bricoleurs depuis leurs profils pour vous assurer des prestations de qualité, en toute confiance.
                 <br/>Alors, prenez contact avec l’un d’entre eux pour vous faciliter la vie ! </p>
                <a className="read-more" style={{ color: 'white' }}>Prenez ideés sur quelques métiers manuels</a>
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
                    <a href="uploads/plombier.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                    <img src="uploads/plombier.jpg" alt className="img-responsive img-rounded" />
                  </div>
                  <h3>Plombier</h3>
                  <p>Le plombier est un spécialiste de l’installation sanitaire et/ou thermique. Il exerce aussi bien lors de constructions que lors de réhabilitations en réglant les problèmes que l’on rencontre tous les jours.</p>
                </div>
                {/* end service */}
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="service-widget">
                  <div className="post-media wow fadeIn">
                    <a href="uploads/electricien.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                    <img src="uploads/electricien.jpg" alt className="img-responsive img-rounded" />
                  </div>
                  <h3>Electricien</h3>
                  <p>L’électricien est le spécialiste des installations électriques. Il exerce l’installation des prises électriques,les tableaux avec fusibles,les disjoncteurs dans les armoires et bien plus encore. </p>
                </div>
                {/* end service */}
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="service-widget">
                  <div className="post-media wow fadeIn">
                    <a href="uploads/macon.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                    <img src="uploads/macon.jpg" alt className="img-responsive img-rounded" />
                  </div>
                  <h3>Maçon</h3>
                  <p>Premier sur le chantier, le maçon s’occupe de la construction initiale des bâtiments, maisons, immeubles, etc. Pour cela, il est en charge des fondations, des murs et bien plus encore.</p>
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

    </div>);
  }
}

export default AboutUs;
