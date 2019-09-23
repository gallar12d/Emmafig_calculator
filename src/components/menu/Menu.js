import React, { Component } from 'react';
import { Link } from "react-scroll";
import './Menu.css'
import M from "materialize-css";
import { element } from 'prop-types';

let elementInicio;

let elementTestimonios;
let elementContacto;
let elementCitas
let usuario;

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: process.env.PUBLIC_URL + "/img/logo-Emmafig4.png",
            gblState: 0,
            element: "",
            componentChange: 0,
        };
    }
    componentDidMount() {
        console.log('estado login ' + this.props.login);
        M.Dropdown.init(this.Dropdown);
        M.Collapsible.init(this.Collapsible);
    }

    componentDidUpdate() {
        M.Dropdown.init(this.Dropdown);
        M.Collapsible.init(this.Collapsible);
    }

    GenerateClick(state, elementMenu) {
        /*
        this.setState({
            gblState: this.props.globalStateComponent,
        })
        */
        this.setState({
            componentChange: state
        })
        this.props.scroolComponent(elementMenu)

        //console.log(element);
        //console.log(this.props.changeComptStateMain);
        //$("#"+context).trigger("click");
    }


    render() {
        let usuario;
        let inicio;
        if (this.props.login == 0) {
            inicio = <li><a className="modal-trigger" href='#modal1'><span id="txt_boton_entrar">Entrar</span></a></li>
        } else {
            inicio = null;
        }
        let usuario_sm;
        let cerrar_sesion;
        if (this.props.login == 1) {
            usuario = <li>
                <a id="perfil" className="dropdown-trigger" ref={Dropdown => { this.Dropdown = Dropdown; }} data-target="dropdown1">
                    {this.props.primer_nombre} <i className="material-icons right">arrow_drop_down</i>
                </a>
                <ul id="dropdown1" className="dropdown-content" >
                    <li><a href="#" onClick={() => { this.props.updateStateComponent(1); this.GenerateClick(1) }} >Perfil</a></li>
                    <li><a href="#" onClick={() => { this.props.updateStateComponent(2); this.GenerateClick(2) }}>Configuración</a></li>
                    <li className="divider"></li>
                    <li><a onClick={() => {
                        this.props.changeLogin(); window.location.reload();
                    }}>Cerrar sesion</a></li>
                </ul>
            </li>
            usuario_sm = <div>

                <li><a href="#" onClick={() => { this.props.updateStateComponent(1); this.GenerateClick(1) }} >Perfil</a></li>
                <li><a href="#" onClick={() => { this.props.updateStateComponent(2); this.GenerateClick(2) }}>Configuracion</a></li>
            </div>
            cerrar_sesion =
                <li>


                    <a href="#!"> Cerrar Sesion </a>

                </li>



        }


        return (
            <div id="menu">
                <div className="navbar-fixed">

                    <nav>
                        <div className="nav-wrapper">
                            <Link
                                id="inicio"
                                activateclass="activate"
                                to="seccion1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            />
                            <Link
                                id="inicioMain"
                                onClick={() => { this.props.updateStateComponent(0); this.GenerateClick(0, "inicio") }}
                                activateclass="activate"
                                to="seccion1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <img className="brand-logo hide-on-med-and-down logo" alt="logo" src={this.state.logo}>
                                </img>
                            </Link>

                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className=" menuItems right hide-on-med-and-down">

                                <li id="">
                                    <a target="_blank" href="http://emmafig.com/"> Emmafig </a>
                                </li>
                                <li id="blog_li">
                                    <a target="_blank" href="http://blog.emmafig.com/"> Blog </a>
                                </li>

                                <li>
                                    <a href="https://www.facebook.com/fundacioninnovagen/" target="_blank">
                                        <i className="fa fa-facebook fa-lg"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/funinnovagen?igshid=1i9a8bm9m2kck" target="_blank">
                                        <i className="fa fa-instagram fa-lg"></i>
                                    </a>
                                </li>
                                <li>
                                    <a id="iconWSP" href="https://api.whatsapp.com/send?phone=573174412170" target="_blank">
                                        <i className="fa fa-whatsapp fa-lg"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </nav>


                </div>

                <Link
                    id="calculadora_section"
                    activateclass="activate"
                    to="contenedor-calculadora"
                    spy={true}
                    smooth={true}
                    offset={-23}
                    duration={500}

                />

                <Link
                    id="scroolCalculadora_sm"
                    activateclass="activate"
                    to="contenedor-calculadora"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}

                />
                <Link
                    id="citas_sm"
                    activateclass="activate"
                    to="citas"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}

                />
                <Link
                    id="scroolTestimonios_sm"
                    activateclass="activate"
                    to="testimonios"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}

                >
                </Link>
                <Link
                    id="scroolContacto_sm"
                    activateclass="activate"
                    to="contacto"
                    spy={true}
                    smooth={true}
                    offset={-63}
                    duration={500}

                >
                </Link>
                <ul className="sidenav" id="mobile-demo">
                    {usuario_sm}



                    <li id="">
                        <a target="_blank" href="http://emmafig.com/"> Emmafig </a>
                    </li>
                    <li id="blog_li">
                        <a target="_blank" href="http://blog.emmafig.com/"> Blog </a>
                    </li>

                    <li>

                        <div className="row ">
                            <div className="col s6 offset-s3">

                                <div className="col s4">
                                    <a href="https://www.facebook.com/fundacioninnovagen/" target="_blank">
                                        <i className="fa fa-facebook fa-lg"></i>
                                    </a>

                                </div>
                                <div className="col s4">
                                    <a href="https://instagram.com/funinnovagen?igshid=1i9a8bm9m2kck" target="_blank">
                                        <i className="fa fa-instagram fa-lg"></i>
                                    </a>
                                </div>
                                <div className="col s4">
                                    <a id="iconWSP" href="https://api.whatsapp.com/send?phone=573174412170" target="_blank">
                                        <i className="fa fa-whatsapp fa-lg"></i>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </li>

                </ul>

            </div>



        );


    }



}
function Perfil() {

}
export default Menu; // Don’t forget to use export default!