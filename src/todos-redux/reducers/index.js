import { combineReducers } from 'redux'

import * as CONSTS from '../constants'


const initialState = {
  filters: [ CONSTS.filterValues.active, CONSTS.filterValues.inActive ],
  todos: [],
  isFetching: false
}

const getMaxId = (todos) => (Math.max.apply(null, [...todos.map(ele => ele.id), -1]))

const toggleTodo = ({ todos }, action) => ([...todos].map(todo => {
  todo.id === action.id && (todo.status = !todo.status);
  return todo;
}))

const addTodo = ({ todos }, action) => ([
  ...todos,
  {
    id: getMaxId(todos) + 1,
    name: action.name,
    status: false
  }
])

const removeTodo = ({ todos }, action) => (
  [...todos].filter(todo => (todo.id !== action.id))
)

const updateFilter = ({ filters }, action) => (
  action.status
    ? [...new Set([...filters].concat(action.name))]
    : [...filters].filter(ele => ele !== action.name)
)

function todoApp (state = initialState, action) {
  switch(action.type) {
    case CONSTS.UPDATE_FILTER:
      return { ...state, ...{ filters: updateFilter(state, action) }}
    case CONSTS.ADD_TODO:
      return { ...state, ...{ todos: addTodo(state, action) }}
    case CONSTS.REMOVE_TODO:
      return { ...state, ...{ todos: removeTodo(state, action) }}
    case CONSTS.TOGGLE_TODO:
      return { ...state, ...{ todos: toggleTodo(state, action) }}
    default:
      return state
  }
}

export default combineReducers({ todoApp })
