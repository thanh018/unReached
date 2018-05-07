import React, { Component } from 'react';
import '../styles/Todos.css';
import TodoList from './TodoList';

const STATUS = {
  'true': 'active',
  'false': 'inactive'
};

class Todos extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        { id: 0, name: 'duyet', status: true },
        { id: 1, name: 'duyet1', status: false }
      ],
      tmpItems: [],
      filters: ['active', 'inactive'],
      inputValue: ''
    }
  }

  componentDidMount() {
    this.filterItems();
  }

  inputChange(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  clickItem(id) {
    const items = [].concat(this.state.items);
    const index = this.getIndex(id);
    items[index].status = !items[index].status;

    this.setState({ items: items }, () => {
      this.filterItems();
    })
  }

  deleteItem(id) {
    const items = [].concat(this.state.items);
    const index = this.getIndex(id);

    items.splice(index, 1);

    this.setState({ items: items }, () => {
      this.filterItems();
    })
  }

  onFilter(evt) {
    const target = evt.target;
    const name = target.name;
    const { filters } = this.state;

    const rFilters = target.checked
      ? [...new Set(filters.concat(name))]
      : filters.filter(ele => ele !== name);

    this.setState({
      filters: rFilters
    }, () => {
      this.filterItems();
    })

  }

  getMaxId () {
    return Math.max.apply(null, [...this.state.items.map(ele => ele.id), -1]);
  }

  getIndex(id) {
    return this.state.items.findIndex(ele => ele.id === id);
  }

  filterItems() {
    const { items, filters } =  this.state;

    const fResult = !filters.length
      ? []
      : items.filter(item => filters.indexOf(STATUS[item.status.toString()]) > -1)

    this.setState({
      tmpItems: fResult
    })
  }

  addTodo(evt) {
    evt.preventDefault();
    const id = this.getMaxId() + 1;
    const items = this.state.items.concat({ id, name: this.state.inputValue, status: true })

    this.setState({ items, inputValue: '' }, () => {
      this.filterItems();
    })
  }

  render() {
    const { filters, tmpItems, inputValue } =  this.state;

    return (
      <div className="todos">
        <form className="header">
          <h1>Welcome to react todo!</h1>
          <input type="text" value={inputValue} onChange={this.inputChange.bind(this)} placeholder="Title..."/>
          <button className="addBtn" onClick={this.addTodo.bind(this)}>Add</button>
          <label htmlFor="active"> Active
            <input
              type="checkbox"
              name="active"
              id="active"
              checked={(filters.indexOf('active') > -1)}
              onChange={this.onFilter.bind(this)}/>
          </label>
          <label htmlFor="inactive"> InActive
            <input
              type="checkbox"
              name="inactive"
              id="inactive"
              checked={(filters.indexOf('inactive') > -1)}
              onChange={this.onFilter.bind(this)}/>
          </label>
        </form>
        <TodoList
          deleteItem={this.deleteItem.bind(this)}
          clickItem={this.clickItem.bind(this)}
          items={tmpItems}/>
      </div>
    );
  }
}

export default Todos;
