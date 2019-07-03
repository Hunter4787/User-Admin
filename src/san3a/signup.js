import React, { Component } from "react";
import { Link } from 'react-router-dom'
class SignUp extends Component {
  state = {
    nameError: "",
    prenomError: "",
    phoneError: "",
    mailError: "",
    passError: "",
    repassError: "",
    password: ""
  };

  ValidateName = e => {
    let nameregex = /^[a-zA-Z]{3,}$/;
    return !nameregex.test(e.target.value)
      ? this.setState({ nameError: "Nom invalide" })
      : this.setState({ nameError: "" });
  };
  ValidatePrenom = e => {
    let nameregex = /^[a-zA-Z]{3,}$/;
    return !nameregex.test(e.target.value)
      ? this.setState({ prenomError: "Prenom invalide" })
      : this.setState({ prenomError: "" });
  };
  ValidatePhone = e => {
    let phoneregex = /^[0-9]{8}$/;
    return !phoneregex.test(e.target.value)
      ? this.setState({ phoneError: "invalide telephone" })
      : this.setState({ phoneError: "" });
  };

  ValidatePass = e => {
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    if (!strongRegex.test(e.target.value))
      return this.setState({ passError: "mot de passe invalide" });
    else {
      this.setState({ passError: "" });
      this.setState({ password: e.target.value });
    }
  };
  ValidateRepass = e => {
    return !(this.state.password === e.target.value)
      ? this.setState({ repassError: "confirmation non identique" })
      : this.setState({ repassError: "" });
  };
  ValidateEmail = e => {
    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    return !regex.test(e.target.value)
      ? this.setState({ mailError: "Exemple:exemple@gmail.com" })
      : this.setState({ mailError: "" });
  };
  render() {
    return (
      <div id="S_up" className="container">
        <article className="col-xs-12 maincontent">
          <header className="page-header">
            <h1 className="page-title">S'inscrire</h1>
          </header>
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3 className="thin text-center">
                  Inscrivez-vous sur <span style={{ fontWeight: 'bold' }}>SANعA.tn</span>
                </h3>
                <p className="text-center text-muted">
                Si vous êtes déjà membre,<Link to="/connexion" data-scroll >
                      <span style={{ fontWeight: 'bold' }}> connectez-vous </span>
                    </Link> et lancez votre recherche de bricoleur ou du travail sur
                  notre platforme.
                </p>
                <hr />
                <form>
                  <div className="top-margin">
                    <label>Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.ValidatePrenom}
                    />
                  <span style={{ color: "red" }}>
                    {" "}
                    {this.state.prenomError}
                  </span>
                  </div>
                  <div className="top-margin">
                    <label>Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.ValidateName}
                    />
                  <span style={{ color: "red" }}>{this.state.nameError}</span>
                  </div>
                  <div className="top-margin">
                    <label>
                      Téléphone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      maxLength="8"
                      className="form-control"
                      onChange={this.ValidatePhone}
                    />
                  <span style={{ color: "red" }}>{this.state.phoneError}</span>
                  </div>
                  <div className="top-margin">
                    <label>
                      Adresse-Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.ValidateEmail}
                    />
                  <span style={{ color: "red" }}>{this.state.mailError}</span>
                  </div>
                  <div className="row top-margin">
                    <div className="col-sm-6">
                      <label>
                        Mot de passe <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={this.ValidatePass}
                      />
                      <span style={{ color: "red" }}>
                        {this.state.passError}
                      </span>
                    </div>
                    <div className="col-sm-6">
                      <label>
                        Confirmer le mot de passe{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="paswword"
                        className="form-control"
                        onChange={this.ValidateRepass}
                      />
                      <span style={{ color: "red" }}>
                        {this.state.repassError}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-8">
                      <label className="checkbox">
                        <input type="checkbox" />
                        J'ai lus les{" "}
                        <a href="page_terms.html">Termes et Conditions</a>
                      </label>
                    </div>
                    <div className="col-lg-4 text-right">
                      <button className="btn btn-action" type="submit">
                        S'inscrire
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default SignUp;
