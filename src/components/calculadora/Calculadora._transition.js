import React, { Component } from 'react';



import Cuestionario from './cuestionario/Cuestionario';
import Detalle from './detalle/Detalle';
import Inicio from './inicio/Inicio';
import Inscripcion from './inscripcion/Inscripcion';
import Resultado from './resultado/Resultado';
import './Calculadora.css';

import { Transition, animated } from 'react-spring/renderprops';
let i = 0;
class Calculadora extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            cuestionarioShow: false,
            inicioShow: true,
            index: 1,
            pages: [
                styles => (
                    <animated.div style={styles}>
                        <Inicio showCuestionario={this.showCuestionario} /> 
                        </animated.div>                       
                ),
                styles => (
                    <animated.div style={styles}>
                        <Cuestionario />
                    </animated.div>),
            ]
        }
        this.showCuestionario = this.showCuestionario.bind(this);

    }

    showCuestionario = e => {
        
        i=i+1;
        this.setState({

            index: this.state.index + 1,
            inicioShow: !this.state.inicioShow
        }); console.log(this.state.index)
    };
    render() {

        return (
            console.log('prueba'),
            <div id="contenedor-calculadora">
                
                <Transition
                    native                                     
                    items={this.state.index}                    
                    from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
                    enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                    leave={{ opacity:0,transform: 'translate3d(-50%,0,0)' }}
                >
                    {state=>(console.log(state),this.state.pages[i])}


                </Transition>



                {/*<Resultado />
                <Inscripcion />
                <Detalle />*/}
            </div>
        );

    }
}

export default Calculadora; // Don’t forget to use export default!