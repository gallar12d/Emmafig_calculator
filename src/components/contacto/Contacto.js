import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';



import './Contacto.css'

const Marker = ({ src }) => <img src={src} id="marker" />;


const AnyReactComponent = ({ text }) => <div>{text}</div>;
/*window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    alert(window.orientation);
}, false);*/

//const Marker = ({ txt }) => <div>{txt}</div>  ;


class Contacto extends Component {



    constructor(props) {
        super(props);
        this.state = {
            img_marker: process.env.PUBLIC_URL + "/img/marker.png",
            hide: 0,
            sede: false,

            zoom: 17,
            lat: 2.451680,
            lng: -76.601451,
            urlMap: "https://www.google.com/maps/dir//Fundaci%C3%B3n+InnovaGen,+Cl.+11+%23%23+7+12,+Popay%C3%A1n,+Cauca/@2.4516693,-76.6025416,18z/data=!4m16!1m6!3m5!1s0x8e300374b8ac6ebb:0x2d4a45d11cc15c70!2sFundaci%C3%B3n+InnovaGen!8m2!3d2.4516693!4d-76.6014473!4m8!1m0!1m5!1m1!1s0x8e300374b8ac6ebb:0x2d4a45d11cc15c70!2m2!1d-76.6014473!2d2.4516693!3e2"

        }

    }



    updateMap(lat, lng) {

        this.setState({


            lat: Number(lat),
            lng: Number(lng)

        });



    }

    routesFunction(urlGMAP){
        this.setState({
            urlMap: urlGMAP
        });

    }

    showHorarios(sede, horario_semana, horario_sabado) {

        var btnPopayan = document.getElementById("btnPopayan");
        var btnSant = document.getElementById("btnSant");
        var btnCali = document.getElementById("btnCali");
        var btnPopayanSmall = document.getElementById("btnPopayanSmall");
        var btnPopayanMed = document.getElementById("btnPopayanMed");
        var btnSantMed = document.getElementById("btnSantMed");
        var btnSantSmall = document.getElementById("btnSantSmall")
        var btnCaliMed = document.getElementById("btnCaliMed");
        var btnCaliSmall = document.getElementById("btnCaliSmall");

        var h_semana = document.getElementById("horario_semana");
        var h_sabado = document.getElementById("horario_sabado");
        var h_semana_med = document.getElementById("horario_semana_med");
        var h_sabado_med = document.getElementById("horario_sabado_med");
        var h_semana_small = document.getElementById("horario_semana_small");
        var h_sabado_small = document.getElementById("horario_sabado_small");

        
        var telefono1_sede = document.getElementById("telefono1_sede");
        var telefono1_sede_small = document.getElementById("telefono1_sede_small");
        var telefono1_sede_med = document.getElementById("telefono1_sede_med");
        var telefono2_sede = document.getElementById("telefono2_sede");
        var telefono2_sede_small = document.getElementById("telefono2_sede_small");
        var telefono2_sede_med = document.getElementById("telefono2_sede_med");

        if (sede == 1) {
            //sede de popayan

            //agregar recuadro que identifique a cual dio click

            btnPopayan.classList.remove("sede_div")
            btnPopayan.classList.add("sede_div_clicked");
            btnPopayanMed.classList.remove("sede_div")
            btnPopayanMed.classList.add("sede_div_clicked");
            btnPopayanSmall.classList.remove("sede_div")
            btnPopayanSmall.classList.add("sede_div_clicked");
            if (btnCali.classList.contains("sede_div_clicked") && btnCaliMed.classList.contains("sede_div_clicked") && btnCaliSmall.classList.contains("sede_div_clicked")) {
                btnCali.classList.remove("sede_div_clicked")
                btnCali.classList.add("sede_div")
                btnCaliMed.classList.remove("sede_div_clicked")
                btnCaliMed.classList.add("sede_div")
                btnCaliSmall.classList.remove("sede_div_clicked")
                btnCaliSmall.classList.add("sede_div")
            } else if (btnSant.classList.contains("sede_div_clicked") && btnSantMed.classList.contains("sede_div_clicked") && btnSantSmall.classList.contains("sede_div_clicked")) {
                btnSant.classList.remove("sede_div_clicked")
                btnSant.classList.add("sede_div");
                btnSantMed.classList.remove("sede_div_clicked")
                btnSantMed.classList.add("sede_div");
                btnSantSmall.classList.remove("sede_div_clicked")
                btnSantSmall.classList.add("sede_div");
            }
          

            telefono1_sede.innerHTML = "(2) 837 2935 - (2) 838 2135"
            telefono2_sede.innerHTML = "317 441 2170"
            telefono1_sede_small.innerHTML = "(2) 837 2935 - (2) 838 2135"
            telefono2_sede_small.innerHTML = "317 441 2170"
            telefono1_sede_med.innerHTML = "(2) 837 2935 - (2) 838 2135"
            telefono2_sede_med.innerHTML = "317 441 2170"

            this.updateMap(2.451680, -76.601451);
            this.routesFunction("https://www.google.com/maps/dir//Fundaci%C3%B3n+InnovaGen,+Cl.+11+%23%23+7+12,+Popay%C3%A1n,+Cauca/@2.4516693,-76.6025416,18z/data=!4m16!1m6!3m5!1s0x8e300374b8ac6ebb:0x2d4a45d11cc15c70!2sFundaci%C3%B3n+InnovaGen!8m2!3d2.4516693!4d-76.6014473!4m8!1m0!1m5!1m1!1s0x8e300374b8ac6ebb:0x2d4a45d11cc15c70!2m2!1d-76.6014473!2d2.4516693!3e2")




        } else if (sede == 2) {
            //sede santander
           
            btnSant.classList.remove("sede_div")
            btnSant.classList.add("sede_div_clicked");
            btnSantMed.classList.remove("sede_div")
            btnSantMed.classList.add("sede_div_clicked");
            btnSantSmall.classList.remove("sede_div")
            btnSantSmall.classList.add("sede_div_clicked");
            if (btnCali.classList.contains("sede_div_clicked") || btnCaliMed.classList.contains("sede_div_clicked") || btnCaliSmall.classList.contains("sede_div_clicked")) {
                btnCali.classList.remove("sede_div_clicked")
                btnCali.classList.add("sede_div")
                btnCaliMed.classList.remove("sede_div_clicked")
                btnCaliMed.classList.add("sede_div")
                btnCaliSmall.classList.remove("sede_div_clicked")
                btnCaliSmall.classList.add("sede_div")
            }
            else if (btnPopayan.classList.contains("sede_div_clicked") || btnPopayanMed.classList.contains("sede_div_clicked") || btnPopayanSmall.classList.contains("sede_div_clicked")) {
                btnPopayan.classList.remove("sede_div_clicked")
                btnPopayan.classList.add("sede_div");
                btnPopayanMed.classList.remove("sede_div_clicked")
                btnPopayanMed.classList.add("sede_div");
                btnPopayanSmall.classList.remove("sede_div_clicked")
                btnPopayanSmall.classList.add("sede_div");
            }
            
            telefono1_sede.innerHTML = "(2) 844 3333"
            telefono2_sede.innerHTML = "315 389 2600"
            telefono1_sede_small.innerHTML = "(2) 844 3333"
            telefono2_sede_small.innerHTML = "315 389 2600"
            telefono1_sede_med.innerHTML = "(2) 844 3333"
            telefono2_sede_med.innerHTML = "315 389 2600"

            this.updateMap(3.003815, -76.482547)
            this.routesFunction("https://www.google.com/maps/dir//Fundación+InnovaGen,+Cl.+2+%23%238-53,+Santander+de+Quilichao,+Cauca/@3.0038081,-76.4847344,17z/data=!3m1!4b1!4m16!1m6!3m5!1s0x8e307fdce17b8995:0x719d78d915028b90!2sFundación+InnovaGen!8m2!3d3.0038081!4d-76.4825457!4m8!1m0!1m5!1m1!1s0x8e307fdce17b8995:0x719d78d915028b90!2m2!1d-76.4825457!2d3.0038081!3e2")

        } else {
            //sede cali


            btnCali.classList.remove("sede_div")
            btnCali.classList.add("sede_div_clicked");
            btnCaliMed.classList.remove("sede_div")
            btnCaliMed.classList.add("sede_div_clicked");
            btnCaliSmall.classList.remove("sede_div")
            btnCaliSmall.classList.add("sede_div_clicked");
            if (btnPopayan.classList.contains("sede_div_clicked") && btnPopayanMed.classList.contains("sede_div_clicked") && btnPopayanSmall.classList.contains("sede_div_clicked")) {
                btnPopayan.classList.remove("sede_div_clicked")
                btnPopayan.classList.add("sede_div");
                btnPopayanMed.classList.remove("sede_div_clicked")
                btnPopayanMed.classList.add("sede_div");
                btnPopayanSmall.classList.remove("sede_div_clicked")
                btnPopayanSmall.classList.add("sede_div");
            } else if (btnSant.classList.contains("sede_div_clicked") && btnSantMed.classList.contains("sede_div_clicked") && btnSantSmall.classList.contains("sede_div_clicked")) {
                btnSant.classList.remove("sede_div_clicked")
                btnSant.classList.add("sede_div");
                btnSantMed.classList.remove("sede_div_clicked")
                btnSantMed.classList.add("sede_div");
                btnSantSmall.classList.remove("sede_div_clicked")
                btnSantSmall.classList.add("sede_div");
            }
            telefono1_sede.innerHTML = "No disponible"
            telefono2_sede.innerHTML = "3006586605"
            telefono1_sede_small.innerHTML = "No disponible"
            telefono2_sede_small.innerHTML = "3006586605"
            telefono1_sede_med.innerHTML = "No disponible"
            telefono2_sede_med.innerHTML = "3006586605"
            
            this.updateMap(3.399965, -76.546063)
            this.routesFunction("https://www.google.com/maps/dir//Cra.+64a+%235-20,+Cali,+Valle+del+Cauca/@3.3999716,-76.5470417,18.25z/data=!4m17!1m7!3m6!1s0x8e30a1542cd9578d:0x997c24c3108e8312!2sCra.+64a+%235-20,+Cali,+Valle+del+Cauca!3b1!8m2!3d3.3999499!4d-76.5460627!4m8!1m0!1m5!1m1!1s0x8e30a1542cd9578d:0x997c24c3108e8312!2m2!1d-76.5460627!2d3.3999499!3e2?hl=es-CO")


        }
        h_semana.innerHTML = horario_semana;
        h_sabado.innerHTML = horario_sabado;
        h_semana_med.innerHTML = horario_semana;
        h_sabado_med.innerHTML = horario_sabado;
        h_semana_small.innerHTML = horario_semana;
        h_sabado_small.innerHTML = horario_sabado;



    }

    hideOrShowDiv() {

        var info_div = document.getElementById("info_div_small");
        var info_div_medium = document.getElementById("info_div_medium");
        var btn_animate_info_div = document.getElementById("btn_animate_info_div");
        var btn_animate_div_medium = document.getElementById("btn_animate_info_div_medium");
        var arrow = document.getElementById("arrow_hide_or_show");
        var arrow_medium = document.getElementById("arrow_hide_or_show_medium");
        if (info_div_medium.classList.contains('info_div_medium') && this.state.hide === 0) {
            arrow_medium.innerHTML = "keyboard_arrow_right";
            info_div_medium.classList.remove("info_div_medium");

            info_div_medium.classList.add("info_div_hide");

            btn_animate_div_medium.classList.remove("btn_animate_div_in");

            btn_animate_div_medium.classList.add("btn_animate_div_out")

            this.setState({
                hide: 1
            })
        } else {
            if (this.state.hide === 0) {
                arrow_medium.innerHTML = "keyboard_arrow_right";

                info_div_medium.classList.remove("info_div_show")
                info_div_medium.classList.add("info_div_hide");
                info_div_medium.classList.add("show-on-small");
                btn_animate_div_medium.classList.remove("btn_animate_div_in")
                btn_animate_div_medium.classList.add("btn_animate_div_out")
                this.setState({
                    hide: 1
                })


            } else {
                arrow_medium.innerHTML = "keyboard_arrow_left";

                info_div_medium.classList.remove("info_div_hide");
                info_div_medium.classList.add("info_div_show");
                info_div_medium.classList.add("show-on-small");
                btn_animate_div_medium.classList.remove("btn_animate_div_out")
                btn_animate_div_medium.classList.add("btn_animate_div_in")
                //info_div.classList.add("info_div");
                this.setState({
                    hide: 0
                })

            }


        }

        if (info_div.classList.contains('info_div_small') && this.state.hide === 0) {
            arrow.innerHTML = "keyboard_arrow_right";
            info_div.classList.remove("info_div_small");

            info_div.classList.add("info_div_hide");
            info_div.classList.add("show-on-small");
            btn_animate_info_div.classList.remove("btn_animate_div_in")
            btn_animate_info_div.classList.add("btn_animate_div_out")
            this.setState({
                hide: 1
            })
        } else {

            if (this.state.hide === 0) {
                arrow.innerHTML = "keyboard_arrow_right";

                info_div.classList.remove("info_div_show")
                info_div.classList.add("info_div_hide");
                info_div.classList.add("show-on-small");
                btn_animate_info_div.classList.remove("btn_animate_div_in")
                btn_animate_info_div.classList.add("btn_animate_div_out")
                this.setState({
                    hide: 1
                })


            } else {
                arrow.innerHTML = "keyboard_arrow_left";

                info_div.classList.remove("info_div_hide");
                info_div.classList.add("info_div_show");
                info_div.classList.add("show-on-small");
                btn_animate_info_div.classList.remove("btn_animate_div_out")
                btn_animate_info_div.classList.add("btn_animate_div_in")
                //info_div.classList.add("info_div");
                this.setState({
                    hide: 0
                })

            }
        }




    }

    render() {
        return (

            <div id="contacto">
                <div className="row layoutMap" style={{ height: '85vh', width: '100%' }}>
                    <GMapReact lat={this.state.lat} lng={this.state.lng} img_marker={this.state.img_marker} center={this.state.center} />

                    <div className="hide-on-med-and-up ">
                        <div className="info_div_small " id="info_div_small">

                            <span onClick={this.hideOrShowDiv.bind(this)} id="btn_animate_info_div" className="btn_animate_div_in ">
                                <i className="Tiny material-icons" id="arrow_hide_or_show">keyboard_arrow_left</i>
                            </span>

                            <div className="row" id="head_info">

                                <div className="col s12 m12 l12 " id="head_info_div">


                                    <span className="headline"> Sedes:</span>

                                </div>






                            </div>

                                <div className="container_sedes">

                                <div className="col s12 m12 l12" id="btnPopayanSmall" className="sede_div_clicked" >

                                    <span className="headline_sede" onClick={() => this.showHorarios(1, "8AM - 6PM", "8AM - 12AM")}>Popayán</span>

                                </div>
                                <div className="col s12 m12 l12" id="btnSantSmall" className="sede_div" >

                                    <span className="headline_sede" onClick={() => this.showHorarios(2,"8AM - 6PM", "8AM - 12AM")}>Santander</span>

                                </div>
                                <div className="col s12 m12 l12" id="btnCaliSmall" className="sede_div">

                                    <span className="headline_sede" onClick={() => this.showHorarios(3, "8AM - 6PM", "8AM - 12AM")}>Cali</span>

                                </div>
                                <a className="routes" href={this.state.urlMap} target="_blank">¿Como llegar?</a>
                            </div>

                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline">Horarios </span>
                                    </h3>
                                </div>

                            </div>

                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext" > Lun - Viernes</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" id="horario_semana_small" >8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour" id="horario_sabado_small">8AM - 12AM</span>
                                </div>
                            </div>











                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline"><i className="small material-icons">call</i>Telefonos </span>
                                    </h3>
                                </div>

                            </div>

                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Fijo</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" id="telefono1_sede_small" >(2) 837 2935 - (2) 838 2135</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext cell_sede" id="cell_sede_small"> Celular</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour" id="telefono2_sede_small">317 441 2170</span>
                                </div>
                            </div>
















                        </div>

                    </div>

                    <div className="hide-on-small-only hide-on-large-only">
                        <div className="info_div_medium " id="info_div_medium">

                            <span onClick={this.hideOrShowDiv.bind(this)} id="btn_animate_info_div_medium" className="btn_animate_div_in ">
                                <i className="Tiny material-icons" id="arrow_hide_or_show_medium">keyboard_arrow_left</i>
                            </span>

                            <div className="row" id="head_info">




                                <div className="col s12 m12 l12 " id="head_info_div">


                                    <span className="headline"> Sedes:</span>

                                </div>
                            </div>


                                <div className="col s12 m12 l12" id="btnPopayanMed" className="sede_div_clicked"  >
                              
                                    <span className="headline_sede" onClick={() => this.showHorarios(1, "8AM - 6PM", "8AM - 12AM")}>Popayán</span>

                                </div>
                                <div className="col s12 m12 l12" id="btnSantMed" className="sede_div" >

                                    <span className="headline_sede" onClick={() => this.showHorarios(2, "8AM - 6PM", "8AM - 12AM")}>Santander</span>

                                </div>
                                <div className="col s12 m12 l12" id="btnCaliMed" className="sede_div">

                                    <span className="headline_sede" onClick={() => this.showHorarios(3, "8AM - 6PM", "8AM - 12AM")}>Cali</span>

                                </div>
                                <a className="routes" href={this.state.urlMap} target="_blank">¿Como llegar?</a>


                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline">Horarios </span>
                                    </h3>
                                </div>

                            </div>

                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext" > Lun - Viernes</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" id="horario_semana_med" >8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour" id="horario_sabado_med">8AM - 12AM</span>
                                </div>
                            </div>











                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline"><i className="small material-icons">call</i>Telefonos </span>
                                    </h3>
                                </div>

                            </div>

                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext" > Fijo</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" id="telefono1_sede_med">(2) 837 2935 - (2) 838 2135</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext cell_sede" id="cell_sede_med"> Celular</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour" id="telefono2_sede_med">317 441 2170</span>
                                </div>
                            </div>




                        </div>

                    </div>


                    <div className="hide-on-med-and-down">

                        <div className="info_div " id="info_div_large">

                            <div className="row " id="head_info">

                                <div className="col s12 m12 l12 " id="head_info_div">


                                    <span className="headline"> Sedes:</span>

                                </div>

                            </div>
                            <div className="container_sedes">

                                <div className="col s12 m12 l12" id="btnPopayan" className="sede_div_clicked" >

                                    <span className="headline_sede" onClick={() => this.showHorarios(1, "8AM - 6PM", "8AM - 12AM")}>Popayán</span>

                                </div>
                                <div className="col s12 m12 l12" id="btnSant" className="sede_div" >

                                    <span className="headline_sede" onClick={() => this.showHorarios(2, "8AM - 6PM", "8AM - 12AM")}>Santander</span>

                                </div>
                                <div className="col s12 m12 l12" id="btnCali" className="sede_div">

                                    <span className="headline_sede" onClick={() => this.showHorarios(3, "8AM - 6PM", "8AM - 12AM")}>Cali</span>

                                </div>
                                <a className="routes" href={this.state.urlMap} target="_blank">¿Como llegar?</a>
                            </div>
                            
                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline">Horarios </span>
                                    </h3>
                                </div>

                            </div>

                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext" > Lun - Viernes</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" id="horario_semana" >8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour" id="horario_sabado">8AM - 12AM</span>
                                </div>
                            </div>








                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline"><i className="small material-icons">call</i>Telefonos </span>
                                    </h3>
                                </div>

                            </div>

                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext" > Fijo</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" id="telefono1_sede" >(2) 837 2935 - (2) 838 2135</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext cell_sede" id="cell_sede"> Celular</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour" id="telefono2_sede">317 441 2170</span>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </div>




        );

    }
}

class GMapReact extends React.Component {

    createMapOptions(maps) {
        // next props are exposed at maps
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
        // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
        return {
            zoomControlOptions: {
                position: maps.ControlPosition.RIGHT_CENTER,
                style: maps.ZoomControlStyle.SMALL
            },
            mapTypeControlOptions: {
                position: maps.ControlPosition.TOP_RIGHT
            },
            mapTypeControl: true,
            styles: [
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#e0efef"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "hue": "#1900ff"
                        },
                        {
                            "color": "#c0e8e8"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": 700
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#7dcdcd"
                        }
                    ]
                }
            ]
        };
    }


    render() {

        const handleApiLoaded = (map, maps) => {
            return {
                zoomControlOptions: {
                    position: maps.ControlPosition.RIGHT_CENTER,
                    style: maps.ZoomControlStyle.SMALL
                },
                mapTypeControlOptions: {
                    position: maps.ControlPosition.TOP_RIGHT
                },
                mapTypeControl: true,

            };
        };
        /*
        const Markers = 
                
                    <Marker
                        // required props
                        lat={2.451680}
                        lng={-76.601451}
                        src={this.props.img_marker}
                        // any user props
                        {...markerDescriptions}
                        />
        */


        return (
            <GoogleMapReact
                options={this.createMapOptions}
                bootstrapURLKeys={{ key: 'AIzaSyAp9u7X1d-wgHul4HPXzoDj93WxPzMqxqM' }}
                defaultCenter={{ lat: 2.451680, lng: -76.601451 }}
                center={{ lat: this.props.lat, lng: this.props.lng }}
                defaultZoom={18}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}

                yesIWantToUseGoogleMapApiInternals
            >





                <Marker
                    lat={2.451680}
                    lng={-76.601451}

                    src={this.props.img_marker}

                //src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg"
                //txt ="MY MARKER"

                />
                <Marker
                    lat={3.003815}
                    lng={-76.482547}
                    src={this.props.img_marker}
                />
                <Marker
                    lat={3.399965}
                    lng={-76.546063}
                    src={this.props.img_marker}
                />



            </GoogleMapReact>)

    }
}


export default Contacto;