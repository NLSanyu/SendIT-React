import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../styles/App.css';
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
              exact path='/'
              component={HomePage}
          />
          <Route
              exact path='/signup'
              component={SignUpPage}
          />
          <Route
              exact path='/login'
              component={LogInPage}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;