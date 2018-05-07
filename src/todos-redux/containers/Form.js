import { connect } from 'react-redux';

import Form from '../components/Form';

import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(
  null,
  mapDispatchToProps
)(Form);
