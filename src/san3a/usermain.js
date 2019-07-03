import React, { Component } from "react";

class UserMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          {/* Heading */}
          <div
            className="card mb-4 wow fadeIn"
            style={{ visibility: "visible", animationName: "fadeIn" }}
          >
            {/*Card content*/}
            <div className="card-body d-sm-flex justify-content-between">
              <h4 className="mb-2 mb-sm-0 pt-1">
                <a href="#">
                  Home Page
                </a>
                <span>/</span>
                <span>Dashboard</span>
              </h4>
              <form className="d-flex justify-content-center">
                {/* Default input */}
                <input
                  type="search"
                  placeholder="Type your query"
                  aria-label="Search"
                  className="form-control"
                />
                <button
                  className="btn btn-primary btn-sm my-0 p waves-effect waves-light"
                  type="submit"
                >
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
          </div>
          {/* Heading */}

          <div>
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 text-center">
              <h1>Bienvenue dans San3a.tn</h1>
              <div className="subtitle">
                Nous sommes ravis que vous nous ayez rejoint !
                <br />
                Commencez dès maintenant à vivre notre Expérience.
              </div>
            </div>
          </div>
          <div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 dahsboard-home__box-margin">
              <span className="title__box">Mes annonces</span>
              <div className="dahsboard-home__jobs__info__box">
                <p className="introduction">
                  Vous n'avez pas encore publié d'annonce. Et si vous profitiez
                  des compétences des jobbers?
                </p>
                <p className="introduction bold">
                  Le jobbing avec Frizbiz c'est :
                </p>
                <div className="row">
                  <div className="col-xs-12 item_jobs_info">
                    <div className="col-xs-3">
                      <i className="samicon samicon-profile-picture" />
                    </div>
                    <div className="col-xs-9">
                      <p className="strong">200 000 Jobbers</p>
                      <p>Particuliers bricoleurs ou professionnels vérifiés</p>
                    </div>
                  </div>
                  <div className="col-xs-12 item_jobs_info">
                    <div className="col-xs-3">
                      <i className="samicon samicon-alarm" />
                    </div>
                    <div className="col-xs-9">
                      <p className="strong">Reactivité</p>
                      <p>Une réponse en moins de 24 h</p>
                    </div>
                  </div>
                  <div className="col-xs-12 item_jobs_info">
                  </div>
                  <div className="col-xs-12 text-center item_jobs_publish">
                    <a href="/fr/categories">
                      <button className="b3-btn b3-btn-blue">
                        Publiez votre annonce
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-offset-1 col-lg-4 col-md-4 col-sm-12 col-xs-12 dahsboard-home__box-margin">
              <span className="title__box">Mes missions</span>
              <div className="dahsboard-home__bids__info__box text-center">
                <div className="row">
                  <a href="/fr/dashboard/profile/informations">
                    <div className="col-xs-12 item_bids_info">
                      <i className="samicon samicon-user-list-b" />
                      <i className="samicon samicon-chevron-right" />
                      <p>Renseigner votre présentation générale</p>
                    </div>
                  </a>
                  <a href="/fr/dashboard/book">
                    <div className="col-xs-12 item_bids_info">
                      <i className="samicon samicon-image-file" />
                      <i className="samicon samicon-chevron-right" />
                      <p>Ajouter des photos à votre book</p>
                    </div>
                  </a>
                  <a href="/fr/dashboard/skills/edit">
                    <div className="col-xs-12 item_bids_info">
                      <i className="samicon samicon-user-favorite-a" />
                      <i className="samicon samicon-chevron-right" />
                      <p>Sélectionner vos compétences</p>
                    </div>
                  </a>
                </div>
                <a href="/fr/dashboard/profile/pro">
                  <div className="col-xs-12 item_bids_pro_state">
                    <p>Vous êtes professionnel ?</p>
                    <p className="underline">Demandez votre statut PRO</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserMain;
