import React, { Component } from 'react';
import './Step3.css'
import M from 'materialize-css';
import $ from 'jquery';
import { FaUserNurse } from 'react-icons/fa';
import { MdLocationOn, MdEvent, MdAccessAlarms } from 'react-icons/md'
import Buttons from '../buttons/Buttons'
import axios from 'axios';





class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: process.env.PUBLIC_URL + "/img/citas_step1.svg",
            profesionales: [],
            turnos: [],
            finaliza: false

        };
    }

    componentDidMount() {
        var elems = $('.mySelect');

        M.FormSelect.init(elems, {});
        var elems = $('select');

        M.FormSelect.init(elems, {});

       

        const dataForm = new FormData();
        dataForm.append("id_sede", this.props.id_sede);
        dataForm.append("fecha", this.props.fecha_cita);
        dataForm.append("id_profesional", this.props.id_profesional);
        dataForm.append("todos_profesionales", this.props.todos_profesionales);


        axios
            .post("https://emmafig.com/api1/turnos", dataForm)
            .then(res => {
                let result = res.data;
                this.setState({ turnos: result })
                this.setState({ finaliza: true })
            });

    }

     formatAMPM(date) {

        date = new Date(this.props.fecha_cita +' '+date)
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }




    render() {
        let turn = '';
        let turn2 = '';

        if (!this.state.finaliza) {
            turn = <h6>Cargando turnos</h6>;

        }
        else {

            if (this.state.turnos.length) {

                turn = this.state.turnos.map((turno, key) => {

                    if (key % 2 == 0) {
                        return (<p key={turno.id_turno}>
                            <label>
                                <input defaultChecked ={this.props.id_turno === turno.id_turno} onClick={(e) => { this.props.set_state('id_turno', turno.id_turno); this.props.set_state('turno', this.formatAMPM(turno.hora)); }} className="with-gap" name="group1" type="radio" />
                                <span> {this.formatAMPM(turno.hora)}</span>
                            </label>
                        </p>)

                    }
                })
                turn2 = this.state.turnos.map((turno, key) => {

                    if (key % 2 != 0) {
                        return (<p key={turno.id_turno}>
                            <label>
                                <input defaultChecked ={this.props.id_turno === turno.id_turno} onClick={(e) => { this.props.set_state('id_turno', turno.id_turno); this.props.set_state('turno', this.formatAMPM(turno.hora)); }} className="with-gap" name="group1" type="radio" />
                                <span>{this.formatAMPM(turno.hora)}</span>
                            </label>
                        </p>)

                    }
                })

            }
            else{
                turn = <h6>No existen turnos</h6>;

            }

        }

        let profesional = 'Todos';
        if (this.props.profesional) {
            profesional = this.props.profesional;
        }


        return (
            <div className="row step3">
                <div className="col s12 m4 offset-m2 ">



                    <div className="icon_input">
                        <div className='floting'>
                            <MdLocationOn color={'#0f9b9b'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0f9b9b' }}>Punto de atención:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.sede} </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <MdEvent color={'#0f9b9b'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0f9b9b' }}>Fecha de la cita:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.fecha_cita}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <FaUserNurse color={'#0f9b9b'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0f9b9b' }}>Profesional:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{profesional}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <MdAccessAlarms color={'#0f9b9b'} size={35} />

                        </div>
                        <div style={{ width: '100%' }} className='floting'>
                            <div style={{ margin: '0px', color: 'black', fontFamily: 'lato', fontWeight: 'bolder' }} className="input-field ">
                                <select defaultValue={{ label: "Selecciona un turno disponible para esta fecha", value: 0 }}>
                                    <option >Selecciona un turno disponible para esta fecha</option>

                                </select>

                            </div>

                        </div>

                    </div>



                    <br></br>


                </div>
                <div className="col s12 m3 offset-m1 img_step1 ">
                    <div className="row row_turns">
                        <div className="col col_turns m6">
                            {turn}

                        </div>
                        <div className="col m6 col_turns">
                            {turn2}


                        </div>

                    </div>


                </div>

            </div>



        );

    }
}

export default Step3; // Don’t forget to use export default!