import React, { Component } from 'react';
import './Cuestionario.css'
import axios from "axios";

class Cuestionario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            btn_next: process.env.PUBLIC_URL + "/img/next-btn.svg",
            btn_prev: process.env.PUBLIC_URL + "/img/prev-btn.svg",
            item: 1,
            selectedOptions: [0, 0, 0, 0, 0, 0],
            selectedValues: [0, 0, 0, 0, 0, 0],
            style: {
                opacity: 0,
                transform: 'translate3d(50%,0,0)'
            },

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.nextHandleMouseOver = this.nextHandleMouseOver.bind(this);
        this.nextHandleMouseOut = this.nextHandleMouseOut.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.prevHandleMouseOver = this.prevHandleMouseOver.bind(this);
        this.prevHandleMouseOut = this.prevHandleMouseOut.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.mountStyle = this.mountStyle.bind(this);
        this.unMountStyle = this.unMountStyle.bind(this);
        this.countOptSelecteds = this.countOptSelecteds.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
        this.updateSeguimiento = this.updateSeguimiento.bind(this);

    }

    /* 
    OBTENER LA FECHA FINAL Y CALCULAR LA DIFERENCIA DE TIEMPO ENTRE LA FECHA INICIAL Y LA FINAL
    getEndTask() {
        let current_datetime = new Date()
        let fechaFinal = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
        var fechaInicial = this.props.hora_i;
        //console.log(fechaInicial);
        var hora_inicial = new Date(fechaInicial);
        var hora_final = new Date(fechaFinal);
    
        
    
        this.props.update_hf(fechaFinal);
    
        var dif = hora_inicial.getTime() - hora_final.getTime()
      
        var Segundos_de_T1_a_T2 = dif / 1000;
        var endTaskfinal = Math.abs(Segundos_de_T1_a_T2);
        var dataform = new FormData();
        dataform.append("nombre", "responder preguntas de la calculadora");
        dataform.append("task_end", endTaskfinal+" segundos");
        dataform.append("version", "emmafig V1");
        axios.post("http://localhost/api1/timeTask",dataform).then(
            res =>{
                var result = res.data;
                console.log(result)
            }
        )
        
    
    
    }
    
    */


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    countOptSelecteds(args) {
        const arrSum = args.reduce((total, num) => total + num);
        return arrSum;
    }

    closeInfo(event) {
        let info_end = document.getElementById("info-fin-cuestionario");
        info_end.style.clipPath = "circle(0%)";
    }

    updateSeguimiento(numero_pregunta) {
        console.log(localStorage.getItem('id_seguimiento'))
        axios.post('https://emmafig.com/api1/updateResSeguimiento', {
            //axios.post('http://localhost/api1/updateResSeguimiento',{
            "id_seguimiento": localStorage.getItem('id_seguimiento'),
            "pregunta_resuelta": numero_pregunta
        }).then(res => {

        })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }

    handleOptionChange(event) {
        let circuloOk;
        let textoOk;
        let op = event.target.id.substr(2, 1);
        console.log(event.target.value);
        let opts = this.state.selectedOptions;
        let values = this.state.selectedValues;
        let info_end = document.getElementById("info-fin-cuestionario");
        if (op == 1) {
            if (event.target.value == 0) {
                opts[op - 1] = 0;
            } else {
                opts[op - 1] = 1;//la pregunta la asigna como diligenciada
                this.updateSeguimiento(op);
                values[op - 1] = event.target.value;
                if (this.countOptSelecteds(opts) == 6) {
                    info_end.style.clipPath = "circle(75%)";
                }
                this.setState({
                    selectedOptions: opts,
                    selectedValues: values
                });
                console.log(this.state.selectedValues);
                circuloOk = document.getElementById("circulo" + op);
                textoOk = document.getElementById("texto" + op);
                circuloOk.classList.remove("circulo");
                circuloOk.classList.remove("circulo-actual");
                circuloOk.classList.add("circulo-ok");
                textoOk.classList.remove("texto");
                textoOk.classList.add("texto-ok");
            }
        } else {
            opts[op - 1] = 1;//la pregunta la asigna como diligenciada
            this.updateSeguimiento(op);
            values[op - 1] = event.target.value;
            if (this.countOptSelecteds(opts) == 6) {
                info_end.style.clipPath = "circle(75%)";
            }
            this.setState({
                selectedOptions: opts,
                selectedValues: values
            });
            console.log(this.state.selectedValues);
            circuloOk = document.getElementById("circulo" + op);
            textoOk = document.getElementById("texto" + op);
            circuloOk.classList.remove("circulo");
            circuloOk.classList.remove("circulo-actual");
            circuloOk.classList.add("circulo-ok");
            textoOk.classList.remove("texto");
            textoOk.classList.add("texto-ok");
        }

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    nextHandleMouseOver() {
        this.setState({
            btn_next: process.env.PUBLIC_URL + "/img/next-btn-hover.svg"
        });
    }

    nextHandleMouseOut() {
        this.setState({
            btn_next: process.env.PUBLIC_URL + "/img/next-btn.svg"
        });
    }
    nextClick() {

        let next = this.state.item;
        const cont_btn_ant = document.getElementById("cont_btn_prev");
        const cont_btn_next = document.getElementById("cont_btn_next");
        const btn_next = document.getElementById("btn_next");

        let opts = this.state.selectedOptions;
        let item = this.state.item;

        const info = document.getElementById("info" + item);
        if (opts[item - 1] == 1) {
            info.style.display = "none";
            if (this.state.item < 6) {
                next = next + 1;
                this.setState({
                    item: next
                })

                cont_btn_ant.style.display = "block";
                cont_btn_next.classList.remove("offset-l5");
                cont_btn_next.classList.remove("offset-s4");
                cont_btn_next.classList.remove("offset-m5");
                btn_next.classList.remove("center");
                btn_next.classList.add("left");
                const circuloPrev = document.getElementById("circulo" + (next - 1));
                const circuloActual = document.getElementById("circulo" + next);
                const lineaOk = document.getElementById("linea" + (next - 1));
                const preguntaOk = document.getElementById("cont-pregunta" + (next - 1));
                const preguntaActual = document.getElementById("cont-pregunta" + next);
                const opcRespOK = document.getElementById("opc-respuesta-pregunta" + (next - 1));
                const opcRespActual = document.getElementById("opc-respuesta-pregunta" + next);
                if (opts[next - 1] == 0) {
                    circuloActual.classList.remove("circulo");
                    circuloActual.classList.add("circulo-actual");
                } else {
                    circuloActual.classList.add("circulo-ok-actual");
                }
                circuloPrev.classList.remove("circulo-ok-actual");
                circuloPrev.classList.remove("circulo-actual");
                circuloPrev.classList.add("circulo");
                lineaOk.classList.toggle("linea-ok");
                preguntaOk.style.display = "none";
                opcRespOK.style.display = "none";
                opcRespActual.style.display = "block";
                preguntaActual.style.display = "block";
            } else if (this.countOptSelecteds(opts) == 6) {
                let etnia_afro = 0;
                let etnia_indigena = 0;
                if (this.state.selectedValues[5] == '1') {
                    etnia_afro = 1
                } else if (this.state.selectedValues[5] == '2') {
                    etnia_indigena = 1;
                }
                axios.get('http://104.197.119.186/app/', {
                    params: {
                        Edad_cat: this.state.selectedValues[0],
                        hijos_may_3: this.state.selectedValues[1],
                        comp_sex_may_2: this.state.selectedValues[2],
                        con_pareja: this.state.selectedValues[3],
                        sex_antes_15: this.state.selectedValues[4],
                        etnia_indigena: this.state.selectedValues[5],
                        etnia_afro: etnia_afro
                    }
                }).then(res => {
                    this.props.changeComponente(res.data.riesgo, this.state.selectedValues);
                    if (this.props.login == 1) {
                        this.saveResult();
                    }

                })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        }
                    });

            }
        } else {
            info.style.display = "block";
            info.classList.remove("info-animation");
            void info.offsetWidth;
            info.classList.add("info-animation");
        }
    }

    saveResult = () => {
        axios.post('https://emmafig.com/api1/saveEstimacion', {
            //axios.post('http://localhost/api1/saveEstimacion', {            
            valor_respuesta1: this.state.selectedValues[0],
            valor_respuesta2: this.state.selectedValues[1],
            valor_respuesta3: this.state.selectedValues[2],
            valor_respuesta4: this.state.selectedValues[3],
            valor_respuesta5: this.state.selectedValues[4],
            valor_respuesta6: this.state.selectedValues[5],
            id_atl_usuario: localStorage.getItem('id')

        }).then(res => {
            console.log('Estimacion guardad');
            //this.props.changeComponente(res.data.riesgo, this.state.selectedValues);
        })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }


    prevHandleMouseOver() {
        this.setState({
            btn_prev: process.env.PUBLIC_URL + "/img/prev-btn-hover.svg"
        });
    }

    prevHandleMouseOut() {
        this.setState({
            btn_prev: process.env.PUBLIC_URL + "/img/prev-btn.svg"
        });
    }

    prevClick() {
        console.log(this.state.item);
        let next = this.state.item;
        const cont_btn_ant = document.getElementById("cont_btn_prev");
        const cont_btn_next = document.getElementById("cont_btn_next");
        const btn_next = document.getElementById("btn_next");
        if (this.state.item > 1) {
            cont_btn_ant.style.display = "block";
            cont_btn_next.classList.add("left");
            btn_next.classList.remove("offset-l5");
            btn_next.classList.remove("offset-s4");
            btn_next.classList.remove("offset-m5");
            btn_next.classList.remove("center");
            next = next - 1;
            this.setState({
                item: next
            });
            if (next == 1) {
                cont_btn_ant.style.display = "none";
                cont_btn_next.classList.add("offset-l5");
                cont_btn_next.classList.add("offset-s4");
                cont_btn_next.classList.add("offset-m5");
                btn_next.classList.remove("left");
                btn_next.classList.add("center");
            }
            let opts = this.state.selectedOptions;
            const circuloPrev = document.getElementById("circulo" + (next + 1));
            const circuloActual = document.getElementById("circulo" + next);
            const lineaOk = document.getElementById("linea" + (next));
            const preguntaOk = document.getElementById("cont-pregunta" + (next + 1));
            const preguntaActual = document.getElementById("cont-pregunta" + next);
            const opcRespOK = document.getElementById("opc-respuesta-pregunta" + (next + 1));
            const opcRespActual = document.getElementById("opc-respuesta-pregunta" + next);
            if (opts[next - 1] == 0) {
                circuloActual.classList.remove("circulo");
                circuloActual.classList.remove("circulo-ok");
                circuloActual.classList.add("circulo-actual");
            }
            else {
                circuloActual.classList.add("circulo-ok-actual");
            }
            circuloPrev.classList.remove("circulo-ok-actual");
            circuloPrev.classList.remove("circulo-actual");
            circuloPrev.classList.add("circulo");
            lineaOk.classList.remove("linea-ok");
            lineaOk.classList.add("linea");
            preguntaOk.style.display = "none";
            opcRespOK.style.display = "none";
            opcRespActual.style.display = "block";
            preguntaActual.style.display = "block";
        }
    }

    componentDidMount() {
        setTimeout(this.mountStyle, 1) //call the into animiation
        const cont_btn_ant = document.getElementById("cont_btn_prev");
        const cont_btn_next = document.getElementById("cont_btn_next");
        const btn_next = document.getElementById("btn_next");
        cont_btn_ant.style.display = "none";
        cont_btn_next.classList.add("offset-l5");
        cont_btn_next.classList.add("offset-s4");
        cont_btn_next.classList.add("offset-m5");
        btn_next.classList.remove("left");
        btn_next.classList.add("center");
    }



    mountStyle() {
        this.setState({
            style: {
                opacity: 1,
                transitionProperty: 'translate3d(100%,0,0)',
                transitionDuration: '1s'
            }
        });
    }
    unMountStyle() {
        this.setState({
            style: {
                opacity: 0,
                transitionProperty: 'translate3d(-50%,0,0)',
                transitionDuration: '1s'
            }
        });
    }



    render() {

        return (

            <div style={this.state.style} id="contenedor-cuestionario">
                <div id="info-fin-cuestionario" className="info-fin-cuestionario">
                    <span>
                        <i id="close-info" className="small material-icons" onClick={this.closeInfo}>highlight_off</i>
                    </span>
                    <p>
                        !Felicitaciones¡
                    </p>
                    <p>Has terminado el cuestionario por favor presione siguiente para obtener el resultado</p>
                </div>
                <div className="row">
                    <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3 encabezado">
                        <h1 id="titulo-cal" className="flow-text">Calcula el nivel de riesgo que presentas</h1>
                        <h6 id="subtitulo-cal" className="center-align ">Responde a las siguientes preguntas y obten un resultado verdadero</h6>
                    </div>
                </div>
                <div className="row wrapper" >
                    <div>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68" preserveAspectRatio="xMidYMid meet">
                            <circle id="circulo1" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo-actual" />
                            <text id="texto1" x="27" y="44" className="texto-actual">1</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea1" className="linea" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C6C8C7" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo2" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto2" x="27" y="44" className="texto">2</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea2" className="linea" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" stroke="#C6C8C7" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo3" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto3" x="27" y="44" className="texto">3</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea3" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" className="linea" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo4" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto4" x="27" y="44" className="texto">4</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea4" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" className="linea" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo5" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto5" x="27" y="44" className="texto">5</text>
                        </svg>
                    </div>
                    <div className="contenedor-linea">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 70">
                            <line id="linea5" x1="0" y1="35" x2="200" y2="35"
                                strokeWidth="2" className="linea" />
                        </svg>
                    </div>
                    <div className="item-cuestionario">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68 68">
                            <circle id="circulo6" cx="34" cy="34" r="32.6"
                                strokeWidth="2" className="circulo" />
                            <text id="texto6" x="27" y="44" className="texto">6</text>
                        </svg>
                    </div>
                    <div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div id="cont-pregunta1" className="row" pgindex="1">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta1" className="center-align contenido-pregunta">1. ¿Cuantos años tienes?</h4>
                            <p id="info1" className="center-align cuestionario-info">Por favor contesta esta pregunta para continuar</p>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta1" className="row" oprindex="1">
                        <div className="col l2 s6 offset-s3 offset-l5">
                            <select id="op11" className="browser-default selectEdad" onChange={this.handleOptionChange} defaultValue={0}>
                                <option value="0">Escoge un opción</option>
                                <option value="1">Menor de 15 años</option>
                                <option value="2">Entre 15 y 20 años</option>
                                <option value="3">Entre 21 y 30 años</option>
                                <option value="4">Entre 31 y 50 años</option>
                                <option value="5">Mayor de 50 años</option>
                            </select>
                        </div>
                        {/*<label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op11" className="with-gap" name="group1" type="radio" value="1" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Sí</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op12" className="with-gap" name="group1" type="radio" value="0" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
        </label>*/}
                    </div>
                    <div id="cont-pregunta2" className="row" pgindex="2">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta2" className="center-align contenido-pregunta">2. ¿Tienes más de tres hijos?</h4>
                            <p id="info2" className="center-align cuestionario-info">Por favor contesta esta pregunta para continuar</p>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta2" className="row" oprindex="2">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op21" className="with-gap" name="group2" type="radio" value="1" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Sí</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op22" className="with-gap" name="group2" type="radio" value="0" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta3" className="row" pgindex="3">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta3" className="center-align contenido-pregunta">3. ¿Has tenido mas de dos compañeros sexuales?</h4>
                            <p id="info3" className="center-align cuestionario-info">Por favor contesta esta pregunta para continuar</p>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta3" className="row" oprindex="3">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op31" className="with-gap" name="group3" type="radio" value="1" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Sí</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op31" className="with-gap" name="group3" type="radio" value="0" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta4" className="row" pgindex="4">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta4" className="center-align contenido-pregunta">4. ¿Tienes pareja actualmente?</h4>
                            <p id="info4" className="center-align cuestionario-info">Por favor contesta esta pregunta para continuar</p>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta4" className="row" oprindex="4">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op41" className="with-gap" name="group4" type="radio" value="1" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Sí</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op42" className="with-gap" name="group4" type="radio" value="0" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta5" className="row" pgindex="5">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta5" className="center-align contenido-pregunta">5. ¿Has tenido relaciones sexuales antes de los 15 años?</h4>
                            <p id="info5" className="center-align cuestionario-info">Por favor contesta esta pregunta para continuar</p>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta5" className="row" oprindex="5">
                        <label className="col s2 m2 l1 offset-s4 offset-m4 offset-l5">
                            <input id="op51" className="with-gap" name="group5" type="radio" value="1" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Sí</span>
                        </label>
                        <label className="col s2 m2 l1">
                            <input id="op52" className="with-gap" name="group5" type="radio" value="0" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">No</span>
                        </label>
                    </div>
                    <div id="cont-pregunta6" className="row" pgindex="6">
                        <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
                            <h4 id="pregunta6" className="center-align contenido-pregunta">6. ¿Perteneces a alguna etnia?</h4>
                            <p id="info6" className="center-align cuestionario-info">Por favor contesta esta pregunta para continuar</p>
                        </div>
                    </div>
                    <div id="opc-respuesta-pregunta6" className="row" oprindex="6">
                        <label className="col s2 m2 l1 offset-m2 offset-l4 offset-s5">
                            <input id="op61" className="with-gap" name="group6" type="radio" value="1" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Afro</span>
                        </label>
                        <label className="col s2 m2 l1 offset-s5">
                            <input id="op62" className="with-gap" name="group6" type="radio" value="2" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Indigena</span>
                        </label>
                        <label className="col s2 m2 l2 offset-s5 offset-m1">
                            <input id="op62" className="with-gap" name="group6" type="radio" value="0" onChange={this.handleOptionChange} />
                            <span className="contenido-respuesta">Ninguna</span>
                        </label>
                    </div>
                </form>
                <div id="contenedor-botones" className="row">
                    <div id="cont_btn_prev" className="col s4 m3 l2 offset-s2 offset-l4 offset-m3">
                        <img id="btn_prev" onMouseOver={this.prevHandleMouseOver} onMouseOut={this.prevHandleMouseOut} onClick={this.prevClick} src={this.state.btn_prev} className="boton right"></img>
                    </div>
                    <div id="cont_btn_next" className="col s4 m3 l2">
                        <img id="btn_next" onMouseOver={this.nextHandleMouseOver} onMouseOut={this.nextHandleMouseOut} onClick={this.nextClick} src={this.state.btn_next} className="boton left"></img>
                    </div>
                </div>
            </div>


        );

    }
}

export default Cuestionario; // Don’t forget to use export default!