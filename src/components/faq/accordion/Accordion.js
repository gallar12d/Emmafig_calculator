import React, { Component } from "react";
import PropTypes from "prop-types";
import M from "materialize-css";
import axios from "axios";
import "./Accordion.css";

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preguntas: []
    };
  }

  componentDidMount() {
    fetch("http://emmafig.com/api1/getFaq")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            preguntas: result
          });
        },

        error => {}
      );

    //inicializar los collapsibles
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }

  render() {
    let cadena = this.state.preguntas.map(banco => (
      <li key={banco.id_banco_pregunta}>
        <div className="collapsible-header" id={banco.id_banco_pregunta}>
          {banco.pregunta}
        </div>
        <div className="collapsible-body">
          <span>{banco.respuesta}</span>
        </div>
      </li>
    ));
    return (
      <div>
        <div className="row">
          <div className="col s12 m12 l12">
            <h5 id="tituloAcordeon">Mas preguntas y respuestas frecuentes</h5>
            <div className="col s12 m6 l6 offset-l3">
              <ul className="collapsible">{cadena}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
