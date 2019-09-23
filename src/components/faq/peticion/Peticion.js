import React, { Component } from "react";
import "./Peticion.css";
import axios from "axios";
import Men from "materialize-css";

class Peticion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      telefono: this.state,
      correo: "",
      logo: process.env.PUBLIC_URL + "/img/avatar-faq.png"
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  mostratToast(mensaje) {
    mensaje = "Se han guardado tus Datos";
    Men.toast({ html: mensaje });
  }

  handleClick = e => {
    const dataForm = new FormData();
    dataForm.append("pregunta", this.props.pregunta);
    dataForm.append("genero", this.props.genero);
    dataForm.append("edad", this.props.edad);
    dataForm.append("nombre", this.state.nombre);
    dataForm.append("telefono", this.state.telefono);
    dataForm.append("correo", this.state.correo);

    axios
      .post("http://emmafig.com/api1/registrarPregunta", dataForm)
      .then(res => {
        let result = res.data;
        this.mostratToast(result.mensaje);
      });
  };

  ///enviar oor axios que estan en el estado
  //en el .then ejecutar el toast

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
      <div className="row">
        <div className="col s12 m10 l12">
          <h4 className="titulo">Preguntas Y Respuestas Frecuentes</h4>
          <h5 className="parrafoTitulo">
            !Opp's no hemos encontrado una respuesta a tu pregunta!
          </h5>
          <p className="parrafo">
            Déjanos tus datos con gusto atenderemos a tu petición
          </p>
          <br />
          <br />
          <br />
          <div>
            <div className="row">
              <div className="col s3" />
              <div className="col s12 m5 l5   offset-m1">
                <form id="form_q" className="formulario">
                  <div className="row">
                    <div className="col s1">
                      <i id="Icono" className="material-icons">
                        help{" "}
                      </i>
                    </div>
                    <div className="col s10">
                      <input
                        required
                        onChange={this.onChange.bind(this)}
                        id="input"
                        type="text"
                        minlength="5" 

                        maxlength="40"
                        size="5"
                        placeholder="Ingresa Tu Nombre"
                        value={this.state.nombre}
                        name="nombre"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1">
                      <i id="Icono" class="material-icons">
                        call
                      </i>
                    </div>
                    <div className="col s10">
                      <input
                        required
                        onChange={this.onChange.bind(this)}
                        id="input"
                        type="number"
                        value={this.state.telefono}
                        name="telefono"
                        placeholder="Ingresa Tu Telefono"
                        size="100"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s1">
                      <i id="Icono" class="material-icons">
                        email
                      </i>
                    </div>
                    <div className="col s10">
                      <input
                        required
                        onChange={this.onChange.bind(this)}
                        id="input"
                        type="email"
                        name="correo"
                        placeholder="Ingresa Tu correo"
                        value={this.state.correo}
                        size="40"
                      />
                    </div>
                    <div className="btnConsultar">
                      <button
                        type="button"
                        onClick={this.validar.bind(this)}
                        //onPress={() => this.props.navigation.navigate('/Respuesta')}
                        className="btn btn-primary"
                        id="button"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col s3" />
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Peticion;
