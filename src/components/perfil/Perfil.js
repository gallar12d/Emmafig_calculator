import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";
import $ from 'jquery';

let tableDataAtl;
let tableDataEmf
let Datagbl;

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_resultados: [],
            resultados: [],
            resultados_emf: [],
            primer_nombre: '',
            segundo_nombre: '',
            primer_apellido: '',
            segundo_apellido: '',
            fecha_nacimiento: '',
            no_identificacion: '',
            file: ''
        }

        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)


    }


    onChange(e) {
        e.preventDefault() // Stop form submit
        var fileName = e.target.files[0].name;
        this.fileUpload(e.target.files[0]).then((response) => {
            var result = response.data;

            if (result == 1) {
                //traer id de usuario desde el local storage
                //console.log(localStorage.getItem('id'))
                var srcProfileImg = "http://fig.org.co/atlanticv2/public/userAvatar/" + localStorage.getItem('id') + "/" + fileName
                this.setState({
                    file: srcProfileImg
                })
            } else {
                alert("error al cambiar la foto de perfil");
            }
        })
        //this.setState({ file: e.target.files[0] })
    }
    fileUpload(file) {
        const url = 'http://fig.org.co/atlanticv2/usuarios/updateProfilePicture';
        const formData = new FormData();
        formData.append('file', file)
        //traer id de usuario desde el local storage
        //console.log(localStorage.getItem('id'))
        formData.append('id_usuario', localStorage.getItem('id'))
        formData.append("file_name", file.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)
    }


    componentDidMount() {
        M.Tabs.init(this.Tabs);
        

        const userData = new FormData();
        //axios.post('http://localhost/api1/rest-api-authentication-example/api/getIdentyById.php', {
        axios.post('https://emmafig.com/api1/rest-authentication/api/getIdentyById.php', {
            "id": localStorage.getItem('id')
        }
        )
            .then(res => {
                this.setState({
                    primer_nombre: res.data.primer_nombre,
                    segundo_nombre: res.data.segundo_nombre,
                    primer_apellido: res.data.primer_apellido,
                    segundo_apellido: res.data.segundo_apellido,
                    fecha_nacimiento: res.data.fecha_nacimiento,
                    no_identificacion: res.data.no_identificacion
                })
                //userData.append("identificacion", res.data.no_identificacion)

                //consultar si hay foto de perfil
                let id_user = new FormData();
                //traer id de usuario desde el local storage
                //console.log(localStorage.getItem('id'))
                var id_usuario = localStorage.getItem('id');
                id_user.append('id_usuario', id_usuario);
                axios
                    .post("http://emmafig.com/api1/searchProfilePicture", id_user)
                    .then(res => {
                        let result = res.data;
                        console.log(result);
                        
                        var srcProfile;
                        var srcProfileImg;
                        if (result.filename[0].avatar != null) {
                      
                            //console.log(result.filename[0].avatar);
                            srcProfile = result.filename[0].avatar
                            srcProfileImg = "http://fig.org.co/atlanticv2/public/userAvatar/" + id_usuario + "/" + srcProfile

                        } else {
                            
                            srcProfileImg = process.env.PUBLIC_URL + "/img/default-profile.png"
                        }
                        this.setState({
                            file: srcProfileImg
                        })
                       
                        var elem = document.getElementById("loaderphoto")
                        elem.parentNode.removeChild(elem)
                       
                        

                    })


                axios
                    .post("http://emmafig.com/api1/searchHistorialCitas", id_user)
                    .then(res => {
                        let result = res.data;

                        //actualizar estado 
                        //result = JSON.parse(result)
                        console.log(result);
                        console.log(result.resultados_atl)
                        this.setState({
                            data_resultados: result
                        })
                        if (result.code == 200) {
                            this.setState({
                                resultados: this.state.data_resultados.resultados_atl,
                                resultados_emf: this.state.data_resultados.resultados_emf
                            })
                        } else {
                            document.getElementById("msj_error").innerHTML = "no se encontraron resultados";
                        }
                        if (this.state.resultados != null || result.code == 400 || this.state.resultados_emf != null) {

                            var elem = document.getElementById("loader")
                            elem.parentNode.removeChild(elem)
                            return false


                        }
                    })

            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });



    }



    changePictureProfile(e) {
        const url = 'http://fig.org.co/atlanticv2/usuarios/updateProfilePicture';
        const pictureFile = new FormData();

        pictureFile.append('imgFile', e.target.files[0].name)

        //traer id de usuario desde el local storage
        //console.log(localStorage.getItem('id'))
        pictureFile.append("id_usuario", localStorage.getItem('id'))
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(url, pictureFile, config).then(res => {
            let result = res.data;
            console.log(result)

        })


    }

    render() {
        var strUrl;
        let tableData;
        let tableDataEmf;

        if (this.state.data_resultados.resultados_atl != null && this.state.data_resultados.resultados_emf != null) {

            tableData = this.state.resultados.map(function (e) {
                strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";

                return <tr>
                    <td>
                        {e.nombre_servicio}
                    </td>
                    <td>
                        {e.fecha_atencion}
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Ver </a>
                    </td>
                </tr>
            })

            tableDataEmf = this.state.resultados_emf.map(function (e) {
                strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";
                return <tr>

                    <td>
                        ESTIMACION DE RIESGO
            </td>
                    <td>
                        {e.fecha_estimacion}
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Ver </a>
                    </td>
                </tr>
            })
        } else if (this.state.data_resultados.resultados_atl != null && this.state.data_resultados.resultados_emf == null) {

            tableData = this.state.resultados.map(function (e) {
                strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";

                return <tr>
                    <td>
                        {e.nombre_servicio}
                    </td>
                    <td>
                        {e.fecha_atencion}
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Ver </a>
                    </td>
                </tr>
            })
        } else if (this.state.data_resultados.resultados_atl == null && this.state.data_resultados.resultados_emf != null) {
            tableDataEmf = this.state.resultados_emf.map(function (e) {
                strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";
                return <tr>

                    <td>
                        ESTIMACION DE RIESGO
                </td>
                    <td>
                        {e.fecha_estimacion}
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Ver </a>
                    </td>
                </tr>
            })
        }





        /*
             let tableData = this.state.resultados.map(function (e) {
                 strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion+"?emmafig=true";
     
                 return <tr>
                     <td>
                         {e.nombre_servicio}
                     </td>
                     <td>
                         {e.fecha_atencion}
                     </td>
                     <td>
                         <a target="_blank" href={strUrl}>Ver </a>
                     </td>
                 </tr>
             })
 
         let tableDataEmf = this.state.resultados_emf.map(function(e){
             strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion+"?emmafig=true";
             return <tr>
 
             <td>
                 ESTIMACION DE RIESGO
             </td>
             <td>
                 {e.fecha_estimacion}
             </td>
             <td>
 
             </td>
             </tr> 
         })
         */


        return (

            <div className="Perfil">


                <div className="container emp-profile">

                    <div className="row">
                        <div className="col m5">

                            
                            <div id="loaderphoto" className="preloader-wrapper big active">
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
                            <div className="profile-img">
                              <div className="row">
                                  <div className="col m12">
                                <img id="profile_picture" src={this.state.file} alt="" />

                                  </div>

                              </div>
                                <div className="file btn btn-lg btn-primary">
                                    Cambiar Foto
                                        <form id="form_img_profile" onChange={this.onChange} >

                                        <input type="file" id="foto_perfil" name="file" />
                                    </form>
                                </div>

                                
                            </div>
                        </div>
                        <div className="col md6">
                            <div className="profile-head">
                                <h5 id="textCapitalize">
                                    
                                    {this.state.primer_nombre + ' ' + this.state.segundo_nombre + ' ' + this.state.primer_apellido + ' ' + this.state.segundo_apellido}
                                    
                                    
                                </h5>
                                <h6>
                                    N° identificacion: {this.state.no_identificacion}
                                </h6>
                                <p className="proile-rating">Fecha de nacimiento : <span>{this.state.fecha_nacimiento}</span></p>


                            </div>
                        </div>

                    </div>
                    <div className="row">

                        <div className="col m12">
                            <h6>REGISTRO DE ACTIVIDAD</h6>
                            <table className="striped" id="tableResult">
                                <thead>
                                    <tr>
                                        <th>Prueba</th>
                                        <th>Fecha resultado</th>
                                        <th>Resultado</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {tableData}
                                    {tableDataEmf}
                                </tbody>

                            </table>
                            <p id="msj_error"></p>
                            <div className="preloader-wrapper small active" id="loader">
                                <div className="spinner-layer spinner-green-only">
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
                    </div>

                </div>

            </div>

        );
    }
}
export default Perfil;