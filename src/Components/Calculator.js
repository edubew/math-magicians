import React, { Component } from 'react';

export class Calculator extends Component {
  render() {
    return (
      <div className="calculator__container">
        <div className="calculator__output">
          <span>0</span>
        </div>
        <button type="submit">AC</button>
        <button type="submit">+/-</button>
        <button type="submit">%</button>
        <button type="submit" className="calculator__operand">
          ÷
        </button>
        <button type="submit">7</button>
        <button type="submit">8</button>
        <button type="submit">9</button>
        <button type="submit" className="calculator__operand">
          x
        </button>
        <button type="submit">4</button>
        <button type="submit">5</button>
        <button type="submit">6</button>
        <button type="submit" className="calculator__operand">
          -
        </button>
        <button type="submit">1</button>
        <button type="submit">2</button>
        <button type="submit">3</button>
        <button type="submit" className="calculator__operand">
          +
        </button>
        <button type="submit" className="span__two">
          0
        </button>
        <button type="submit">.</button>
        <button type="submit" className="calculator__operand">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
