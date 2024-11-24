import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [checkeado1, setcheckeado1] = useState(false);
    const [checkeado2, setcheckeado2] = useState(false);
    const [checkeado3, setcheckeado3] = useState(false);
    const [checkeado4, setcheckeado4] = useState(false);
    const [checkeado5, setcheckeado5] = useState(false);

    function ActualizarCheck1(event) {
        setcheckeado1(event.target.checkeado1);
    }
    function ActualizarCheck2(event) {
        setcheckeado2(event.target.checkeado2);
    }
    function ActualizarCheck3(event){
        setcheckeado3(event.target.checkeado3);
    }
    function ActualizarCheck4(event) {
        setcheckeado4(event.target.checkeado4);
    }
    function ActualizarCheck5(event) {
        setcheckeado5(event.target.checkeado5);
    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sacar al perro:</p><input type = "checkBox" value1 = {checkeado1} onChange = {ActualizarCheck1}/>
        <p>Recoger la cocina</p><input type = "checkBox" value2 = {checkeado2} onChange = {ActualizarCheck2}/>
        <p>Limpiar el suelo:</p><input type = "checkBox" value3 = {checkeado3} onChange = {ActualizarCheck3}/>
        <p>Limpiar las ventanas:</p><input type = "checkBox" value4 = {checkeado4} onChange = {ActualizarCheck4}/>
        <p>Pasar las aspiradora:</p><input type = "checkBox" value5 = {checkeado5} onChange = {ActualizarCheck5}/>
      </header>
    </div>
  );
}

export default App;

