/*
 * action types CONSTANT
 */
import * as CONSTS from '../constants';

// function getTodos()

export function addTodo(name) {
  return { type: CONSTS.ADD_TODO, name }
}

export function toggleTodo(id) {
  return { type: CONSTS.TOGGLE_TODO, id }
}

export function removeTodo(id) {
  return { type: CONSTS.REMOVE_TODO, id }
}

export function updateFilter(name, status) {
  return { type: CONSTS.UPDATE_FILTER, name, status }
}
