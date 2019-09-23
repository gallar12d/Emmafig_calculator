import React, { Component } from 'react';
import './Resultado.css'
import M from 'materialize-css'
import '../../../../node_modules/materialize-social/css/materialize.css'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
import axios from 'axios';
/*import './materialize-social.css'*/
let formatos = [0, 0, 0, 0, 0, 0];
class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-btn.svg",
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-btn_1.svg",
            displayModal: false,
            textResultado: '',
            style: {
                opacity: 0,
                transform: 'translate3d(100%,0,0)'
            },
            img_emma: process.env.PUBLIC_URL + "/img/emmasection1espejo.svg"
        };

        this.masHandleMouseOver = this.masHandleMouseOver.bind(this);
        this.masHandleMouseOut = this.masHandleMouseOut.bind(this);
        this.conocerHandleMouseOver = this.conocerHandleMouseOver.bind(this);
        this.conocerHandleMouseOut = this.conocerHandleMouseOut.bind(this);
        this.masHandleClick = this.masHandleClick.bind(this);
        this.mountStyle = this.mountStyle.bind(this);
        this.unMountStyle = this.unMountStyle.bind(this);
    }

    componentDidMount() {
        this.props.saveRespuestas(this.props.respuestas);
        axios.post(' https://emmafig.com/api1/updateResultSeguimiento', {
            //axios.post('http://localhost/api1/updateResultSeguimiento',{
            "id_seguimiento": localStorage.getItem('id_seguimiento'),
            "obtuvo_resultado": "Sí"
        }).then(res => {

        })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
        this.formatRespuestas();
        setTimeout(this.mountStyle, 10) //call the into animiation
    }

    masHandleClick() {
        this.setState({
            displayModal: !this.state.displayModal
        })
    }
    masHandleMouseOver() {
        this.setState({
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-hover-btn.svg"
        });
    }

    masHandleMouseOut() {
        this.setState({
            btn_mas_detalles: process.env.PUBLIC_URL + "/img/masdeta-btn.svg"
        });
    }
    conocerHandleMouseOver() {
        this.setState({
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-hover-btn.svg"
        });
    }

    conocerHandleMouseOut() {
        this.setState({
            btn_conocer_mas: process.env.PUBLIC_URL + "/img/conocermas-btn_1.svg"
        });
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
    unMountStyle() {
        this.setState({
            style: {
                opacity: 0,
                transitionProperty: 'translate3d(-50%,0,0)',
                transitionDuration: '1s'
            }
        });
    }

    showa = () => {
        alert('hola form');
    }

    showOpcion = () => {
        let opcion = '';
        if (this.props.login) {
            opcion = <div className="col s4 m4 l4">
                <a id="btn_mas_detalles" className="boton-res waves-light col s12 m12 l12">Saber más</a>
            </div>
        } else {
            opcion = <div className="col s4 m4 l4">
                <a id="btn_mas_detalles" className="boton-res waves-light modal-trigger col s12 m12 l12" href='#modal1' onClick={this.props.changeLoginCalculadora}>Más detalles</a>
            </div>
        }
        return opcion;
    }
    formatRespuestas = () => {

        switch (this.props.respuestas[0]) {
            case 1: formatos[0] = 'Menor de 15 años';
                break;
            case 2: formatos[0] = 'Entre 15 y 20 años';
                break;
            case 3: formatos[0] = 'Entre 21 y 30 años';
                break;
            case 4: formatos[0] = 'Entre 31 y 50 años';
                break;
            default: formatos[0] = 'Mayor de 50 años';
                break;
        }

        for (var i = 1; i <= 4; i++) {
            if (this.props.respuestas[i] == 1) {
                formatos[i] = 'Sí'
            } else {
                formatos[i] = 'No'
            }
        }
        switch (this.props.respuestas[5]) {
            case '0': formatos[5] = 'Ninguna';
                console.log('Ninguna');
                break;
            case '1': formatos[5] = 'Afro';
                console.log('Afro');
                break;
            case '2': formatos[5] = 'Indigena';
                console.log('Indigena');
                break;
        }
        console.log(formatos);
    }
    render() {

        return (

            <div style={this.state.style} id="contenedor-resultado">
                <div id="contenedor-detalles" className="row">
                    <div id="contenedor-emma">
                        <img id="img-emma" src={this.state.img_emma} />
                    </div>
                    <div id="cont-info-detalles" className="col s12 m9 l8">
                        <div id="contenedor-titulo-ins" className="right-align">
                            <h1 id="titulo-res" className="flow-text right-align">Resultado</h1>
                            <h6 id="subtitulo-res" className="flow-text right-align">Emma dice que tu nivel de riesgo es </h6>
                            <h1 id="contenido-res" className="flow-text right-align">{this.props.result}</h1>
                            <p id="detalle-res">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                        <div className="row row-resultado">
                            <div className="col l12">
                                <table className="centered">
                                    <thead>
                                        <tr>
                                            <th>Cuantos años tienes</th>
                                            <th>Tienes mas de tres hijos</th>
                                            <th>Más de dos compañeros sexuales</th>
                                            <th>Con Pareja</th>
                                            <th>Relaciones antes de los 15 años</th>
                                            <th>Etnia</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            {formatos.map((item, index) => <td key={index}>{item}</td>)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row row-resultado">
                            <div className="col s6 m6 l6">
                                <a id="btn_reiniciar" className="boton-res waves-light col s12 m12 l12" onClick={this.props.backComponente}>Reiniciar</a>
                            </div>                            
                            <div className="col s6 m6 l6">
                                <a id="btn_conocer_mas" className="boton-res waves-light col s12 m12 l12" href="localhost:3000">Ir a EmmaFIG</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default Resultado; // Don’t forget to use export default!