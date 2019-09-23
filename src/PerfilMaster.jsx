import React from 'react';
//import logo from './logo.svg';
import Menu from './components/menu/Menu';

import Footer from './components/footer/Footer';


import Perfil from './components/perfil/Perfil';

import './App.css';
function PerfilMaster() {
  
    return (
   
      <div className="Perfil">
       
        <Menu></Menu>    
        <Perfil />  
       
        
       
      </div>
     
    );
    
    
  }
   
  
  export default PerfilMaster;