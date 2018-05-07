import React, { Component } from 'react';

import Item from './Item';

export default class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((item, idx)=> (
            <Item
              key={idx}
              data={item}
              clickItem={this.props.clickItem}
              deleteItem={this.props.deleteItem}/>
          ))
        }
      </ul>
    );
  }
}
