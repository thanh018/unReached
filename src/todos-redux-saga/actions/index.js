import {
  UPDATE_FILTER,

  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,

  POST_TODOS_REQUEST,
  POST_TODOS_SUCCESS,
  POST_TODOS_FAILURE,

  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,

  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE
} from '../constants'

// ____________________________________________________________________________
//                                                                    GET_TODOS
export const getTodos = () => ({ type: GET_TODOS_REQUEST })

export const getTodosSuccess = (todos) =>({ type: GET_TODOS_SUCCESS, todos })

export const getTodosFailure = () => ({ type: GET_TODOS_FAILURE })

// ____________________________________________________________________________
//                                                                   POST_TODOS
export const postTodos = (name) => ({ type: POST_TODOS_REQUEST, name })

export const postTodosSuccess = (todos) => ({ type: POST_TODOS_SUCCESS, todos })

export const postTodosFailure = () => ({ type: POST_TODOS_FAILURE })

// ____________________________________________________________________________
//                                                                  UPDATE_TODO
export const updateTodo = (todo) => ({ type: UPDATE_TODO_REQUEST, todo })

export const updateTodoSuccess = (todos) => ({ type: UPDATE_TODO_SUCCESS, todos })

export const updateTodoFailure = () => ({ type: UPDATE_TODO_FAILURE })

// ____________________________________________________________________________
//                                                                  DELETE_TODO
export const deleteTodo = (todo) => ({ type: DELETE_TODO_REQUEST, todo})

export const deleteTodoSuccess = (todos) => ({ type: DELETE_TODO_SUCCESS, todos })

export const deleteTodoFailure = () => ({ type: DELETE_TODO_FAILURE })

// ____________________________________________________________________________
//                                                                UPDATE_FILTER
export const updateFilter = (name, status) => ({ type: UPDATE_FILTER, name, status})
