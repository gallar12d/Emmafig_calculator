import React, { Component } from 'react';
import './Paquete.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import $ from 'jquery';

class Paquete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: ''
            
        };

    }

    componentDidMount() {
        $(document).ready(function () {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {});
        });
        $('.modal').append('<button class="modal-close btn-flat" style="position:absolute;top:0;right:0;">x</button>');

    }
    addItem(id, nombre) {

        if(this.props.login == 0){
            var elem = document.getElementById('modal1');
            var instance = M.Modal.getInstance(elem);
            instance.open();
            this.props.item_selected(id, nombre)
            this.props.loginCitas()

        }
        else{
            this.props.item_selected(id, nombre)

        }
        
    }

    formatNum(num) {
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            num = num.split('').reverse().join('').replace(/^[.]/, '');
            return num;
        }
    }

    render() {
        var whatis;
        var word = this.props.titulo + '?'
        var word2 = this.props.titulo;
        word = word.replace('|', '');
        word = word.toLowerCase()
        word2 = word2.replace('|', '');
        word = word.replace('adn-vph', 'ADN-VPH');

        // word = word.replace('adn-vph', 'ADN-VPH');

        if (this.props.id == 1 || this.props.id == 2) {
            word = 'Qué es la ' + word
            whatis = <h4 style={{'color': '#c73a8c', 'fontWeith': 'bolder'}}>{word} </h4>
        }
        else {
            word = 'Qué es el ' + word
            whatis = <h4 style={{'color': '#c73a8c', 'fontWeith': 'bolder'}}>{word} </h4>

        }

        var res = this.props.titulo
        res = res.split("|");
        return (
            <div>
                <div className="col s12 m6 l3">
                    <div className="card ">
                        <div className="card-title white-text">

                            <h4 style={{ 'paddingTop': '8px' }} className="center-align tituloServicio">{res[0]}</h4>
                            <h4 className="center-align tituloServicio">{res[1]}</h4>
                        </div>
                        <div className="card-content white-text">
                            <h6 className="linet">$ {this.formatNum(this.props.valor_antiguo)}</h6>
                            <h4>$ {this.formatNum(this.props.valor)}</h4>
                            <p>Si separas tu cita por este medio</p>
                        </div>
                        <div className="card-action">
                            <button type="button" className=" agendarbtn btn btn-secondary  modal-trigger" href={'#Modal' + this.props.id}>Conoce más</button>
                            <br></br>
                            <button type="button" onClick={this.addItem.bind(this, this.props.id, this.props.titulo)} className="btn btn-secondary">Separa tu cita</button>
                        </div>
                    </div>
                </div>

                <div id={'Modal' + this.props.id} className="modal widthmodal">
                    <div className="modal-content left-align">


                        <div className="col m6 s12">
                            <img style={{'width': '100%'}} src = {'http://fig.org.co/atlanticv2/public/img/'+this.props.avatar} />
                        </div>
                        <div className="col m6 s12">
                            {whatis}
                            <hr></hr>
                            <p>{this.props.descripcion}</p>

                            <br></br>
                            <h4 style={{'color': '#c73a8c', 'fontWeith': 'bolder'}}>Recomendaciones para la toma de muestra</h4>
                            <hr></hr>

                            <p>Para acceder al servicio de {word2}, por favor tenga en cuenta:</p>
                            <ul className="recomendations">
                                <li>
                                    No tener relaciones sexuales tres (3) días antes de la toma de la muestra
                            </li>
                                <li>
                                    No aplicar óvulos, cremas o geles vaginales tres (3) días antes de la toma de la muestra
                            </li>
                                <li>
                                    No tener el periodo menstrual
                            </li>



                            </ul>

                            <br></br>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button onClick={this.addItem.bind(this, this.props.id, this.props.titulo)} className="modal-close btn_modal_close  btn-flat">Agendar cita</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default Paquete; // Don’t forget to use export default!