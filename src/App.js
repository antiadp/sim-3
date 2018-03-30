import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from '../src/component/Nav/Nav';



class App extends Component {
  render() {
    return (
      <div className="App">
       {routes}
      </div>
    );
  }
}

export default App;
