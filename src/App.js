import React, { Component } from 'react';
import { Link } from 'react-router';
import 'bootstrap-webpack';


// Load Global styles
import 'style!./styles/main.scss';

// Application components
import { Header, Footer, Calculate } from 'components';

export default class App extends Component {
  render() {
    const component = (this.props.children) ? this.props.children : <Calculate/>;

    return (
      <section>
        <Header />
        <div className="container-full">
          <div className="row">
              { component }
          </div>
        </div>
       { /* <Footer /> */ }
      </section>
    );
  }
}
