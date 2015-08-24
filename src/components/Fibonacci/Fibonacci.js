import React, { Component } from 'react';
import Formula from '../Formula/Formula.js';

export default class Fibonacci extends Component {
    constructor(props) {
        super(props);
        this.fibonacci.bind(this);
    }
    /* Generate Fibonacci Number */
    fibonacci(n){
        return Math.floor((Math.pow( 1 + Math.sqrt(5), n)
                    - Math.pow( 1 - Math.sqrt(5), n)) / (Math.pow(2, n) * Math.sqrt(5)));
    }
    componentWillMount() {
        console.log(this.props.params.number);
    }
    render() {
        const num = this.props.params.number;
        const answer = this.fibonacci(num);
        return (
            <div className="fibonacci">
                <div className="answer-wrapper">
                  <div className="answer-title">
                    <h2><span>The Fibonacci of {num} is:</span></h2>
                  </div>
                  <div className="answer">
                    <h1><span>{answer}</span></h1>
                  </div>
                </div>
                 { /*<div className="formula">
                    <Formula title={false} num={num} answer={answer} />
                  </div>*/}
            </div>
        );
  }
}
