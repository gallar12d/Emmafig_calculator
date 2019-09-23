import React from 'react';
//import logo from './logo.svg';
import Menu from './components/menu/Menu';

import Footer from './components/footer/Footer';


import Faq from './components/faq/Faq';

import './App.css';


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

function FaqMaster() {
  
  return (
 
    <div className="FaqMaster">
     
      <Menu></Menu>    
      <Faq  />  
     
      <Footer></Footer> 
     
    </div>
   
  );
  
  
}
 

export default FaqMaster;
