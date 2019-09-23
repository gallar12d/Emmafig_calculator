import React, { Component } from 'react';
import './Steps.css'


class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {

            clases: 
            {
                1:{circle: 'circulo-actual', text: 'texto-actual', line: 'linea-actual' },
                2:{circle: 'circulo', text: 'texto', line: 'linea' },
                3:{circle: 'circulo', text: 'texto', line: 'linea' },
                4:{circle: 'circulo', text: 'texto', line: 'linea' },

            }
           
        };
    }

   

 

  

   
   
    render() {
        return (  
            
            
               
                    <div id ="mini_steps" className="row steps">
                    <div   className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68" preserveAspectRatio="xMidYMid meet">
                            <circle id="circulo1" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className={this.props.clases[1].circle} />
                            <text id="texto1" x="27" y="44" className={this.props.clases[1].text} >1</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea1" className={this.props.clases[1].line} x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="10" stroke="#C6C8C7" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68" preserveAspectRatio="xMidYMid meet">
                            <circle id="circulo1" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className={this.props.clases[2].circle}  />
                            <text id="texto1" x="27" y="44" className={this.props.clases[2].text} >2</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea1" className={this.props.clases[2].line}  x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="10" stroke="#C6C8C7" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68" preserveAspectRatio="xMidYMid meet">
                            <circle id="circulo1" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className={this.props.clases[3].circle}  />
                            <text id="texto1" x="27" y="44" className={this.props.clases[3].text} >3</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea1" className={this.props.clases[3].line}  x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="10" stroke="#C6C8C7" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68" preserveAspectRatio="xMidYMid meet">
                            <circle id="circulo1" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className={this.props.clases[4].circle}  />
                            <text id="texto1" x="27" y="44" className={this.props.clases[4].text} >4</text>
                        </svg>
                    </div>
                                                                
                </div>

                  

                
                 
                        

        );

    }
}

export default Steps; // Don’t forget to use export default!