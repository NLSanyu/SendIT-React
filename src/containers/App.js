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
import ProfilePage from './ProfilePage';

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
              path='/signup'
              component={SignUpPage}
          />
          <Route
              path='/login'
              component={LogInPage}
          />
          <Route
              path='/profile'
              component={ProfilePage}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;