import React, { Component } from 'react';
import './Modal.css';
import M from 'materialize-css'
import FormRegistro from '../formulario/FormRegistro';
import $ from 'jquery';
class Modal extends Component {

    constructor(props) {
        super(props);
        this.modal = 1;

    }
    componentDidMount() {        
        var elems = document.getElementById('modal1');
        var instances = M.Modal.init(elems, {dismissible: false});
        
    }
    render() {

        return (

            <div id='modal1' className="modal">
                <div className="modal-content">
                    <FormRegistro changeComponente={this.props.changeComponente} changeLogin={this.props.changeLogin}/>
                </div>
            </div>


        );

    }
}

export default Modal; // Don’t forget to use export default!