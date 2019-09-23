import React, { Component } from "react";
import "./Seccion1.css";
import { Fade } from "react-slideshow-image";
import M from "materialize-css";

const fadeImages = ["img/img1.jpg", "img/fondo.png", "img/slide_3.png"];

class CustomSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const {  id, imagen, textoppal, textosec, url_ver_mas, url_sec_boton, titulo, alineacion, ...props } = this.props;
    
    return (
      <div  {...props}>
        <div  id="div-seccion1" className= "each-fade col s3 m6 l12" >
          <div className="image-container col s3 l3 offset-l2 offset-s1">
            <img className="panel" src={'http://emmafig.com/api1/public/images/sliders/' + imagen} />
            <img className="panelFondo" src={ "img/blanco-nada"+alineacion+".png"} />
            <div id ="contenidoSlider "className={"info" + alineacion}>            
                <div className="inner">
               
                  <div className="divTexto"><h3 className="textTitulo"><b>{titulo}</b><br /><br /></h3>
                    <h4>
                    <div className="content" dangerouslySetInnerHTML={{__html: textoppal}}></div>
                    
                    </h4>
                    <div id="PosicionButton">
                      <a className="waves-effect waves-light btn-small buttonSmall " href="#">Conoce más</a>
                      <a className="waves-effect waves-light btn-small buttonSmall" href="#">Calcula tu riesgo</a>
                      <div>
                      <br /><br/><br/><br/><br/>
                      </div>
                    </div>
                  </div>
                </div>            
            </div>
          </div>
        </div>
    

      </div>
    );
  }
}

const fadeProperties = {
  duration: 4000,
  transitionDuration: 600,
  infinite: true,
  indicators: false,
  arrows: true
};

class Seccion1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: []
    };
  }

  componentDidMount() {
    fetch("https://emmafig.com/api1/getSliders")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            sliders: result
          });
        },

        (error) => {
          alert('Error');
        }
      )
  }

  render() {
    
    const listItems = this.state.sliders.map((d) => <CustomSlide key={d.id_slider} id={d.id_slider} imagen={d.imagen} textoppal={d.texto_principal} textosec={d.texto_secundario} url_ver_mas={d.url_ver_mas} url_sec_boton={d.url_segundo_boton} titulo={d.nombre} alineacion={d.alineacion}></CustomSlide>);

    return (
      <section className="page-section layoutSeccion1" id="seccion1">
        <div className="containerSection1">
          <div className="col-lg-12 ">
            <Fade {...fadeProperties}>
              {listItems}
            </Fade>
          </div>
        </div>
      </section>
    );
  }
}

export default Seccion1; // Don’t forget to use export default!