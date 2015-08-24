import React, { Component } from 'react';
//import { Link } from 'react-router';
// Application components
import { Router } from 'react-router';

// Actions
export default class Calculate extends Component {
  constructor(props, context){
     super(props, context);
     this.state = {
        error: false,
        errorType: null
     };
  }

  handleSubmit(event){
    event.preventDefault();
    const { router } = this.context;
    const number = this.refs.number.getDOMNode().value;
    const numberValid = Number.isInteger(number);

    if (!number) {
      return this.setState({ error: true, errorType: 'number'});
    }

    router.replaceWith('/fibonacci/' + number);

    /* manual route change = this.context.router.transitionTo('/welcome');*/

  }
  resetErrorClass(){
    var that = this;
    setTimeout(function() {
         that.setState({ error: false });
    }, 1000);
  }
  getErrorMsg(error){
      switch (error) {
        case "number":
          return "Please enter a number bro!";
          break;
        default:
          return null;
      }
  }
  showForm(error, errorType) {
    const errorShakeEffect = "animated shake";
    const errorStyle = {border: '1px solid crimson'};
    const shakeNumberInput = (error && errorType === "number") ? errorShakeEffect : "";
    const numErrorStyle = (errorType === "number") ? errorStyle : {};
    const errorMsg = ::this.getErrorMsg(this.state.errorType);

    return (
        <form className="form" onSubmit={::this.handleSubmit}>
          <span className="error-msg">{errorMsg}</span>
          <input type="number" style={numErrorStyle} className={shakeNumberInput} ref="number" placeholder="Enter Number" />
          <button type="submit" id="login-button">Fibonacci This!</button>
        </form>
    );

  }
  render() {
    const error = this.state.error;
    const errorType = this.state.errorType;

    return (
      <section>
        <div className="wrapper">
          <div className="container" id="form">
            <h1>Calculate the Fibonacci Sequence</h1>

              {this.showForm(error, errorType)}

          </div>

          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    );
  }
}

/* Define this or stuff breaks */
Calculate.contextTypes = {
    router: React.PropTypes.object.isRequired
};
