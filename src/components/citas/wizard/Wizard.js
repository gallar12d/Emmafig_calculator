import React, { Component } from 'react';
import Steps from './steps/Steps';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import './Wizard.css'
import Buttons from './buttons/Buttons';
import $ from 'jquery';


class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clases:
            {
                1: { circle: 'circulo-actual', text: 'texto-actual', line: 'linea-actual' },
                2: { circle: 'circulo', text: 'texto', line: 'linea' },
                3: { circle: 'circulo', text: 'texto', line: 'linea' },
                4: { circle: 'circulo', text: 'texto', line: 'linea' },

            }


        };
    }

    validateForm(num) {

        var pasa = true;
        switch (num) {
            case 1:

                if (!this.props.id_sede) {
                    pasa = false;
                }
                if (!this.props.fecha_cita) {
                    pasa = false;
                }
                break
            case 2:
                if (!this.props.id_profesional) {
                    pasa = false;
                    if (!this.props.todos_profesionales) {
                        pasa = false;
                    }
                    else {
                        pasa = true;
                    }

                }
                break;
            case 3:
                if (!this.props.id_turno) {
                    pasa = false;
                }
                break
            case 4:
                if (!this.props.informacion_paciente) {
                    pasa = false;
                }
                break

            default:
            // code block
        }


        if (!pasa) {

            $('.cuestionario-info').hide()
            setTimeout(function () { $('.cuestionario-info').show() }, 1);





        }

        return pasa;


    }


    actualizar(step) {




        for (let i = 1; i <= 4; i++) {

            if (i < step) {

                this.setState(state => {
                    state.clases[i].circle = 'circulo-ok'
                    state.clases[i].text = 'texto-ok'
                    state.clases[i].line = 'linea-ok'

                    return state
                })
            }
            if (i == step) {

                this.setState(state => {
                    state.clases[i].circle = 'circulo-actual'
                    state.clases[i].text = 'texto-actual'
                    state.clases[i].line = 'linea-actual'

                    return state
                })

            }
            if (i > step) {

                this.setState(state => {
                    state.clases[i].circle = 'circulo'
                    state.clases[i].text = 'texto'
                    state.clases[i].line = 'linea'

                    return state
                })
            }
        }


    }

    render() {
        $('.cuestionario-info').hide()
        let step;

        switch (this.props.step) {
            case 1:
                step = (<Step1 set_state={this.props.set_state} {...this.props} step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 2:
                step = (<Step2 set_state={this.props.set_state} {...this.props} step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 3:
                step = (<Step3 set_state={this.props.set_state} {...this.props} step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 4:
                step = (<Step4 actualizar={this.actualizar.bind(this)}  set_state={this.props.set_state} {...this.props} step={this.props.step} activate_step={this.props.activate_step} />)
                break;
            case 5:
                step = (<Step5 set_state={this.props.set_state} {...this.props} step={this.props.step} activate_step={this.props.activate_step} />)
                break;

            default:
                step = '';

        }

        let title = '';
        if(this.props.step != 5 ){
            title = this.props.nombre_servicio;
            title = title.replace('|', '');
        }
         



        return (
            <div className="row wizardCitas">

                <Steps {...this.state} />

                <div style={{marginBottom: '0px'}} className="row">
                    <div className="col s12 m4 offset-m2  ">
                    <h4 className="title_service_selected" style={{ color: '#c73a8c', fontWeight: 'bolder', textAlign: 'left' }}>{title}</h4>


                    </div>
                </div>


                {step}

                



                <div className="row">
                    <div className="col s12 m4 offset-m2 ">
                        <p id="info2" className="cuestionario-info info-animation" style={{ textAlign: 'left' }}>Por favor diligencia toda la información  para continuar</p>
                        <Buttons validar={this.validateForm.bind(this)} actualizar={this.actualizar.bind(this)} step={this.props.step} activate_step={this.props.activate_step} />

                    </div>
                </div>


            </div>


        );

    }
}

export default Wizard; // Don’t forget to use export default!