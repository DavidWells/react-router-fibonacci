import React, { Component } from 'react';
//import ReactMarkdown from 'react-markdown';
var ReactMarkdown = require('react-markdown');

export default class Formula extends Component {
  render() {
      const num = (this.props.num) ? this.props.num : 604;
      const answer = (this.props.answer) ? this.props.answer : 7.569195261530608e+125;
      const input = ['```js/**\n',
    ' * Binet Fibonacci number formula for determining\n',
    ' * sequence values\n',
    ' * @param {int} n - the position in sequence to lookup\n',
    ' * @returns {int} the Fibonacci value of sequence @n\n',
    ' */\n',

    '\nvar fib = function (n) {\n',
    '        return Math.floor((Math.pow( 1 + Math.sqrt(5), n) \n',
    '            - Math.pow( 1 - Math.sqrt(5), n)) \n',
    '            / (Math.pow(2, n) * Math.sqrt(5)));       \n',
    '    };\n',
    '\n',
    'var answer = fib(' + num + '); // ' + answer + '\n```',
].join('');

        return (
            <div className="container">
              <h3 id="code" className="page-header">Fibonacci Formula</h3>
              <div>
                  <ReactMarkdown source={input} />
                  <a href="http://stackoverflow.com/questions/7944239/generating-fibonacci-sequence#answer-31091573" target="_blank">source</a>
              </div>
            </div>
        );

  }
}
