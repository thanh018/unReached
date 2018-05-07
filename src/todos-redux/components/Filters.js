import React, { Component } from 'react';

const filterArr = ['active', 'inactive'];

export default class Filters extends Component {
  onFilter(evt) {
    const target = evt.target;

    this.props.updateFilter(target.name, target.checked);
  }

  render() {
    const { filters } = this.props;
    return (
      <div className="todos-filters">
        {
          filterArr.map((ele, idx) => (
            <label key={idx} htmlFor={ele}>{ele}
              <input
                type="checkbox"
                checked={(filters.indexOf(ele) > -1)}
                name={ele}
                id={ele}
                onChange={this.onFilter.bind(this)}/>
            </label>
          ))
        }
      </div>
    )
  }
}
