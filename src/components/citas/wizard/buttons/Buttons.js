import React, { Component } from 'react';
import './Buttons.css'
//import M from 'materialize-css';
//import $ from 'jquery';




class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {


    }

    validate_and_continue(){

        var validate = this.props.validar(this.props.step);
        if(validate){
            this.props.activate_step(this.props.step + 1);
            this.props.actualizar(this.props.step + 1);

        }
        
    }

    finish(){
        this.props.activate_step(0);
        this.props.actualizar(0);


    }
    validate_and_return(){
        this.props.activate_step(this.props.step - 1 );
        this.props.actualizar(this.props.step - 1 )
    }

    render() {

        let mostrar  = '';

        if(this.props.step != 5){
            mostrar = <button className="btn btn_next" onClick={ this.validate_and_continue.bind(this) } type="button" >Siguiente</button>
        }

        else if(this.props.step == 5){
            mostrar = <button className="btn btn_next" onClick={ this.finish.bind(this) } type="button" >Aceptar</button>

        }

        return (
            

            <div className="btn_align left-align">
                <button className="btn " onClick={this.validate_and_return.bind(this)} type="button" >Anterior</button>
                {mostrar}
            </div>


        );

    }
}

export default Buttons; // Don’t forget to use export default!

