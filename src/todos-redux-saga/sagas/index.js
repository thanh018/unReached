import { takeEvery, call, put } from 'redux-saga/effects'

import {
  GET_TODOS_REQUEST,
  POST_TODOS_REQUEST,
  DELETE_TODO_REQUEST,
  UPDATE_TODO_REQUEST
} from '../constants'

import {
  getTodosSuccess,
  postTodosSuccess,
  updateTodoSuccess,
  deleteTodoSuccess
} from '../actions'

import {
  getTodosData,
  postTodosData,
  updateTodoData,
  deleteTodoData
} from '../asyncs'

export function* getTodosRequest () {
  try {
    let response = yield call(getTodosData)
    yield put(getTodosSuccess(response.data))
  } catch (error) {
    console.log('Get Todos failure', error)
  }
}

export function* postTodosRequest ({ name }) {
  try {
    let response = yield call(postTodosData, name)
    yield put(postTodosSuccess(response.data.todos))
  } catch (error) {
    console.log('Post Todo failure', error)
  }
}

export function* updateTodoRequest ({ todo }) {
  try {
    let response = yield call(updateTodoData, todo)
    yield put(updateTodoSuccess(response.data.todos))
  } catch (error) {
    console.log('Post Todo failure', error)
  }
}

export function* deleteTodoRequest ({ todo }) {
  try {
    let response = yield call(deleteTodoData, todo)
    yield put(deleteTodoSuccess(response.data.todos))
  } catch (error) {
    console.log('Post Todo failure', error)
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_TODOS_REQUEST, getTodosRequest)
  yield takeEvery(POST_TODOS_REQUEST, postTodosRequest)
  yield takeEvery(UPDATE_TODO_REQUEST, updateTodoRequest)
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodoRequest)
}
