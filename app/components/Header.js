import React from 'react';
import autoBind from 'react-autobind';

class Header extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    return (
      <header className="hero-area" id="home">
        <div className="container">
          <div className="col-md-12">
            <div className="navbar navbar-inverse sticky-navigation navbar-fixed-top" role="navigation" data-spy="affix" data-offset-top="200">
              <div className="container">
                <div className="navbar-header navbar-left my-navbar-header">
                  <a className="logo-left " href="index.html"><i className="fa fa-barcode"></i><b>Tecno</b>red</a>
                </div>
                <div className="navbar-header navbar-right">
                  <a href="/app.html" className="btn btn-lg btn-border">Iniciar Sesi&oacute;n</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contents text-right">
            <h1 className="wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">Sistema Administrativo <b>Tecnored</b></h1>
            <p className="wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="400ms">SOFTWARE DE ESTAD&Iacute;STICAS Y CONTROL</p>
            <a href="#features" className="btn btn-lg btn-material-blue">Ver Aplicaciones</a>
          </div>
       </div>
      </header>
    )
  }
};

export default Header;
