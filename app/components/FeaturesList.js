import React from 'react';
import autoBind from 'react-autobind';

class FeaturesList extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state =
      {
        features: [
          {
            title: "SLA Asegurados",
            desc: "Estadísticas mensuales de los plazos de combinación y entrega de inspecciones por aseguradora.",
            icon: "mdi-av-equalizer"
          },
          {
            title: "Resumen Ejecutivo Mensual",
            desc: "Tabla comparativa mensual entre aseguradoras de los plazos y porcentajes de realización.",
            icon: "mdi-action-assignment"
          },
          {
            title: "Liquidación Siniestros",
            desc: "Utilitario para facturación de siniestros. Convierte un archivo .xls en un .txt formateado para importar al Gecom.",
            icon: "mdi-file-file-upload"
          },
          {
            title: "Semestral Aseguradoras",
            desc: "Resumen semestral de volúmenes de inspecciones realizadas, agrupados por aseguradora.",
            icon: "mdi-communication-business"
          },
          {
            title: "Semestral Inspectores",
            desc: "Resumen semestral de volúmenes de inspecciones realizadas, agrupados por inspector.",
            icon: "mdi-action-assignment-ind"
          },
          {
            title: "Semestral Centros",
            desc: "Resumen semestral de volúmenes de inspecciones realizadas, agrupados por centro de inspección.",
            icon: "mdi-maps-directions-car"
          }
        ],
        listTitle: "Aplicaciones",
        listSubtitle: "“Create with the heart, build with the mind.”"
      };
  }
  render() {
    return (
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="100ms">{this.state.listTitle}</h1>
            <h2 className="section-subtitle wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="400ms">{this.state.listSubtitle}</h2>
          </div>
          <div className="row">
          {
            this.state.features.map(function(feature, i) {
              return (
                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="850ms">
                  <div className="features">
                    <div className="icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="features-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
          </div>
        </div>
      </section>
    )
  }
};

export default FeaturesList;
