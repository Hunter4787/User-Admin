import React, { Component } from "react";
import { Link } from 'react-router-dom'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="S_in" className="container">
        <div className="row">
          <article className="col-xs-12 maincontent">
            <header className="page-header">
              <h1 className="page-title">Se connecter</h1>
            </header>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="thin text-center">
                    Se connecter à mon compte
                  </h3>
                  <p className="text-center text-muted">
                    Si vous n'avez pas encore du compte,
                    <Link to="/inscription" data-scroll >
                      <span style={{ fontWeight: 'bold' }}> inscrivez-vous </span>
                    </Link>
                    sur notre platforme et accedez à tous nos services.
                  </p>
                  <hr />
                  <form>
                    <div className="top-margin">
                      <label>
                        Pseudo/Adresse-Email <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="top-margin">
                      <label>
                        Mot de passe <span className="text-danger">*</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-6">
                        <b>
                          <a href>Mot de passe oubliée?</a>
                        </b>
                      </div>
                      <div className="col-lg-4 text-right">
                        <Link to='/user'> <button className="btn btn-action" type="submit">
                          Se connecter
                        </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default SignIn;
