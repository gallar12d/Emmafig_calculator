import React, { Component } from 'react';
import './Step2.css'
import M from 'materialize-css';
import $ from 'jquery';
import { FaUserNurse, FaLinkedin } from 'react-icons/fa';
import Buttons from '../buttons/Buttons'
import Axios from 'axios';
class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: process.env.PUBLIC_URL + "/img/citas_step1.svg",
            profesionales: []

        };
    }

    componentDidMount() {
        var elems = $('.mySelect');
        M.FormSelect.init(elems, {});
        Axios.get(`https://emmafig.com/api1/profesionales/`+this.props.id_sede)
            .then(res => {
                const profesionales = res.data;
                this.setState({ profesionales });
                var elems = document.querySelectorAll('.modal');
                M.Modal.init(elems, {});
                $('.modal').append('<button class="modal-close btn-flat" style="position:absolute;top:0;right:0;">x</button>');
            })

    }

    ucword(word){
        var lsCadena = word .toLowerCase();
         lsCadena = lsCadena .charAt(0).toUpperCase() + lsCadena .slice(1);
 
     return lsCadena;
     }
    render() {

        let prof = this.state.profesionales.map((profesional, index ) => {
            let requi = '';
            if(index == 0){
                requi = true;
            }
            else{
                requi = false;
            }
            let nombre2 = '';
            if (profesional.segundo_nombre)
                nombre2 = profesional.segundo_nombre
            let apellido2 = '';
            if (profesional.segundo_apellido)
                apellido2 = profesional.segundo_apellido

            let check = false;
            if(this.props.id_profesional == profesional.id_usuario){
                check = true;
            }
            return (
                <div key = {profesional.id_usuario }>
                    <div  className="input-field ">
                        <div className="icon_input" >
                            <label>
                                <input  checked={check}  onChange = {() => { this.props.set_state('id_profesional', profesional.id_usuario); this.props.set_state('profesional', this.ucword(profesional.primer_nombre) + ' ' + this.ucword(nombre2) + ' ' + this.ucword(profesional.primer_apellido) + ' ' + this.ucword(apellido2))} } className="with-gap" name="id_profesional" value={profesional.id_usuario} type="radio" />
                                <span style={{color: 'black'}}>{this.ucword(profesional.primer_nombre) + ' ' + this.ucword(nombre2) + ' ' + this.ucword(profesional.primer_apellido) + ' ' + this.ucword(apellido2)}</span>
                            </label>
                            <a className=" modal-trigger" href={'#Modal' + profesional.id_usuario}>
                                <FaUserNurse className="icon" size={25} />

                            </a>

                        </div>
                    </div>
                    <div id={'Modal' + profesional.id_usuario} className="modal modal-fixed-footer">
                        <div className="modal-content left-align">
                            <div className="row">
                                <div className="col s12 m6 l6">
                                    <img alt= '' style={{width: '100%'}} src = {'http://fig.org.co/atlanticv2/public/img/'+profesional.avatar}>
                                    </img>


                                </div>
                                <div className="col s12 m6 l6">
                                    <h5 style={{ color: '#c83b8d', fontWeight:'bolder', fontFamily: 'lato' }} className="title_modal_profesionales">Nuestros profesionales</h5>
                                    <hr></hr>
                                    <h6 style={{  fontWeight:'bolder', fontFamily: 'lato'  }} >{profesional.primer_nombre + ' ' + nombre2 + ' ' + profesional.primer_apellido + ' ' + apellido2}</h6>
                                    <h6 style={{ color: '#0f9b9b', fontWeight:'bolder', fontFamily: 'lato'  }} className="title_modal_profesionales">{profesional.especialidad}</h6>
                                    <h6 style={{ fontWeight:'bolder', fontFamily: 'lato'  }} >Registro Médico Número: {profesional.registro_medico_numero}</h6>
                                    <p>{profesional.descripcion}</p>
                                    <br></br>
                                    
                                    <h6 style={{ fontWeight:'bolder', fontFamily: 'lato'  }} >Sigue a este profesional en linkedin: <a target="_blank" href={profesional.red_linkedin}><FaLinkedin></FaLinkedin></a></h6>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className=" btn_modal_close modal-close  btn-flat">Aceptar</button>
                        </div>
                    </div>

                </div>
            )
        })

        let todos_check = '';
        if(this.props.id_profesional){
            let todos_check = false;

        }
        

        return (
            <div className="row step2">
                <div className="col s12 m4 offset-m2 ">
                    <h6 className="left-align step2_subtitle">Selecciona el profesional que desees</h6>
                    {prof}
                    <div className="input-field ">
                        <div className="icon_input" >
                            <label>
                                <input checked = {(this.props.id_profesional)? false: true}   onChange = {() => { this.props.set_state('id_profesional', ''); this.props.set_state('profesional', ''); this.props.set_state('todos_profesionales', true)} }  className="with-gap" name="id_profesional" value="0" type="radio" />
                                <span style={{color: 'black'}} >Todos</span>
                            </label>
                            <br></br>
                            <br></br>
                        </div>
                    </div>

                  

                </div>
                <div className="col s12 m4 img_step1 ">
                    <img alt="" src={this.state.imagen} />

                </div>

            </div>



        );

    }
}

export default Step2; // Don’t forget to use export default!