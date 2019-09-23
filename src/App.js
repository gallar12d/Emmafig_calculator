import React from 'react';
//import logo from './logo.svg';
import Menu from './components/menu/Menu';
import Seccion1 from './components/seccion1/Seccion1';
import Calculadora from './components/calculadora/Calculadora';
import Testimonios from './components/testimonios/Testimonios';
import Footer from './components/footer/Footer';
import Citas from './components/citas/Citas';
import Contacto from './components/contacto/Contacto';
import Faq from './components/faq/Faq';
import {SectionsContainer, Section} from 'react-fullpage';
import ComponentMaster from './components/ComponentMaster'
import './App.css';
import ReactDOM from 'react-dom';
const app = document.querySelector('#app');
/*

let options = {
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              ['seccionCalculadora', 'seccionCitas', 'seccionTestimonios', 'seccionContacto'], // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
  navigation:           true, // use dots navigatio
  scrollBar:            false, // use the browser default scrollbar
  sectionClassName:     'Section', // the section class name
  sectionPaddingTop:    '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
};
*/

function App(props) {


  let ancla = props.match.params.ancla
  
  return (
 
    <div className="App">
      {/* 
      
      <Menu></Menu>      
      <Seccion1 ></Seccion1>
      <Calculadora></Calculadora>
      <Citas></Citas>
      <Testimonios></Testimonios> 
      <Contacto></Contacto> 
      <Footer></Footer> 
      */}
      <ComponentMaster ancla = {ancla}></ComponentMaster>
    </div>
   
  );
  
  
}
 

export default App;
