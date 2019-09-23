import React, { Component } from "react";
import "./Respuesta.css";

class Pregunta extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    let cadena;
    if (this.props.respuestas.length) {
      cadena = this.props.respuestas.map(respuesta => (
        <div id={respuesta.id_banco_pregunta}>
          <li className="cadena"> {respuesta.respuesta}</li>
        </div>
      ));
    }

    return (
      <div>
        <div className="row">
          <div className="col s12 m12 l12 center-align">
            <h4 className="titulo">Preguntas Y Respuestas Frecuentes</h4>
            <br />
            <div className="col  m6 offset-m3 left-align">
              <h5 className="PreguntaQSR">{this.props.pregunta}</h5>
            </div>
            <div className="col  m6 offset-m3 left-align" align="justify">
              <ul>{cadena}</ul>
            </div>
            <br />
            <br />
          </div>

          <div className="col 2 " />
        </div>
      </div>
    );
  }
}

export default Pregunta; // Don’t forget to use export default!
