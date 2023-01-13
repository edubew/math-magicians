import React, { Component } from 'react';
import calculate from '../logic/calculate';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  // Event Listener
  eventHandler = (e) => {
    const value = e.target.textContent;
    this.setState((obj) => calculate(obj, value));
  };

  render() {
    const { next, total, operation } = this.state;
    const result = `${
      total || operation || next
        ? `${total || ''} ${operation || ''} ${next || ''}`
        : 0
    }`;
    return (
      <div className="calculator__container">
        <div className="calculator__output">
          <span>{result}</span>
        </div>
        <button type="submit" onClick={this.eventHandler}>
          AC
        </button>
        <button type="submit" onClick={this.eventHandler}>
          +/-
        </button>
        <button type="submit" onClick={this.eventHandler}>
          %
        </button>
        <button
          type="submit"
          onClick={this.eventHandler}
          className="calculator__operand"
        >
          ÷
        </button>
        <button type="submit" onClick={this.eventHandler}>
          7
        </button>
        <button type="submit" onClick={this.eventHandler}>
          8
        </button>
        <button type="submit" onClick={this.eventHandler}>
          9
        </button>
        <button
          type="submit"
          onClick={this.eventHandler}
          className="calculator__operand"
        >
          x
        </button>
        <button type="submit" onClick={this.eventHandler}>
          4
        </button>
        <button type="submit" onClick={this.eventHandler}>
          5
        </button>
        <button type="submit" onClick={this.eventHandler}>
          6
        </button>
        <button
          type="submit"
          onClick={this.eventHandler}
          className="calculator__operand"
        >
          -
        </button>
        <button type="submit" onClick={this.eventHandler}>
          1
        </button>
        <button type="submit" onClick={this.eventHandler}>
          2
        </button>
        <button type="submit" onClick={this.eventHandler}>
          3
        </button>
        <button
          type="submit"
          onClick={this.eventHandler}
          className="calculator__operand"
        >
          +
        </button>
        <button type="submit" onClick={this.eventHandler} className="span__two">
          0
        </button>
        <button type="submit" onClick={this.eventHandler}>
          .
        </button>
        <button
          type="submit"
          onClick={this.eventHandler}
          className="calculator__operand"
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
