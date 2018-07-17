import React, { Component } from 'react';
import './App.css';

function Casilla(props) {
  return (
    <button className="casilla" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Tablero extends Component {
  pintarCasilla(i) {
    return (
      <Casilla
        value={this.props.casillas[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="fila">
          {this.pintarCasilla(0)}
          {this.pintarCasilla(1)}
          {this.pintarCasilla(2)}
        </div>
        <div className="fila">
          {this.pintarCasilla(3)}
          {this.pintarCasilla(4)}
          {this.pintarCasilla(5)}
        </div>
        <div className="fila">
          {this.pintarCasilla(6)}
          {this.pintarCasilla(7)}
          {this.pintarCasilla(8)}
        </div>
      </div>
    );
  }
}
