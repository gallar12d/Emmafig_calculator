import React, { Component } from 'react';
import './Inscripcion.css'

class Inscripcion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn_ok: process.env.PUBLIC_URL + "/img/ok-btn.svg",
            img_emma: process.env.PUBLIC_URL + "/img/emma-ok.svg"
        };

        this.okHandleMouseOver = this.okHandleMouseOver.bind(this);
        this.okHandleMouseOut = this.okHandleMouseOut.bind(this);

    }

    okHandleMouseOver() {
        this.setState({
            btn_ok: process.env.PUBLIC_URL + "/img/ok-hover-btn.svg"
        });
    }

    okHandleMouseOut() {
        this.setState({
            btn_ok: process.env.PUBLIC_URL + "/img/ok-btn.svg"
        });
    }

    render() {

        return (
            <div id="contenedor-inscripcion">
                <div></div>
                <div id="contenedor-emma">
                    <img id="img-emma" src={this.state.img_emma} />
                </div>
                <div id="contenedor-titulo-ins" className="">
                    <span id="titulo-ins">Se ha realizado exitosamente tu inscripción</span>
                </div>
                <div id="contenedor-ok">
                    <img id="btn_ok" onMouseOver={this.okHandleMouseOver} onMouseOut={this.okHandleMouseOut} src={this.state.btn_ok} onClick={this.props.changeComponente} className="center" />
                </div>
                <div></div>
            </div>

        );

    }
}

export default Inscripcion; // Don’t forget to use export default!