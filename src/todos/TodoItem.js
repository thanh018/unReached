import React, { Component } from 'react';

export default class TodoItem extends Component {
  onSelect() {
    return this.props.clickItem(this.props.id);
  }

  onDelete(evt) {
    evt.stopPropagation();
    this.props.deleteItem(this.props.id);
  }
  render() {
    return (
      <li
        className={this.props.status ? '' : 'inactive'}
        onClick={this.onSelect.bind(this)}>
        {this.props.name}

        <button onClick={this.onDelete.bind(this)}>x</button>
      </li>
    );
  }
}
