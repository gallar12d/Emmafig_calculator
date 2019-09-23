import React, { Component } from 'react';
import Menu from './menu/Menu';
import Seccion1 from './seccion1/Seccion1';
import Calculadora from './calculadora_api/Calculadora';
import Testimonios from './testimonios/Testimonios';
import Footer from './footer/Footer';
import Citas from './citas/Citas';
import Contacto from './contacto/Contacto';
import Perfil from './perfil/Perfil';
import EditPerfil from './perfil/Editprofile';
import $ from "jquery";
import { thisTypeAnnotation } from '@babel/types';
import M from 'materialize-css';
import axios from "axios";


let elementMenu;
var btnMenu;
let ancla;
class ComponentMaster extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;
        this.state = {
            changeCompt: 0,
            componentScroll: "",
            login: 0,
            prevLogin: 1,
            loginCalculadora: 0,
            ancla: null,
            prevAncla: "",
            primer_nombre: "",
            id: "",
            loginCitas: 0,
            respuestas: []//respuestas de la calculadora

        }
        //this.clickLogin = this.clickLogin.bind(this);

    }

    


    componentDidMount() {
        
        ancla = this.props.ancla;
        console.log('jwt '+localStorage.getItem('jwt'));
        if(localStorage.getItem('jwt') !== null){
           
            this.changeLogin()
        }
      
        if (ancla == "login" ){
            if(localStorage.getItem('jwt') == null){

                setTimeout(function () {
                    let simulateClick = elem => {
                        let evt = new MouseEvent('click', {
                            bubbles: true,
                            view: window
                        });
                        elem.dispatchEvent(evt)
                    };
    
                    M.Modal.getInstance(document.getElementById('modal1')).open();
                    var btnIngresar = document.getElementById("btn_ingresar_a");
    
                    simulateClick(btnIngresar);
        
                }, 3000);
            }
           



        }else{
            this.setState({

                ancla: ancla
            })
        }
    }


    


    changeComponente(state){
       

        this.setState({
            changeCompt: state
        })

    }
    scroolComponent(element1) {
        elementMenu = element1;
    }
    shouldComponentUpdate(nextProps, nextState) {
        var checkState;
        console.log(this.state.changeCompt);
        console.log(nextState['changeCompt']);
        if ((this.state.changeCompt != nextState['changeCompt']) || (this.state.prevLogin != this.state.login) || (this.state.ancla != nextState['ancla'])) {
            return true;
        } else {
            return false;
        }
    }
    /*showPerfil = () => { 
        alert('entraaaa')
        console.log('emtra')       
        if(this.state.login == 0){
            return (<h1>hola</h1>)
        }else{
            return (<h1>hola mundo</h1>)
        }
    }*/
    changeLogin = () => {
      
        this.setState({
            login: this.state.prevLogin,
            prevLogin: this.state.login,
            primer_nombre: localStorage.getItem('primer_nombre'),
            id: localStorage.getItem('id')
        });
        
        if(this.state.loginCalculadora == 1 && this.state.login == 1){
            this.setState({
                changeCompt: 1
            })
            this.saveResult();
            this.showComponent();
        }   
        
    }

    changeLoginCalculadora = () => {
        this.setState({
            loginCalculadora: 1
        });
    }
    
    changeLoginCitas = () => {
        this.setState({
            loginCitas: 1
        });
    }

    saveRespuestas = respuestas => {
        console.log('respuestas master'+ respuestas);
        this.setState({
            respuestas: respuestas
        })
        
    }

    saveResult = () => {
        console.log('respuestas master setstate 1'+ this.state.respuestas[0]);        
        axios.post('https://emmafig.com/api1/saveEstimacion', {
        //axios.post('http://localhost/api1/saveEstimacion', {           
                "valor_respuesta1": this.state.respuestas[0],
                "valor_respuesta2": this.state.respuestas[1],
                "valor_respuesta3": this.state.respuestas[2],
                "valor_respuesta4": this.state.respuestas[3],                
                "valor_respuesta5": this.state.respuestas[4],
                "valor_respuesta6": this.state.respuestas[5],
                "id_atl_usuario": localStorage.getItem('id')
            
        }).then(res => {
            console.log('Estimacion guardad');
            //this.props.changeComponente(res.data.riesgo, this.state.selectedValues);
        })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }
    
    componentDidUpdate() {
        ancla = this.props.ancla;
        if(this.state.login == 0){
            localStorage.removeItem('jwt');
            localStorage.removeItem('id');
            localStorage.removeItem('primer_nombre');
       

        }
        if (this.state.changeCompt != 1 && this.state.changeCompt != 2) {
           
            console.log(elementMenu);
            if (elementMenu != undefined || elementMenu != null) {
                let simulateClick = elem => {
                    let evt = new MouseEvent('click', {
                        bubbles: true,
                        view: window
                    });
                    elem.dispatchEvent(evt)
                };
                btnMenu = document.getElementById(elementMenu);
                setTimeout(function () {
                    simulateClick(btnMenu);
                }, 1000);


            } else {
                if (this.state.ancla != null) {
                    let simulateClick = elem => {
                        let evt = new MouseEvent('click', {
                            bubbles: true,
                            view: window
                        });
                        elem.dispatchEvent(evt)
                    };

                    btnMenu = document.getElementById(this.state.ancla);
                    setTimeout(function () {
                        simulateClick(btnMenu);
                    }, 3000);

                }else if(ancla == 'login'){
                    this.changeComponente(1)

                }
            }
            elementMenu = null;
        }
    }

    showComponent = () => {
        switch (this.state.changeCompt) {
            case 0:
                return (
                    <div className="mainpage">
                        <Calculadora                             
                            login={this.state.login}
                            res={this.state.respuestas}
                            saveRespuestas={this.saveRespuestas.bind(this)}
                            changeLogin={this.changeLogin.bind(this)} 
                            changeLoginCalculadora={this.changeLoginCalculadora.bind(this)} 
                        />
                        

                    </div>

                );
            case 1:
                return <Perfil />
            case 2:
                return <EditPerfil></EditPerfil>
            default:
                return false


        }

    }

    render() {

        return (
            <div className="mainComponent">
                {<Menu login={this.state.login} primer_nombre={this.state.primer_nombre} changeComptStateMain={this.state.changeCompt} scroolComponent={this.scroolComponent.bind(this)} updateStateComponent={this.changeComponente.bind(this)} changeLogin={this.changeLogin.bind(this)}></Menu>}
                {this.showComponent()}
               
            </div>
        );

    }
}

export default ComponentMaster;