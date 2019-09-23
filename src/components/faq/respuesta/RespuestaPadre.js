import React, { Component } from "react";
import "./Respuesta.css";
import "./Respuesta.css";
import M from "materialize-css";
import Accordion from "../accordion/Accordion";
import Respuesta from "../respuesta/Respuesta";

import Peticion from "../peticion/Peticion";
import axios from "axios";

class RespuestaPadre extends Component {
  state = { form: {} };
  constructor(props) {
    super(props);

    this.state = {
      respuestas: [],
      resputesta_existe: false
    };

    console.log(this.state);
  }

  componentDidMount() {
    const dataForm = new FormData();
    dataForm.append("pregunta", this.props.pregunta_enviar);
    dataForm.append("genero", this.props.genero_enviar);
    dataForm.append("edad", this.props.edad_enviar);

    axios
      .post("http://emmafig.com/api1/consultarPregunta", dataForm)
      .then(res => {
        let result = res.data;
        if (result.length) {
          this.setState({
            respuestas: result,
            resputesta_existe: true
          });
        } else {
          this.setState({
            resputesta_existe: false
          });
        }
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  render() {
    // si hay respuesta renderizo respuesta
    // de lo contrario renderizo peticion
    let renderizar;
    if (this.state.resputesta_existe) {
      renderizar = (
        <Respuesta
          pregunta={this.props.pregunta_enviar}
          respuestas={this.state.respuestas}
        />
      );
    } else {
      renderizar = (
        <Peticion
          pregunta={this.props.pregunta_enviar}
          genero={this.props.genero_enviar}
          edad={this.props.edad_enviar}
        />
      );
    }

    return (
      <div>
        {renderizar}
        <Accordion />
        <div id="botonAtras">
          <button
            type="button"
            onClick={() => this.props.actualizarPagina("pregunta")}
            className="btn btn-primary"
            id="button"
          >
            Atras
          </button>
        </div>
        <br />
      </div>
    );
  }
}

export default RespuestaPadre; // Don’t forget to use export default!
