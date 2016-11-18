import React from 'react';
import InboxPane from './InboxPane';
import StorePane from './StorePane';
import autoBind from 'react-autobind';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      "nombre": "Damián"
    };
  }

  loadSampleData() {
    // this.setState(samples);
  }

  // Handle when user navigates to a conversation directly without first loading the index...
  componentWillMount() {
    // if('human' in this.props.params){
    //   this.loadSampleData();
    // }
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-invers menu-wrap">
          <div className="navbar-header text-center">
            <a className="navbar-brand logo-right" href="javascript:void(0)"><i className="fa fa-barcode"></i><b>Tecno</b>red</a>
          </div>
          <ul className="nav navbar-nav main-navigation">
            <li className="active"><a href="#home">Principal</a></li>
            <li><a href="#features">Aplicaciones</a></li>
          </ul>
          <button className="close-button" id="close-button">Close Menu</button>
        </div>

  	<div className="content-wrap">
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

    <section id="features" className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="100ms">Aplicaciones</h1>
          <h2 className="section-subtitle wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="400ms">“Create with the heart, build with the mind.” </h2>
        </div>
        <div className="row">

          <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div className="features">
              <div className="icon">
                <i className="mdi-av-equalizer"></i>
              </div>
              <div className="features-text">
                <h4>SLA Asegurados</h4>
                <p>
                  Estad&iacute;sticas mensuales de los plazos de combinaci&oacute;n y entrega de inspecciones por aseguradora.
                </p>
              </div>
             </div>
          </div>


          <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="450ms">
            <div className="features">
              <div className="icon">
                <i className="mdi-action-assignment"></i>
              </div>
              <div className="features-text">
                <h4>Resumen Ejecutivo Mensual</h4>
                <p>
                    Tabla comparativa mensual entre aseguradoras de los plazos y porcentajes de realizaci&oacute;n.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="550ms">
            <div className="features">
              <div className="icon">
                <i className="mdi-file-file-upload"></i>
              </div>
              <div className="features-text">
                <h4>Liquidaci&oacute;n Siniestros</h4>
                <p>
                  Utilitario para facturaci&oacute;n de siniestros. Convierte un archivo .xls en un .txt formateado para importar al Gecom.
                </p>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="650ms">
            <div className="features">
              <div className="icon">
                <i className="mdi-communication-business"></i>
              </div>
              <div className="features-text">
                <h4>Semestral Aseguradoras</h4>
                <p>
                  Resumen semestral de vol&uacute;menes de inspecciones realizadas, agrupados por aseguradora.
                </p>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="750ms">
            <div className="features">
              <div className="icon">
                <i className="mdi-action-assignment-ind"></i>
              </div>
              <div className="features-text">
                <h4>Semestral Inspectores</h4>
                <p>
                    Resumen semestral de vol&uacute;menes de inspecciones realizadas, agrupados por inspector.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="850ms">
            <div className="features">
              <div className="icon">
                <i className="mdi-maps-directions-car"></i>
              </div>
              <div className="features-text">
                <h4>Semestral Centros</h4>
                <p>
                    Resumen semestral de vol&uacute;menes de inspecciones realizadas, agrupados por centro de inspecci&oacute;n.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h3>Enlaces</h3>
              <ul>
                <li><a href="http://www.tecno-red.com.ar/">Sitio Institucional</a>
                </li>
                <li><a href="http://inspecciones.tecno-red.com.ar">Agenda</a>
                </li>
                <li><a href="http://www.barbara.com.ar/">Barbara</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h3>Seguinos</h3>
              <a className="social disabled"><i className="fa fa-facebook"></i></a>
              <a className="social disabled"><i className="fa fa-twitter"></i></a>
              <a className="social disabled"><i className="fa fa-google-plus"></i></a>
                <a className="social" href="https://www.linkedin.com/company/tecnored"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <a href="#home" className="btn btn-material-blue back-to-top">
      <i className="mdi-hardware-keyboard-arrow-up"></i>
      </a>
    </section>

    <section id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="copyright-text">
                <strong>Copyright &copy; <span id="anio"></span> <a href="http://www.tecno-red.com.ar" className="btn-flat btn-material-blue">Tecnored</a>.</strong> Derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
    )
  }
};

export default App;
