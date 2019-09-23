import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoFacebook: process.env.PUBLIC_URL + "/img/iconFacebook.png",
            hide: 0
        }
    }
    render() {
        return (
            <footer id="footer" className="page-footer">

                <div id="footer_container" className="container">

                </div>
                <div className="row">

                    <div className="col s6 m6 l3">
                        <div className="row">
                            <div className="col ">
                                <h5 className="titulo_footer">FUNDACIÓN INNOVAGEN </h5>


                            </div>
                            <div className="col">

                                <p id="little_text_footer" className="grey-text text-lighten-4">
                                    Somos una entidad privada, dedicada a la gestión del conocimiento para la busqueda de soluciones
                                    reales e innovadoras que contribuyan a promover la salud, la calidad de la vida y el bienestar social.
                                </p>
                            </div>

                        </div>

                    </div>


                    <div className="col s6 m6 l3">
                        <div className="row">
                            <div className="col s12 m12 l12">

                                <h5 className="titulo_footer">PRUEBAS MOLECULARES</h5>
                            </div>
                            <div className="col s12 m12 l12 ">


                                <div className="row" id="listPruebas" >


                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                    </div>
                                    <div className="col s10">
                                        <span>Estudio de biopsias</span>

                                    </div>
                                </div>
                                <div className="row" id="listPruebas">


                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                    </div>
                                    <div className="col s10">
                                        <span>Citologia en base liquida ginecológica</span>

                                    </div>
                                </div>
                                <div className="row" id="listPruebas">


                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                    </div>
                                    <div className="col s10">
                                        <span>Citologia en base liquida no-ginecológica</span>

                                    </div>
                                </div>
                                <div className="row" id="listPruebas">


                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                    </div>
                                    <div className="col s10">
                                        <span>Estudios de inmunohistoquimica</span>

                                    </div>
                                </div>
                                <div className="row" id="listPruebas">
                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                    </div>
                                    <div className="col s10">
                                        <span>Marcadores pronósticos Ki-67/p16</span>

                                    </div>
                                </div>
                                <div className="row" id="listPruebas">
                                    <div className="col s2 m2 l1">
                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>

                                    </div>
                                    <div className="col s10">
                                        <span>Prueba ADN para el virus del papiloma humano</span>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col s6 m6 l3">

                        <div className="row">
                            <div className="col s12 m12 l12">
                                <h5 className="titulo_footer">ENLACES DE INTERES</h5>

                            </div>
                            <div className="col s12 m6 l12">
                                <div className="row" id="listPruebas">
                                    <div className="col s2 m2 l1">


                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                    </div>


                                    <div className="col s10 m10 l11">

                                        <a href="#" className="r-link ai-element ai-element_type2 ai-element3" id="linksFooter">
                                            Blog
                    </a>
                                    </div>
                                    <div className="col s12 m12 l12">
                                        <div className="row" id="listPruebas">
                                            <div className="col s2 m2 l1">


                                                <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                            </div>
                                            <div className="col s10 m10 l11">


                                                <a className="r-link ai-element ai-element_type2 ai-element3" id="linksFooter">
                                                    Preguntas y respuestas frecuentes
                                    </a>
                                            </div>
                                            <div className="col s12 m12 l12">
                                                <div className="row" id="listPruebas">
                                                    <div className="col s2 m2 l1">


                                                        <i className="tiny material-icons" id="iconFooter">fiber_manual_record</i>
                                                    </div>
                                                    <div className="col s10 m10 l11">
                                                        <a href="http://fig.org.co/pgnafig/" target="_blank" className="r-link ai-element ai-element_type2 ai-element3" id="linksFooter">
                                                            Fundacion Innovagen
                                    </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col s6 m6 l3">
                    <div className="row">
        <div className="col">
            <h5 className="titulo_footer">SOCIAL MEDIA</h5>
            <p className="grey-text text-lighten-4">
                Lorem Ipsum is simply dummy text of the
                printing and typesetting industry
            </p>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <a href="https://www.facebook.com/fundacioninnovagen/" target="_blank">
                <i className="fa fa-facebook fa-lg"></i>
            </a>
        </div>
        <div className="col">
            <a href="https://instagram.com/funinnovagen?igshid=1i9a8bm9m2kck" target="_blank">
                <i className="fa fa-instagram fa-lg"></i>
            </a>
        </div>
        <div className="col">
            <a id="iconWSP" href="https://api.whatsapp.com/send?phone=573174412170" target="_blank">
                <i className="fa fa-whatsapp fa-lg"></i>
            </a>
        </div>
    </div>
                    </div>

                </div>

                <div id="footer_copyright" className="footer-copyright">
                    <div className="container">
                        <p >Con cariño para las mujeres del mundo; FUNDACION INNOVAGEN y SENA SECCIONAL - POPAYÁN 2019</p>

                    </div>
                </div>
            </footer>


        );
    }
}
export default Footer;