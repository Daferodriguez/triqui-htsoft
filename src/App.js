import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Juego from './Juego';

class App extends Component {

  constructor(){
    super();
    this.state = {
      escogido: false,
      isX: false,
    }
    this.handleClickX = this.handleClickX.bind(this);
    this.handleClickO = this.handleClickO.bind(this);
  }

  handleClickX(){
    this.setState((state) => ({escogido: true, isX: true}))
  }

  handleClickO(){
    this.setState((state) => ({escogido: true, isX: false}))
  }

  render(i) {
    if(this.state.escogido){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Htsoft Triqui</h1>
          </header>
          <Juego className="juego" isX={this.state.isX}/>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Htsoft Triqui</h1>
        </header>
        <th className="inicioJuego">
          <button className="jugX" onClick={this.handleClickX}>Jugador X</button>
          <button className="jugO" onClick={this.handleClickO}>Jugador O</button>
        </th>
      </div>
    );
  }
}

export default App;
