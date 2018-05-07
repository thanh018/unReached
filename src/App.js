import React, { Component } from 'react';
import Todos from './todos-redux-saga/components/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos></Todos>
      </div>
    );
  }
}

export default App;
