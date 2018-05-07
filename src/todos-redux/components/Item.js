import React, { Component } from 'react';

export default class Item extends Component {
  clickItem() {
    this.props.clickItem(this.props.data.id)
  }

  deleteItem() {
    this.props.deleteItem(this.props.data.id)
  }

  render() {
    const { data } = this.props;
    return (
      <li
        className={data.status ? '' : 'inactive'}
        onClick={this.clickItem.bind(this)}>

        {data.name}
        <button onClick={this.deleteItem.bind(this)}>x</button>

      </li>
    );
  }
}
