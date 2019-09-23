import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";

//import { ValidatorComponent,ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



class Editprofile extends Component {
    constructor(props) {

        super(props);
        this.state = {

        }

    }

    componentDidMount() {
        M.Collapsible.init(this.Collapsible);
        M.Tabs.init(this.Tabs);

    }
    validarFormulario(form, e) {
        e.preventDefault()
        var formTap = document.querySelector("#" + form + "");


        if (formTap.checkValidity()) {

            var dataUpdate = new FormData();
            var id_usuario = localStorage.getItem('id');
            //continuar con el proceso de actualizar la informacion en la base de datos
            var loader = document.getElementById("loaderEdit");
            switch (form) {
                case 'formPersonalInfo':
                   
                    loader.style.display = "inline-block"
                    dataUpdate.append("bandera_update", 'nombres')
                    dataUpdate.append("id_usuario", id_usuario)
                    dataUpdate.append("primer_nombre", document.getElementById("primer_nombre").value)
                    dataUpdate.append("segundo_nombre", document.getElementById("segundo_nombre").value)
                    dataUpdate.append("primer_apellido", document.getElementById("primer_apellido").value)
                    dataUpdate.append("segundo_apellido", document.getElementById("segundo_apellido").value)
                    axios.post("http://fig.org.co/atlanticv2/usuarios/updateUserEmmafig", dataUpdate)
                        .then(res => {
                            loader.style.display = "none"
                            document.getElementById("primer_nombre").value ="";
                            document.getElementById("segundo_nombre").value ="";
                            document.getElementById("primer_apellido").value ="";
                            document.getElementById("segundo_apellido").value ="";
                            alert("usuario actualizado correctamente")
                            let result = res.data;
                            console.log(result)
                            window.location.reload()

                        })
                    break;
                case 'emailForm':
                    loader.style.display = "inline-block"
                    dataUpdate.append("email", document.getElementById("email").value)
                    dataUpdate.append("bandera_update", 'email')
                    dataUpdate.append("id_usuario", id_usuario)
                    axios.post("http://fig.org.co/atlanticv2/usuarios/updateUserEmmafig", dataUpdate)
                        .then(res => {
                            document.getElementById("email").value ="";
                            alert("usuario actualizado correctamente")
                            let result = res.data;
                            console.log(result)
                            loader.style.display = "none"
                            window.location.reload()
                        })
                    break;
                case 'formPassword':
                    loader.style.display = "inline-block"
                    var password = document.getElementById("newPassword").value;
                    var passwordRepeat = document.getElementById("passwordRepeat").value;
                    if (password != passwordRepeat) {
                        alert("las contraseñas no coinciden");

                    } else {


                        dataUpdate.append("password_actual", document.getElementById("password").value)
                        dataUpdate.append("bandera_update", 'password')
                        dataUpdate.append("id_usuario", id_usuario)
                        dataUpdate.append("password", document.getElementById("newPassword").value)
                        axios.post("http://fig.org.co/atlanticv2/usuarios/updateUserEmmafig", dataUpdate)
                            .then(res => {
                                loader.style.display = "none"
                                let result = res.data;
                                if (result == 3) {
                                    alert("la contraseña actual no coincide")

                                } else {
                                    alert("usuario actualizado correctamente")
                                
                                    document.getElementById("password").value ="";
                                    document.getElementById("newPassword").value ="";
                                    document.getElementById("passwordRepeat").value ="";
                                    window.location.reload()

                                }
                            })
                    }

                    break;
                case 'formTel':
                    loader.style.display = "inline-block"
                    dataUpdate.append("bandera_update", 'telefono')
                    dataUpdate.append("id_usuario", id_usuario)
                    dataUpdate.append("telefono", document.getElementById("numeroTelefono").value);
                    axios.post("http://fig.org.co/atlanticv2/usuarios/updateUserEmmafig", dataUpdate)
                        .then(res => {
                            document.getElementById("numeroTelefono").value ="";
                            alert("usuario actualizado correctamente")
                            loader.style.display = "none"
                            let result = res.data;
                            console.log(result)
                            window.location.reload()
                        })
                    break;

            }
        } else {
            formTap.reportValidity();
        }



    }

    render() {
        return (

            <div className="EditProfile ">


                <div className="row">
                    <div className="col m4">

                        <ul className="tabs" ref={Tabs => {
                            this.Tabs = Tabs;
                        }}>
                            <li className="tab "><a href="#infoUser" className="active"><i className="small material-icons floatElement">person</i>Informacion personal</a></li>
                            <li className="tab "><a href="#emailContent"><i className="small material-icons floatElement">email</i>Correo</a></li>
                            <li className="tab  "><a href="#passwordContent"><i className="small material-icons floatElement">fingerprint</i>Contraseña</a></li>
                            <li className="tab "><a href="#numeroContent"><i className="small material-icons floatElement">phone_android</i>Numero de telefono</a></li>

                        </ul>
                        <div id="loaderEdit" className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-green-only" >
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col m8 ">


                        <div id="infoUser" className="col tab-content">

                            <form id="formPersonalInfo" className="form-content">

                                <div className="input-field col s12 ">

                                    <input id="primer_nombre" type="text" className="validate" name="primer_nombre" required maxLength="10" />
                                    <label className="active" htmlFor="primer_nombre">Primer nombre</label>


                                </div>

                                <div className="input-field col s12 ">
                                    <input id="segundo_nombre" type="text" className="validate" maxLength="10" />
                                    <label className="active" htmlFor="segundo_nombre">Segundo nombre</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <input id="primer_apellido" type="text" className="validate" required maxLength="10" />
                                    <label className="active" htmlFor="primer_apellido">Primer apellido</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <input id="segundo_apellido" type="text" className="validate" maxLength="10" />
                                    <label className="active" htmlFor="segundo_apellido">Segundo apellido</label>
                                </div>
                                <button className="waves-light btn" id="btnSetUserInfo" onClick={(e) => this.validarFormulario("formPersonalInfo", e)} >Guardar cambios</button>
                                <div className="preloader-wrapper small active" id="loader">


                                </div>

                            </form>

                        </div>

                        <div id="emailContent" className="col tab-content">

                            <form className="form-content" id="emailForm">
                                <div className="input-field col s12 ">
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <button className="waves-light btn" id="btnSetEmail" onClick={(e) => this.validarFormulario("emailForm", e)} >Guardar cambios</button>

                            </form>
                        </div>

                        <div id="passwordContent" className="col tab-content">
                            <form className="form-content" id="formPassword">

                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="password" type="password" className="validate" maxLength="10" required />
                                        <label htmlFor="password">Contraseña actual</label>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <p>Ingrese una contraseña de maximo 10 caracteres.</p>
                                        </div>
                                        <div className="input-field col s6"    >
                                            <input id="newPassword" type="password" className="validate" maxLength="10" required />
                                            <label htmlFor="password">Nueva contraseña</label>

                                        </div>
                                        <div className="input-field col s6"    >
                                            <input id="passwordRepeat" type="password" className="validate" maxLength="10" required />
                                            <label htmlFor="password">Confirmar contraseña</label>

                                        </div>
                                    </div>
                                    <button className="waves-light btn" id="btnSetPass" onClick={(e) => this.validarFormulario("formPassword", e)} >Guardar cambios</button>
                                </div>

                            </form>


                        </div>

                        <div id="numeroContent" className="col tab-content">
                            <form className="form-content" id="formTel">

                                <div className="input-field col s12 ">
                                    <input id="numeroTelefono" type="number" className="validate" maxLength="9" />
                                    <label htmlFor="numeroTelefono">Numero de telefono</label>
                                </div>
                                <button className="waves-light btn" id="btnSetTelefono" onClick={(e) => this.validarFormulario("formTel", e)} >Guardar cambios</button>


                            </form>
                        </div>




                    </div>
                </div>
            </div>
        );
    }


}
export default Editprofile;