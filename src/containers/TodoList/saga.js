import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import {
  listTodosSucces,
  deleteTodoSuccess,
  completeTodoSucces
} from './actions';
import {
  LIST_TODOS_REQUEST,
  DELETE_TODO_REQUEST,
  COMPLETE_TODO_REQUEST
} from './constants';

export function* listTodos() {
  try {
    const response = yield call(request, {
      url: '/api/task',
      method: 'get'
    });
    yield put(listTodosSucces(response.data));
  } catch (error) {}
}

export function* deleteTodo(action) {
  try {
    const url = '/api/task/' + action.id;
    const response = yield call(request, {
      url: url,
      method: 'delete'
    });
    yield put(deleteTodoSuccess());
  } catch (error) {}
}

export function* completeTodo(action) {
  try {
    const url = '/api/task/' + action.id;
    const response = yield call(request, {
      url: url,
      method: 'patch',
      data: {
        completed: true
      }
    });
    yield put(completeTodoSucces(response.data));
  } catch (error) {}
}

export default function* todoSaga() {
  yield takeLatest(LIST_TODOS_REQUEST, listTodos);
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
  yield takeLatest(COMPLETE_TODO_REQUEST, completeTodo);
}
