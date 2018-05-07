import React, { Component } from 'react';
import Filters from '../containers/Filters';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  onChange(evt) {
    this.setState({
      value: evt.target.value
    })
  }

  addTodo(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state.value)

    this.setState({
      value: ''
    })
  }

  getMaxId (todos) {
    return Math.max.apply(null, todos.map(ele => ele.id), -1)
  }

  render() {
    return (
      <form className="header" onSubmit={this.addTodo.bind(this)}>
        <h1>Welcome to react todo!</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          placeholder="Title..."/>
        <button className="addBtn" type="submit">Add</button>
        <Filters/>
      </form>
    )
  }
}
