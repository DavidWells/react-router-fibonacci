import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {

    return (
      <div id="home" className="header">
        <div className="container">
            <Link to={`/`} className="navbar-brand">React Router Fibonacci</Link>

             <span className="navi">
               <ul className="nav navbar-nav">

                   <li>
                     <Link to={`/formula/`}>Formula</Link>
                   </li>
               </ul>
               <div className="navbar-right">
                 <ul className="nav navbar-nav">

                 </ul>
               </div>

             </span>

        </div>
      </div>
    );
  }
}
