import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../styles/App.css';
import HomePage from '../components/HomePage';
import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';
import ProfilePage from './ProfilePage';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div>
      <Router history={createBrowserHistory}>
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
      <ToastContainer />
      </div>
    );
  }
}
export default App;