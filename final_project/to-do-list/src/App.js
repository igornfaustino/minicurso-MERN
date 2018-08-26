import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '../src/pages/login/login'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Lists from './pages/lists/lists';
import Todos from './pages/todos/todos'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Route path="/list/:id" component={Todos} />
          <Route path="/" component={Lists} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
