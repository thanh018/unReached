import {
  GET_TODOS_SUCCESS,
  POST_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  GET_TODOS_FAILURE,
  POST_TODOS_FAILURE,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_FAILURE
} from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
    case POST_TODOS_SUCCESS:
    case UPDATE_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
      return action.todos
    case GET_TODOS_FAILURE:
    case POST_TODOS_FAILURE:
    case UPDATE_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
      return state
    default:
      return state
  }
}
