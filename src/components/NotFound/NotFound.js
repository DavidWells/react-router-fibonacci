import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFoundComp extends Component {
  render() {

        return (
          <div className="container spacing-top">
            <div className="jumbotron">
              <h1>Sorry but this page doesn't exist</h1>
              <p>Tweet @DavidWells if you are lost</p>
              <Link to={'/'}>Go Home</Link>
            </div>
          </div>
        );

  }
}
