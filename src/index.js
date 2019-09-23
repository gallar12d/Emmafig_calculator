import React from 'react';
import ReactDOM from 'react-dom';
import { Route,  HashRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';

import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FaqMaster from './FaqMaster';
import PerfilMaster from './PerfilMaster';
import EditperfilMaster from './EditPerfilMaster';
import Terminos_Condiciones from './components/terminos_condiciones/Terminos'


const routing = (
    <Router >
      <div>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/goto/:ancla" render={(props) => <App {...props} />}/> 
            <Route exact path="/citas" component={App} />  
            <Route exact path="/testimoniios" component={App} /> 
            <Route exact path="/contacto" component={App} /> 
            <Route exact path="/faq" component={FaqMaster} />
            <Route exact path="/perfil" component={PerfilMaster} />    
            <Route exact path="/Editperfil" component={EditperfilMaster} />      
            <Route exact path="/terminos_condiciones" component={Terminos_Condiciones} />       
            <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
