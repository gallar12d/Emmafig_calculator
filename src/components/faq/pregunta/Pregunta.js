import React, { Component } from "react";
import "./Pregunta.css";
import M from "materialize-css";

class Pregunta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pregunta: "",
      edad: this.state,
      genero: "",
      logo: process.env.PUBLIC_URL + "/img/avatar-faq.png"
    };
  }

  componentDidMount() {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    this.props.actualizarPregunta(
      this.state.pregunta,
      this.state.edad,
      this.state.genero,
      "respuesta"
    );
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  validar() {
    let formu = document.querySelectorAll("#form_q");
    if (formu[0].checkValidity()) {
      this.handleClick(this);
    } else {
      formu[0].reportValidity();
    }
  }

  render() {
    return (
      <div className="row" id="Row">
        <div className="col s12 m12 l12">
          <h4 className="titulo">Preguntas Y Respuestas Frecuentes</h4>
          <p className="parrafoTitulo">
            Resuelve tus dudas sobre tu estado de salud y familiarizate con
            nuestros servicios
          </p>
          <br />
          <br />
          <br />
        </div>

        <div className="col s12  m12 l6 ">
          <img src={this.state.logo} />
        </div>

        <div className="col s12 m12 l4 ">
          <form id="form_q" onChange={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="col s1">
                <i id="Icono" className="material-icons">
                  help{" "}
                </i>
              </div>
              <div className="col s10">
                <input
                  onChange={this.onChange.bind(this)}
                  type="text"
                  size="5"
                  required
                  placeholder="Digita Tu Pregunta?"
                  name="pregunta"
                  value={this.state.pregunta}
                />
              </div>
            </div>
            <div className="row">
              <div className="col s1">
                <i id="Icono" className="material-icons">
                  people
                </i>
              </div>
              <div className="col s10">
                <select
                  required
                  value={this.state.genero}
                  onChange={this.onChange.bind(this)}
                  name="genero"
                >
                  <option value="" disabled>
                    {" "}
                    Selecciona tu Género{" "}
                  </option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col s1">
                <i id="Icono" className="material-icons">
                  person
                </i>
              </div>
              <div className="col s10">
                <input
                  required
                  onChange={this.onChange.bind(this)}
                  type="number"
                  name="edad"
                  min="1"
                  max="99"
                  placeholder="Ingresa Tu Edad"
                  size="100"
                  value={this.state.edad}
                />
              </div>
              <div className="divButton">
                <button
                  type="button"
                  onClick={this.validar.bind(this)}
                  //onPress={() => this.props.navigation.navigate('/Respuesta')}
                  className="btn btn-primary"
                  id="button"
                >
                  Consultar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Pregunta; // Don’t forget to use export default!
