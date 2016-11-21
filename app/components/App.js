import React from 'react';
import autoBind from 'react-autobind';
import Header from './headers/Header'
import FeaturesList from './FeaturesList'
import Footer from './footers/Footer'
import Copyright from './footers/Copyright'

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    $.material.init();
  }

  loadSampleData() {
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
          <Header nav_style='my-default-navbar' app_title='Sistema Administrativo' brand_1='Tecno' brand_2='red'/>
          <FeaturesList />
          <Footer />
          <Copyright url='http://www.tecno-red.com.ar' desc='Tecnored'/>
    </div>
    </div>
    )
  }
};

export default App;
