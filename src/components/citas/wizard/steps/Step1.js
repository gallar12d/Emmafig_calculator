import React, { Component } from 'react';
import './Step1.css'
import M from 'materialize-css';
import $ from 'jquery';
import { MdRoom, MdEvent } from 'react-icons/md';
import Buttons from '../buttons/Buttons'




class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: process.env.PUBLIC_URL + "/img/citas_step1.svg"

        };
    }

    componentDidMount() {
        var elems = $('.mySelect');
        
        M.FormSelect.init(elems, {});

    }

    set_sede(event){
        var id_sede = event.target.value
        var sede = event.target.options[event.target.selectedIndex].text
        
        this.props.set_state('id_sede', id_sede)
        this.props.set_state('sede', sede)
        
    }
    set_date(event){
        this.props.set_state('fecha_cita', event.target.value)
    }




    render() {

        let punto = -1;
        
        if(this.props.id_sede){
            punto = this.props.id_sede;
        }


        return (
            <div className="row step1">
                <div className="col s12 m4 offset-m2 ">
                    <div className="input-field ">
                        <div className="icon_input" >
                            <MdRoom size={32} />
                            <select id="id_sede" name="id_sede" required onChange={ this.set_sede.bind(this)} value={punto}  className="mySelect validating">
                                <option value ='-1' disabled >Punto de atención</option>
                                
                                <option value="1">Popayán</option>
                                <option value="2">Santander de Quilichao</option>                                
                            </select>

                        </div>
                        <div className="icon_input" >
                            <MdEvent size={32} />
                            <div className="input-field ">
                                <input value={this.props.fecha_cita}  name ="fecha" required onFocus={(e) => {e.currentTarget.type = "date"}} onBlur={(e) => {e.currentTarget.type = "text"}} onChange={this.set_date.bind(this)} placeholder="Fecha" id="fecha" type="text" className="validate validating"></input>

                            </div> 
                        </div>
                    </div>
                    

                </div>
                <div className="col s12 m4 img_step1 ">
                <img src={this.state.imagen} />

                </div>

            </div>



        );

    }
}

export default Step1; // Don’t forget to use export default!