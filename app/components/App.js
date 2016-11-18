import React from 'react';
import autoBind from 'react-autobind';
import Header from './Header'
import FeaturesList from './FeaturesList'

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {

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
        </div>
  	    <div className="content-wrap">
          <Header />

          <FeaturesList />

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
