import React, { Component } from 'react';
import Tablero from './Tablero'
import './App.css';

function calcGanador(casillas) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
      return casillas[a];
    }
  }
  return null;
}

export default class Juego extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [
        {
          casillas: Array(9).fill(null)
        }
      ],
      movimientos: 0,
      xIsNext: this.props.isX
    };
  }

  handleClick(i) {
    const historial = this.state.historial;
    const jugActual = historial[historial.length - 1];
    const casillas = jugActual.casillas;
    // No se puede cambiar una vez se haya puesto un signo
    if (calcGanador(casillas) || casillas[i]) {
      return;
    }
    casillas[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      historial: historial.concat([
        {
          casillas: casillas
        }
      ]),
      movimientos: historial.length,
      xIsNext: !this.state.xIsNext
    });
  }


  render() {
    const historial = this.state.historial;
    const jugActual = historial[this.state.movimientos];
    const ganador = calcGanador(jugActual.casillas);

    let condicionJuego;
    if (ganador) {
      condicionJuego = "Ganador: " + ganador;
    } else if(this.state.movimientos === 9 && !ganador){
      condicionJuego = "Empate!!";
    } else {
      condicionJuego = "Turno del jugador: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="juego">
        <div>
          <Tablero
            casillas={jugActual.casillas}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{condicionJuego}</div>
        </div>
      </div>
    );
  }
}
