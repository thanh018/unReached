import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const items = this.props.items.map((item, idx)=> {
      return <TodoItem
          key={idx}
          id={item.id}
          name={item.name}
          status={item.status}
          clickItem={this.props.clickItem}
          deleteItem={this.props.deleteItem}/>
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}
