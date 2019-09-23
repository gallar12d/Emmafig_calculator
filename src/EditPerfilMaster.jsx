import React from 'react';
//import logo from './logo.svg';
import Menu from './components/menu/Menu';




import EditPerfil from './components/perfil/Editprofile';

import './App.css';
function EditPerfilMaster() {
  
    return (
   
      <div className="Perfil">
       
        <Menu></Menu>    
        <EditPerfil />  
       
        
       
      </div>
     
    );
    
    
  }
   
  
  export default EditPerfilMaster;