import React, { Component } from "react";
import "./Faq.css";
import M from "materialize-css";

import Respuesta from "../../components/faq/respuesta/Respuesta";
import Peticion from "../../components/faq/peticion/Peticion";
import Pregunta from "../../components/faq/pregunta/Pregunta";
import Accordion from "../../components/faq/accordion/Accordion";
import { create } from "istanbul-reports";
import RespuestaPadre from "./respuesta/RespuestaPadre";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: process.env.PUBLIC_URL + "/img/avatar-faq.png",
      pregunta_mayor: "",
      edad_mayor: 0,
      genero_mayor: "",
      pagina: "pregunta"
    };
  }

  actualizarPagina(texto) {
    this.setState({
      pagina: texto
    });
  }

  actualizarPregunta(pregunta, edad, genero, pagina) {
    this.setState({
      pregunta_mayor: pregunta,
      pagina: pagina,
      genero_mayor: genero,
      edad_mayor: edad
    });
  }

  render() {
    let pagina;

    if (this.state.pagina == "pregunta") {
      pagina = (
        <Pregunta
          {...this.state}
          actualizarPregunta={this.actualizarPregunta.bind(this)}
        />
      );
    } else {
      pagina = (
        <RespuestaPadre
          actualizarPagina={this.actualizarPagina.bind(this)}
          edad_enviar={this.state.edad_mayor}
          genero_enviar={this.state.genero_mayor}
          pregunta_enviar={this.state.pregunta_mayor}
        />
      );
    }

    return <div style={{textAlign: 'center'}}>{pagina}</div>;
  }
}

export default Faq; // Don’t forget to use export default!
