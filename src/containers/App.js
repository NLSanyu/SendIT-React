import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../styles/App.css';
import HomePage from './HomePage';
import SignUpPage from './SignUp/SignUpPage';

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
        </Switch>
      </Router>
    );
  }
}
export default App;