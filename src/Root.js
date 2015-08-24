import React, { Component } from 'react';
import App from './App';

import NotFoundComp from './components/NotFound/NotFound.js';

import { Router, Route, DefaultRoute, NotFoundRoute } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
/* uncomment to switch to hash history */
//import { history } from 'react-router/lib/HashHistory';

import { Services, Formula, Fibonacci, Calculate } from './components/';

export default class Root extends Component {

  render() {
    console.log(Route);
    return (
            <Router history={history}>
              <Route path="/" component={App}>
                <Route path='/fibonacci/' component={Calculate} />
                <Route path='/fibonacci/:number'
                       component={Fibonacci} />
                <Route path="calculate" component={Calculate}></Route>
                <Route path="formula" component={Formula}></Route>
                { /* not in this beta version of router <NotFoundRoute handler={NotFoundComp}/>*/}
              </Route>

            </Router>
    );
  }
}

