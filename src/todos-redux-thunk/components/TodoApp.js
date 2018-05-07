import React, { Component } from 'react';
import '../../styles/Todos.css';

import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';

export default class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}
