import React, { Component } from 'react';

import Footer from '../footer/Footer';

import '../menu/Menu.css'
import './Terminos.css';

class Terminos extends Component {
    constructor(props) {

        super(props);
        this.state = {
            logo: process.env.PUBLIC_URL + "/img/logo-Emmafig4.png"

        }

    }
    componentDidMount() {


    }

    render() {
        return (

            <div className="terminos_condiciones">
                <div className="navbar-fixed">

                    <nav>
                        <div className="nav-wrapper">

                            <img className="brand-logo hide-on-med-and-down logo" alt="logo" src={this.state.logo}>
                            </img>

                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            
                        </div>
                    </nav>


                </div>





                <div className="container">
                    <h1>TERMINOS Y CONDICIONES</h1>
                    <div className="row">
                        <div className=" col m12">
                            En la Fundación InnovaGen buscamos contribuir a la generación de nuevo conocimiento científico y tecnológico
                            a través de la gestión y ejecución de investigación básica y aplicada en biología molecular, medicina y
                            ciencias afines; así como promover, desarrollar y prestar servicios de salud a la población, soportados en
                            tecnologías de punta para el mejoramiento de la calidad de vida y la salud pública de la región y el país.
                            Por tal razón, queremos seguir comunicándonos con Usted para informarle sobre las novedades de nuestros
                            productos y servicios, así como de las promociones y/o campañas sobre los mismos, realizar encuestas de
                            satisfacción y fortalecer nuestros canales de servicio al cliente. Nuestros servicios son:

                        </div>
                        <div className="col m8" id="div2">
                            <div className="col m12 resetPading">
                                <p>

                                    •	Prevención de cáncer de cuello uterino con las siguientes pruebas:
                                </p>

                            </div>
                            <div className="col m11 offset-m1">

                                <i id="iconFloat" class="material-icons">check</i>
                                <p>

                                    Citología en base líquida
                            </p>
                            </div>
                            <div className="col m11 offset-m1">


                                <i id="iconFloat" class="material-icons">check</i>
                                <p>
                                    Prueba de ADN para la detección del Virus del Papiloma Humano
                            </p>
                            </div>
                            <div className="col m11 offset-m1">


                                <i id="iconFloat" class="material-icons">check</i>
                                <p>

                                    Marcadores pronostico Ki – 67 y p16
                            </p>
                            </div>
                            <div className="col m11 offset-m1">


                                <i id="iconFloat" class="material-icons">check</i>
                                <p>

                                    Estudio histopatológico de biopsias
                            </p>
                            </div>
                            <div className="col m12">
                                <p>

                                    •	Prevención de cáncer gástrico con las siguientes pruebas:
                                </p>

                            </div>
                            <div className="col m11 offset-m1">


                                <i id="iconFloat" class="material-icons">check</i>
                                <p>

                                    Prueba de antígenos fecales para la detección de Helicobacter pylori
                            </p>
                            </div>
                            <div className="col m11 offset-m1">

                                <i id="iconFloat" class="material-icons">check</i>
                                <p>

                                    Estudio histopatológico de biopsias
                            </p>
                            </div>

                            <div className="col m12">
                                <p>

                                    •	Prueba de paternidad
                                </p>
                            </div>





                        </div>
                        <div className="col m12" id="div2" >
                            <p>
                                En el cumplimiento de la reglamentación de protección de datos personales,
                                Ley 1581 de 2012 “Por la cual se dictan disposiciones generales para la protección de datos personales”,
                                 queremos comunicarle que su información se encuentra incorporada en la base de datos de la Fundación
                                 InnovaGen, la cual ha sido recolectada a través de distintas actividades comerciales y de mercadeo.
                                 Según nuestras políticas de tratamiento de datos personales, los mecanismos a través de los cuales
                                 hacemos uso de estos, se manejan bajo estrictas medidas de seguridad, buscando impedir la adulteración,
                                 pérdida, consulta o distribución y acceso no autorizado o fraudulento de la información.
                            </p>

                        </div>
                        <div className="col m12" id="div2">
                            <p>
                                Para ejercer su derecho como titular de los datos, Usted podrá acceder a la verificación, rectificación,
                                actualización, cancelación y oposición del procesamiento de los mismos, comunicándose al correo electrónico
                                contacto@fundacioninnovagen.org, a las líneas de atención al usuario 8372935 – 8382135 – 3174412170 o
                                dirigiéndose a las instalaciones de la Fundación ubicada en la calle 15N N° 6 - 40 de la ciudad de Popayán.
                                 Si en el término de treinta (30) días hábiles contados a partir de ésta comunicación, no hemos recibido
                                 alguna sugerencia para el tratamiento de sus datos, la Fundación podrá seguir haciendo realizando el uso
                                 de los mismos para los fines antes descritos.
                            </p>

                        </div>
                        <div className="col m12" id="div2">
                            <p>
                                Agradecemos la atención prestada y esperamos poder seguir en contacto con Usted.
                            </p>

                        </div>
                        <div className="col m12" id="div2">
                            <p>
                                Atentamente,
                            </p>

                        </div>
                        <div className="col m12" id="div2">
                            <p>
                                Fundación InnovaGen
                            </p>

                        </div>
                        <div className="col m12" >
                            <p>
                                Área de Comunicaciones y Mercadeo
                            </p>

                        </div>


                    </div>

                </div>
                <Footer />




            </div>
        );
    }


}
export default Terminos;