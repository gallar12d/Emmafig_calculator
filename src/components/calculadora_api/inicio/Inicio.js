import React, { Component } from 'react';
import './Inicio.css'



class Inicio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img_avatar: process.env.PUBLIC_URL + "/img/avatar-section1.png",
            logo_emma: process.env.PUBLIC_URL + "/img/MarcadeAguaColor.png",
            begin: process.env.PUBLIC_URL + "/img/fwdbotnempezar/btn-empezar1-c-2.svg",
            style: {
                opacity: 0,
                transform: 'translate3d(100%,0,0)'
            },
            


        };

        this.beginHandleMouseOver = this.beginHandleMouseOver.bind(this);
        this.beginHandleMouseOut = this.beginHandleMouseOut.bind(this);
        this.mountStyle = this.mountStyle.bind(this);


    }
/*
FUNCION ATRAPAR LA FECHA EN LA QUE INICIA EL CUESTINIOARIO

getFechainicialTarea() {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    
    this.props.update_hi(formatted_date)
    this.setState({
        taskStart: formatted_date
    })

}
*/

    beginHandleMouseOver() {
        this.setState({
            begin: process.env.PUBLIC_URL + "/img/fwdbotnempezar/btn-empezar1-c-2-h.svg"
        });
    }

    beginHandleMouseOut() {
        this.setState({
            begin: process.env.PUBLIC_URL + "/img/fwdbotnempezar/btn-empezar1-c-2.svg"
        });
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 10) //call the into animiation
    }


    mountStyle() {
        this.setState({
            style: {
                opacity: 1,
                transitionProperty: 'translate3d(100%,0,0)',
                transitionDuration: '1s'
            }
        });
    }


    render() {

        return (

            <div style={this.state.style} id="contenedor-inicio">
                <div className="row">
                    <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3 encabezado">
                        <h1 id="titulo-cal" className="flow-text">Calcula tu riesgo</h1>
                        <h6 id="subtitulo-cal" className="center-align ">Responda todas las preguntas para descubrir si usted tiene alto riesgo de contraer el Virus de Papiloma Humano o desarrollar Cáncer de Cuello Uterino</h6>
                    </div>
                </div>
                <div id="inicio-imagenes" className="row">
                    <div className="col s5 l3 offset-l2 offset-s1">
                        <img id="logo_emmafig" src={this.state.logo_emma}></img>
                        {/*<img id="btn_begin" onMouseOver={this.beginHandleMouseOver} onMouseOut={this.beginHandleMouseOut} onClick={this.props.changeComponente} src={this.state.begin}></img>*/}
                        <svg id="btn_begin" onClick={() =>{ this.props.changeComponente(-1)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369.85 125.52"><g id="Capa_2" data-name="Capa 2"><g id="_1200" data-name="1200"><path className="cls-1" d="M369.85,63.92v3.4a32.15,32.15,0,0,1-32.16,32.15h-224a62.76,62.76,0,1,1,3.67-67.71H337.69A32.16,32.16,0,0,1,369.85,63.92Z"/><path className="cls-2" d="M103.44,66,49.38,103.8a2.39,2.39,0,0,1-3.76-2V26.31a2.39,2.39,0,0,1,3.76-2l54.06,37.76A2.4,2.4,0,0,1,103.44,66Z"/><text className="cls-3" transform="translate(141.29 79.89)"><tspan className="cls-4">Empezar</tspan></text></g></g></svg>
                    </div>
                    <div className="col s3 l2 offset-l3 offset-s1">
                        <img id="avatar_emma" src={this.state.img_avatar}></img>
                    </div>
                </div>
            </div>
        );

    }
}

export default Inicio; // Don’t forget to use export default!