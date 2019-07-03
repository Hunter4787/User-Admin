import React, { Component } from "react";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='sidenav-container'>
        <div className="sidebar-fixed position-fixed">
          <a className="logo-wrapper waves-effect">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-email.png"
              className="img-fluid"
              alt
            />
          </a>
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item active waves-effect">
              <i className="fas fa-chart-pie mr-3" />
              Dashboard
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action waves-effect"
            >
              <i className="fas fa-user mr-3" />
              Mon compte
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action waves-effect"
            >
              <i className="fas fa-table mr-3" />
              Tables
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action waves-effect"
            >
              <i className="fas fa-map mr-3" />
              Maps
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action waves-effect"
            >
              <i className="fas fa-money-bill-alt mr-3" />
              Orders
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
