//Esto es lo que va a ser llamado por el index, que es lo se muestra en el navegador

import Navbar from "./components/Navbar";
import pf from './assets/images/pf.png';
import './assets/css/App.css';
import './assets/css/styles.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import store from './redux/store';

import {Provider} from 'react-redux';

import CantidadHTMLHook from './components/cantidadhtml.hook';
import CompraHTMLHook from './components/comprahtml.hook';

import CantidadJAVAHook from './components/cantidadjava.hook';
import CompraJAVAHook from './components/comprajava.hook';

import CantidadPYTHONHook from './components/cantidadpython.hook';
import CompraPYTHONHook from './components/comprapython.hook';

function App() {

  return (
    <div className="App">
      <img src={pf} className="App-pf" alt="pf"/>
      <Navbar />
      <div className="container">
        <header>
          <article>
            <h1 >Hola, soy Programming Friend</h1>
            <p style={{fontSize:'20px'}}>
            Soy el pequeño robot que te da la bienvenida a un nuevo mundo de posibilidades en el entorno de la programación.
            <br/>Te acompañaré de ahora en adelante en el curso que elijas abajo.
            Seré una ayuda para ti.
            </p>
          </article>
        </header>  
      </div>
    <body className="App-body">
    <Provider store = {store}>
      <div className="App-recuadro">
        <div className="row"  >
          <div className= "col-12" >
            <div className="card mt-4 " style={{maxWidth: '400px',height:'180px'}} >
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={require('./assets/images/html.png')} alt="html" className="card-img"/>                 
                </div>
                <div className="col-8">
                  <div className="card-body text-center">
                    <div>
                      <CantidadHTMLHook/>
                    </div>
                    <br/>
                    <CompraHTMLHook/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>  
    
    <Provider store = {store}>
      <div className="App-recuadro">
        <div className="row"  >
          <div className= "col-12" >
            <div className="card mt-4 " style={{maxWidth: '400px',height:'180px'}} >
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={require('./assets/images/java.png')} alt="java" className="card-img"/>                 
                </div>
                <div className="col-8">
                  <div className="card-body text-center">
                    <div>
                      <CantidadJAVAHook/>
                    </div>
                    <br/>
                    <CompraJAVAHook/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>  

    <Provider store = {store}>
      <div className="App-recuadro">
        <div className="row"  >
          <div className= "col-12" >
            <div className="card mt-4 " style={{maxWidth: '400px',height:'180px'}} >
              <div className="row no-gutters">
                <div className="col-4" style={{verticalAlign: 'right'}}>
                  <img src={require('./assets/images/python.png')} alt="python" className="card-img"/>                 
                </div>
                <div className="col-8">
                  <div className="card-body text-center">
                    <div>
                      <CantidadPYTHONHook/>
                    </div>
                    <br/>
                    <CompraPYTHONHook/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>  

    </body>
    <footer className="App-footer">
      <br/>
      <p >
        Conoce más de nuestras plataformas y productos
      </p>
      <a
        className="App-link"
        href="https://www.edutechca.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        EduTech
      </a>
      <img src={pf} className="App-pf" alt="pf"/>
      <br/>
    </footer>
    </div>
  );
}

export default App;