import React, { Component } from 'react';
import './Paquetes.css'
import Paquete from '../paquete/Paquete'

class Paquetes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paquetes: []
            
        };
    }

    componentDidMount(){
        fetch("https://emmafig.com/api1/packs")
            .then(res => res.json())
            .then(
                (result) => {                
                    this.setState({
                        paquetes: result
                    });
                   
                },

                (error) => {
                
                }
            )

    }
    render() {
        const listItems = this.state.paquetes.map((d) => <Paquete loginCitas={this.props.loginCitas} login={this.props.login} avatar={d.imagen} item_selected = {this.props.item} id={d.id_paquete} key={d.id_paquete} titulo={d.nombre} valor_antiguo={d.valor_antiguo} valor={d.valor} descripcion={d.descripcion} recomendaciones={d.recomendaciones}></Paquete>);
        return (            
                <div className="row espacioPack">
                       {listItems}                       
                </div>           

        );

    }
}

export default Paquetes; // Don’t forget to use export default!