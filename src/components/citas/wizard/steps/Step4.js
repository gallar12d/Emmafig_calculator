import React, { Component } from 'react';
import './Step4.css'
import M from 'materialize-css';
import $ from 'jquery';
import { FaUserNurse } from 'react-icons/fa';
import { MdLocationOn, MdEvent, MdAccessAlarms } from 'react-icons/md'
import { IoIosPerson } from 'react-icons/io';

import Buttons from '../buttons/Buttons'
import Axios from 'axios';





class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: process.env.PUBLIC_URL + "/img/citas_step2.svg",
            profesionales: []

        };
    }

    componentDidMount() {
        var elems = $('.mySelect');

        M.FormSelect.init(elems, {});
        elems = $('select');

        M.FormSelect.init(elems, {});

        elems = $('#modal_cita')
        M.Modal.init(elems, {});
        $('#modal_cita').append('<button class="modal-close btn-flat" style="position:absolute;top:0;right:0;">x</button>');

        $('form').on('focus', 'input[type=number]', function (e) {
            $(this).on('mousewheel.disableScroll', function (e) {
              e.preventDefault()
            })
          })
          $('form').on('blur', 'input[type=number]', function (e) {
            $(this).off('mousewheel.disableScroll')
          })

    }
    open_modal() {

        var elem = $('#modal_cita')
        var instance = M.Modal.getInstance(elem);
        instance.open();


    }

    validate_form_user(e) {
        e.preventDefault();
      var next =  $('.btn_next')
      console.log(next)
        var validity = $('#form_user')[0].checkValidity()

        if (validity) {
            var elem = $('#modal_cita')
            var instance = M.Modal.getInstance(elem);
            this.props.set_state('informacion_paciente', true)
            instance.close();

            // 
            //next.click();
            this.props.activate_step(this.props.step + 1);
            this.props.actualizar(this.props.step + 1);



        }
        else {
            $('#form_user')[0].reportValidity()


        }



        //validate validityCheck api html5 for this form
        //close modal


    }




    render() {





        return (
            <div className="row step4">
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
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.profesional}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <MdAccessAlarms color={'#0f9b9b'} size={35} />

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#0f9b9b' }}>Hora de la cita:</h6>

                        </div>
                        <div className='floting'>
                            <h6 style={{ fontWeight: 'bolder', fontFamily: 'lato', fontStyle: 'italic' }}>{this.props.turno}
                            </h6>

                        </div>
                    </div>
                    <div className="icon_input">
                        <div className='floting'>
                            <IoIosPerson color={'#0f9b9b'} size={35} />

                        </div>
                        <div style={{ width: '100%' }} className='floting'>
                            <div onClick={this.open_modal.bind(this)} style={{ margin: '0px', color: 'black' }} className="input-field ">
                                <select disabled value={'Completa tus datos básicos para la cita'} >
                                    <option disabled  >Completa tus datos básicos para la cita</option>

                                </select>

                            </div>

                        </div>

                    </div>



                    <br></br>


                </div>
                <div className="col s12 m4 offset-m1  img_step4 ">
                    <img alt="" src={this.state.imagen} />

                </div>

                <div id="modal_cita" className="modal">
                    <div className="modal-content">
                        <div className="row">
                            <div className="col m12 left-align">
                                <h5 style={{ fontWeight: 'bolder', fontFamily: 'lato', color: '#c83b8d' }}>
                                    Datos necesarios para tu cita
                              </h5>
                              <span>Campos con un asterisco (*) son obligatorios</span>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col m12">
                                <hr></hr>

                            </div>

                        </div>

                        <div className="row">
                            <form id="form_user">

                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_primer_nombre', e.target.value)} defaultValue={this.props.paciente_primer_nombre} required id="primer_nombre" type="text" className="validate"></input>
                                    <label className = {(this.props.paciente_primer_nombre) ? 'active': ''} htmlFor="first_name">Primer nombre *</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_segundo_nombre', e.target.value)} defaultValue={this.props.paciente_segundo_nombre} id="segundo_nombre" type="text" className="validate"></input>
                                    <label className = {(this.props.paciente_segundo_nombre) ? 'active': ''} htmlFor="first_name">Segundo nombre</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_primer_apellido', e.target.value)} defaultValue={this.props.paciente_primer_apellido} required id="primer_apellido" type="text" className="validate"></input>
                                    <label className = {(this.props.paciente_primer_apellido) ? 'active': ''} htmlFor="first_name">Primer apellido *</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_segundo_apellido', e.target.value)} defaultValue={this.props.paciente_segundo_apellido} id="segundo_apellido" type="text" className="validate"></input>
                                    <label className = {(this.props.paciente_segundo_apellido) ? 'active': ''} htmlFor="first_name">Segundo apellido </label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <select  onChange={(e) => this.props.set_state('paciente_tipo_identificacion', e.target.value)} id="tipo_id" name="tipo-id" required value={this.props.paciente_tipo_identificacion}>
                                        <option value='-1' disabled >Tipo de identificación *</option>

                                        <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                        <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                        <option value="Cédula extrangera">Cédula extrangera</option>
                                        <option value="Nit">Nit</option>
                                        <option value="Registro civil">Registro civil</option>

                                    </select>

                                </div>

                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_numero_identificacion', e.target.value)} defaultValue={this.props.paciente_numero_identificacion} required id="numero_identificacion" type="number" className="validate"></input>
                                    <label className = {(this.props.paciente_numero_identificacion) ? 'active': ''} htmlFor="first_name">Número de identificación *</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_numero1', e.target.value)} defaultValue={this.props.paciente_numero1} required id="telefono1" type="number" className="validate"></input>
                                    <label className = {(this.props.paciente_numero1) ? 'active': ''} htmlFor="first_name">Teléfono de contacto 1 *</label>
                                </div>
                                <div className="input-field col s12 m6">
                                    <input onChange={(e) => this.props.set_state('paciente_numero2', e.target.value)} defaultValue={this.props.paciente_numero2} id="telefono2" type="number" className="validate"></input>
                                    <label className = {(this.props.paciente_numero2) ? 'active': ''} htmlFor="first_name">Teléfono de contacto 2</label>
                                </div>
                                <div className="input-field col s12 m12">
                                    <input onChange={(e) => this.props.set_state('paciente_email', e.target.value)} defaultValue={this.props.paciente_email} id="email" type="email" className="validate"></input>
                                    <label className = {(this.props.paciente_email) ? 'active': ''} htmlFor="first_name">Correo electrónico</label>
                                </div>
                            </form>



                        </div>



                    </div>
                    <div className="modal-footer">
                        <button onClick={ this.validate_form_user.bind(this) } className="btn   ">Confirmar</button>
                    </div>
                </div>


            </div>



        );

    }
}

export default Step4; // Don’t forget to use export default!