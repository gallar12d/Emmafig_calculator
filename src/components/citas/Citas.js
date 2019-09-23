import React, { Component } from 'react';
import './Citas.css'
import Paquetes from './paquetes/Paquetes'
import Wizard from './wizard/Wizard'
import Step5 from './wizard/steps/Step5'
import Modal from '../calculadora/modal/Modal'
import $ from 'jquery'

class Citas extends Component {
    constructor(props) {
        super(props);
          
        this.state = {
            show_modal_login: true,
            textItem: '',
            iditem: '', 
            step_activated: 0,
            id_sede: '', 
            sede: '', 
            fecha_cita: '', 
            id_profesional: '', 
            profesional: '',
            todos_profesionales: true,
            informacion_paciente: false,
            id_turno: '',
            turno: '', 
            paciente_primer_nombre: '',
            paciente_segundo_nombre: '',
            paciente_primer_apellido: '',
            paciente_segundo_apellido: '',
            paciente_tipo_identificacion: -1, 
            paciente_numero_identificacion: '',
            paciente_numero1: '',
            paciente_numero2: '',
            paciente_email: '',
            cita: false,
            step_update: false,
            orientation: ''




        };
        this.itemSelected = this.itemSelected.bind(this)
    }
    

    componentDidMount(){
        var screenOrientation = ($(window).width() > $(window).height())? 90 : 0;
        this.setState({orientation: screenOrientation})


        $(window).bind("resize", () => {
            var screenOrientation = ($(window).width() > $(window).height())? 90 : 0;
            
            this.setState({orientation: screenOrientation})
        });

       
    }


    componentDidUpdate(){
        

       
        if(this.props.login == 1 && !this.state.step_update && this.props.logCitas == 1 ){
            
            this.setState({step_activated: 1})
            this.setState({step_update: true})

        }
    }

   

    set_state(nombre, valor){
       
        
        this.setState({[nombre]: valor});
    }
    


    itemSelected(id, nombre){
        
        this.setState({iditem: id, textItem: nombre});
        if(this.props.login != 0){
            this.setState({step_activated: 1});
        }
    }
    activate_step(num){
        this.setState({step_activated: num});

    }

    render() {

        let seccion;
        
        if(this.state.step_activated == 0){
            seccion = ( 
            <div>
                <Paquetes loginCitas={this.props.loginCitas} login={this.props.login}   item ={this.itemSelected}>                
                </Paquetes>
                <div className="moreServices">
                    <a alt='' target="_blank" href="http://www.fig.org.co">Conoce otros servicios</a>
                </div>       
        
            </div>
             );
        }
        
        else{   
            
            if(this.props.login == 1){
                seccion = ( <Wizard   {...this.state} set_state = {this.set_state.bind(this)}  step = {this.state.step_activated}  activate_step = {this.activate_step.bind(this)} id_servicio={this.state.iditem} nombre_servicio={this.state.textItem} ></Wizard> );
            }
                
        

           

        }

        let stilo = {};
        if (this.state.step_activated == 0  && this.state.orientation == 90){
            

            stilo = {
                
                height: '71vh'
            };
        }



        return (
            <div id="citas" className style={stilo} >
                <div className="container headcitas">
                    <div className="row ">
                        <h4 className="titulocitas">
                            Agenda tu cita
                        </h4>
                        <h5 className="subtitleCitas">Comprometidos con una <b> atención humanizada </b> y de <b>alta calidad</b></h5>                       
                    </div>                    
                </div>
               {seccion}
               <Modal id='modal1'  changeLogin={this.props.changeLogin}/> 
               
               
            </div>

        );

    }
}

export default Citas; // Don’t forget to use export default!