import React, { Component } from 'react';
import '../../styles/Todos.css';

import Form from '../containers/Form';
import List from '../containers/List';

class Todos extends Component {
  render() {
    return (
      <div className="todos">
        <Form/>
        <List/>
      </div>
    );
  }
}

export default Todos;
