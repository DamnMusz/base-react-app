import React from 'react';
import autoBind from 'react-autobind';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      navbar_class: 'navbar navbar-inverse sticky-navigation navbar-fixed-top ' + this.props.nav_style
    }
  }
  render() {
    return (
      <div className={this.state.navbar_class} role="navigation" data-spy="affix" data-offset-top="200">
        <div className="container">
          <div className="navbar-header navbar-left my-navbar-header">
            <a className="logo-left " href={this.props.index_url}><i className="fa fa-barcode"></i><b>{this.props.brand_1}</b>{this.props.brand_2}</a>
          </div>
          <div className="navbar-header navbar-right">
            <a href={this.props.login_url} className="btn btn-lg btn-border">Iniciar Sesi&oacute;n</a>
          </div>
        </div>
      </div>
    )
  }
};

export default Navbar;
