import { connect } from 'react-redux';

import { toggleTodo, removeTodo } from '../actions';

import List from '../components/List';

const STATUS = {
  'true': 'active',
  'false': 'inactive'
};

const filterTodos = (todos, filters) => (
  [...todos].filter(item =>
    filters.indexOf(STATUS[item.status.toString()]) > -1
  )
)

const mapStateToProps = ({ todoApp }) => {
  const { todos, filters } = todoApp;
  return { todos: filterTodos(todos, filters) }
}

const mapDispatchToProps = (dispatch) => ({
  clickItem: (id) => dispatch(toggleTodo(id)),
  deleteItem: (id) => dispatch(removeTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

